import { classProfileMap, classProfiles } from "./class-profiles.ts";

export type ClassSlug = (typeof classProfiles)[number]["slug"];
export type PickerQuestionId = "combat" | "mode" | "difficulty" | "priority";
export type PickerAnswers = Partial<Record<PickerQuestionId, string>>;

export const pickerQuestionIds: PickerQuestionId[] = ["combat", "mode", "difficulty", "priority"];

export const pickerOptions: Record<PickerQuestionId, string[]> = {
  combat: ["defensive_melee", "mobile_melee", "ranged_physical", "ranged_magic", "support_control", "heavy_pressure"],
  mode: ["solo", "trio", "both"],
  difficulty: ["easy", "moderate", "high"],
  priority: ["survival", "burst", "sustain", "control", "mobility", "support"],
};

export const pickerTiePriority: ClassSlug[] = ["mercenary", "blackarrow", "seer", "sorcerer", "withered-knight", "shadowstrix"];

export const PICKER_STORAGE_VERSION = 1 as const;
export const PICKER_STORAGE_KEY = "mistfall-class-picker-v1";

export type StoredPickerState = {
  version: typeof PICKER_STORAGE_VERSION;
  step: number;
  answers: PickerAnswers;
  completed: boolean;
};

const scores: Record<string, Partial<Record<ClassSlug, number>>> = {
  defensive_melee: { mercenary: 4, "withered-knight": 3, seer: 1 },
  mobile_melee: { shadowstrix: 4, seer: 2, mercenary: 1 },
  ranged_physical: { blackarrow: 4, shadowstrix: 1 },
  ranged_magic: { sorcerer: 4, seer: 2 },
  support_control: { seer: 4, "withered-knight": 3, sorcerer: 2, mercenary: 1 },
  heavy_pressure: { "withered-knight": 4, mercenary: 3, shadowstrix: 1 },
  solo: { blackarrow: 3, mercenary: 3, shadowstrix: 2, sorcerer: 1, seer: 1, "withered-knight": 1 },
  trio: { seer: 4, mercenary: 3, "withered-knight": 3, sorcerer: 3, blackarrow: 2, shadowstrix: 2 },
  both: { mercenary: 3, blackarrow: 3, seer: 3, sorcerer: 2, shadowstrix: 2, "withered-knight": 2 },
  easy: { mercenary: 4, seer: 2, blackarrow: 1, shadowstrix: -2, "withered-knight": -1 },
  moderate: { seer: 3, sorcerer: 3, blackarrow: 3, mercenary: 2, "withered-knight": 2, shadowstrix: 1 },
  high: { shadowstrix: 4, "withered-knight": 3, blackarrow: 2, sorcerer: 2, seer: 1 },
  survival: { mercenary: 4, "withered-knight": 4, seer: 3, blackarrow: 1 },
  burst: { shadowstrix: 4, sorcerer: 4, "withered-knight": 3, blackarrow: 2, mercenary: 2 },
  sustain: { blackarrow: 4, shadowstrix: 3, sorcerer: 3, mercenary: 2, seer: 2 },
  control: { sorcerer: 4, "withered-knight": 4, seer: 3, blackarrow: 2, mercenary: 2 },
  mobility: { shadowstrix: 4, blackarrow: 3, seer: 2, mercenary: 1 },
  support: { seer: 5, "withered-knight": 3, mercenary: 3, sorcerer: 2 },
};

function routeFor(slug: ClassSlug, answers: PickerAnswers) {
  if (slug === "mercenary") return answers.combat === "heavy_pressure" || answers.priority === "burst" ? "Hammer" : "Sword & Shield";
  if (slug === "sorcerer") return answers.mode === "trio" && ["burst", "control"].includes(answers.priority ?? "") ? "Stardust" : "Elemental";
  if (slug === "blackarrow") return ["sustain", "control"].includes(answers.priority ?? "") ? "Hunter" : "Archer";
  if (slug === "shadowstrix") return answers.priority === "sustain" || answers.mode === "trio" ? "Dual Blades" : "Daggers";
  if (slug === "seer") return answers.combat === "mobile_melee" || ["burst", "mobility"].includes(answers.priority ?? "") ? "Mace" : "Catalyst";
  return answers.mode === "trio" || ["survival", "control", "support"].includes(answers.priority ?? "") ? "Polearm & Shield" : "Greatsword";
}

export function scoreClassPicker(answers: PickerAnswers) {
  const totals = Object.fromEntries(classProfiles.map((profile) => [profile.slug, 0])) as Record<ClassSlug, number>;
  for (const answer of Object.values(answers)) {
    if (!answer) continue;
    for (const [slug, value] of Object.entries(scores[answer] ?? {})) totals[slug as ClassSlug] += value ?? 0;
  }
  const ranked = [...classProfiles].sort((a, b) => totals[b.slug] - totals[a.slug] || pickerTiePriority.indexOf(a.slug) - pickerTiePriority.indexOf(b.slug));
  const primary = ranked[0];
  const secondary = ranked[1];
  return {
    primary,
    secondary,
    recommendedRoute: routeFor(primary.slug, answers),
    scores: totals,
  };
}

export function getPickerContributions(answers: PickerAnswers, slug: ClassSlug) {
  return pickerQuestionIds
    .map((questionId, questionOrder) => {
      const answerId = answers[questionId];
      return {
        questionId,
        answerId,
        score: answerId ? scores[answerId]?.[slug] ?? 0 : 0,
        questionOrder,
      };
    })
    .filter((item): item is typeof item & { answerId: string } => Boolean(item.answerId) && item.score > 0)
    .sort((a, b) => b.score - a.score || a.questionOrder - b.questionOrder);
}

export function getPickerReasonIds(answers: PickerAnswers, slug: ClassSlug) {
  return getPickerContributions(answers, slug).slice(0, 3).map((item) => item.questionId);
}

function validAnswer(questionId: PickerQuestionId, value: unknown): value is string {
  return typeof value === "string" && pickerOptions[questionId].includes(value);
}

export function createInitialPickerState(): StoredPickerState {
  return { version: PICKER_STORAGE_VERSION, step: 0, answers: {}, completed: false };
}

export function createStoredPickerState(step: number, answers: PickerAnswers, completed: boolean): StoredPickerState {
  const safeAnswers: PickerAnswers = {};
  for (const questionId of pickerQuestionIds) {
    const answer = answers[questionId];
    if (validAnswer(questionId, answer)) safeAnswers[questionId] = answer;
  }
  const hasAllAnswers = pickerQuestionIds.every((questionId) => validAnswer(questionId, safeAnswers[questionId]));
  return {
    version: PICKER_STORAGE_VERSION,
    step: Number.isInteger(step) && step >= 0 && step <= 3 ? step : 0,
    answers: safeAnswers,
    completed: completed && hasAllAnswers,
  };
}

export function parseStoredPickerState(value: string): StoredPickerState | null {
  try {
    const parsed = JSON.parse(value) as unknown;
    if (!parsed || typeof parsed !== "object") return null;
    const candidate = parsed as Record<string, unknown>;
    if (candidate.version !== PICKER_STORAGE_VERSION) return null;
    if (!Number.isInteger(candidate.step) || (candidate.step as number) < 0 || (candidate.step as number) > 3) return null;
    if (!candidate.answers || typeof candidate.answers !== "object" || Array.isArray(candidate.answers)) return null;
    return createStoredPickerState(candidate.step as number, candidate.answers as PickerAnswers, candidate.completed === true);
  } catch {
    return null;
  }
}

export function getPickerProfile(slug: string) {
  return classProfileMap.get(slug);
}
