import assert from "node:assert/strict";
import {
  createInitialPickerState,
  createStoredPickerState,
  getPickerContributions,
  getPickerReasonIds,
  parseStoredPickerState,
  pickerQuestionIds,
  pickerTiePriority,
  scoreClassPicker,
} from "../src/data/class-picker.ts";

const scenarios = [
  [{ combat: "defensive_melee", mode: "solo", difficulty: "easy", priority: "survival" }, "mercenary", "Sword & Shield"],
  [{ combat: "ranged_magic", mode: "trio", difficulty: "moderate", priority: "control" }, "sorcerer", "Stardust"],
  [{ combat: "ranged_physical", mode: "solo", difficulty: "moderate", priority: "sustain" }, "blackarrow", "Hunter"],
  [{ combat: "mobile_melee", mode: "solo", difficulty: "high", priority: "mobility" }, "shadowstrix", "Daggers"],
  [{ combat: "support_control", mode: "trio", difficulty: "moderate", priority: "support" }, "seer", "Catalyst"],
  [{ combat: "heavy_pressure", mode: "trio", difficulty: "high", priority: "control" }, "withered-knight", "Polearm & Shield"],
];

const primarySlugs = new Set();
for (const [answers, expectedClass, expectedRoute] of scenarios) {
  const first = scoreClassPicker(answers);
  const second = scoreClassPicker(answers);
  assert.equal(first.primary.slug, expectedClass, `${expectedClass} scenario should select ${expectedClass}`);
  assert.equal(first.recommendedRoute, expectedRoute, `${expectedClass} scenario should select ${expectedRoute}`);
  assert.notEqual(first.primary.slug, first.secondary.slug, "Primary and secondary results must differ");
  assert.deepEqual(first, second, "Repeated scoring must be deterministic");
  assert.ok(
    [first.primary.startingRoute, first.primary.alternateRoute].includes(first.recommendedRoute),
    `${first.recommendedRoute} must belong to ${first.primary.name}`,
  );
  const contributions = getPickerContributions(answers, first.primary.slug);
  assert.ok(contributions.every(({ score }) => score > 0), "Displayed reasons must have a positive contribution");
  assert.deepEqual(getPickerReasonIds(answers, first.primary.slug), contributions.slice(0, 3).map(({ questionId }) => questionId));
  primarySlugs.add(first.primary.slug);
}
assert.equal(primarySlugs.size, 6, "The scenario set must cover all six primary results");

const tie = scoreClassPicker({});
assert.equal(tie.primary.slug, pickerTiePriority[0], "Empty-score ties must use the documented class priority");
assert.equal(tie.secondary.slug, pickerTiePriority[1], "Secondary ties must use the documented class priority");

const mercenaryReasons = getPickerReasonIds(scenarios[0][0], "mercenary");
assert.deepEqual(mercenaryReasons, ["combat", "difficulty", "priority"], "Reason ties must follow combat, mode, difficulty, priority order");

const validAnswers = scenarios[0][0];
const complete = createStoredPickerState(3, validAnswers, true);
assert.equal(complete.version, 1);
assert.equal(complete.completed, true);
assert.deepEqual(parseStoredPickerState(JSON.stringify(complete)), complete);

const incomplete = createStoredPickerState(1, { combat: "defensive_melee" }, true);
assert.equal(incomplete.completed, false, "Incomplete answers cannot restore a completed result");

for (const [missingQuestion, expectedStep] of pickerQuestionIds.map((questionId, index) => [questionId, index])) {
  const answers = { ...validAnswers };
  delete answers[missingQuestion];
  const restored = createStoredPickerState(3, answers, true);
  assert.equal(restored.step, expectedStep, `Missing ${missingQuestion} must restore to question ${expectedStep + 1}`);
  assert.equal(restored.completed, false, `Missing ${missingQuestion} must not produce a completed result`);
}

const partiallyInvalid = parseStoredPickerState(JSON.stringify({
  version: 1,
  step: 2,
  answers: { combat: "invalid", mode: "solo", unknown: "ignored" },
  completed: true,
}));
assert.deepEqual(partiallyInvalid, { version: 1, step: 0, answers: { mode: "solo" }, completed: false });
assert.equal(createStoredPickerState(3, { combat: "defensive_melee", difficulty: "easy", priority: "survival" }, true).step, 1, "Missing mode must restore no later than the second question");
assert.equal(parseStoredPickerState("not-json"), null, "Invalid JSON must fail safely");
assert.equal(parseStoredPickerState(JSON.stringify({ version: 2, step: 0, answers: {}, completed: false })), null, "Unknown versions must be ignored");
assert.equal(parseStoredPickerState(JSON.stringify({ version: 1, step: 4, answers: {}, completed: false })), null, "Out-of-range steps must be ignored");
assert.deepEqual(createInitialPickerState(), { version: 1, step: 0, answers: {}, completed: false }, "Start Over must return to the first step");
assert.deepEqual(pickerQuestionIds, ["combat", "mode", "difficulty", "priority"]);

console.log("Class Picker checks passed: 6 scenarios, deterministic ties, positive reasons, routes, and versioned session state.");
