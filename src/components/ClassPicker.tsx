"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  createStoredPickerState,
  getPickerReasonIds,
  parseStoredPickerState,
  PICKER_STORAGE_KEY,
  pickerOptions,
  pickerQuestionIds,
  scoreClassPicker,
  type PickerAnswers,
  type PickerQuestionId,
  type StoredPickerState,
} from "@/data/class-picker";
import type { PickerEntryType } from "./PickerCta";

type Locale = "en" | "es" | "de";
const copy = {
  en: {
    title: "Find your class", progress: "Question {current} of 4", back: "Back", restart: "Start Over", best: "Your best match", route: "Recommended route", why: "Why it fits", also: "Also consider", build: "Read the {className} Build", classGuide: "View the {className} Class Guide", extract: "Learn How to Extract", disclaimer: "This is a playstyle recommendation, not an official class ranking or guaranteed meta result.",
    questions: { combat: "What combat style do you prefer?", mode: "Which mode will you play most?", difficulty: "How much execution do you want?", priority: "Which ability matters most?" },
    options: { defensive_melee:"Defensive melee",mobile_melee:"Mobile melee",ranged_physical:"Ranged physical",ranged_magic:"Ranged magic",support_control:"Support and control",heavy_pressure:"Heavy pressure",solo:"Mostly Solo",trio:"Mostly Trio",both:"Both Solo and Trio",easy:"Easy to learn",moderate:"Moderate execution",high:"High skill ceiling",survival:"Survival",burst:"Burst damage",sustain:"Sustained pressure",control:"Control",mobility:"Mobility",support:"Team support" },
    reasons: { combat:"Combat preference: {answer}.",mode:"Main mode: {answer}.",difficulty:"Preferred difficulty: {answer}.",priority:"Priority: {answer}." },
  },
  es: {
    title:"Encuentra tu clase",progress:"Pregunta {current} de 4",back:"Atrás",restart:"Empezar de nuevo",best:"Tu mejor opción",route:"Ruta recomendada",why:"Por qué encaja",also:"Considera también",build:"Leer la build de {className}",classGuide:"Ver la guía de {className}",extract:"Aprender a extraer",disclaimer:"Esta es una recomendación de estilo de juego, no una clasificación oficial ni un resultado meta garantizado.",
    questions:{combat:"¿Qué estilo de combate prefieres?",mode:"¿Qué modo jugarás más?",difficulty:"¿Qué nivel de ejecución buscas?",priority:"¿Qué capacidad valoras más?"},
    options:{defensive_melee:"cuerpo a cuerpo defensivo",mobile_melee:"cuerpo a cuerpo móvil",ranged_physical:"combate físico a distancia",ranged_magic:"magia a distancia",support_control:"apoyo y control",heavy_pressure:"presión pesada",solo:"principalmente Solo",trio:"principalmente Trio",both:"Solo y Trio",easy:"fácil de aprender",moderate:"ejecución moderada",high:"alto techo de habilidad",survival:"supervivencia",burst:"daño explosivo",sustain:"presión sostenida",control:"control",mobility:"movilidad",support:"apoyo al equipo"},
    reasons:{combat:"Preferencia de combate: {answer}.",mode:"Modo principal: {answer}.",difficulty:"Dificultad preferida: {answer}.",priority:"Prioridad: {answer}."},
  },
  de: {
    title:"Finde deine Klasse",progress:"Frage {current} von 4",back:"Zurück",restart:"Neu starten",best:"Deine beste Wahl",route:"Empfohlener Weg",why:"Warum das passt",also:"Ebenfalls passend",build:"Den {className}-Build lesen",classGuide:"Den {className}-Klassenratgeber öffnen",extract:"Extraktion lernen",disclaimer:"Dies ist eine Spielstil-Empfehlung, keine offizielle Klassenrangliste oder garantierte Meta-Aussage.",
    questions:{combat:"Welchen Kampfstil bevorzugst du?",mode:"Welchen Modus spielst du hauptsächlich?",difficulty:"Wie anspruchsvoll soll die Ausführung sein?",priority:"Welche Fähigkeit ist dir am wichtigsten?"},
    options:{defensive_melee:"defensiver Nahkampf",mobile_melee:"mobiler Nahkampf",ranged_physical:"physischer Fernkampf",ranged_magic:"Fernkampfmagie",support_control:"Unterstützung und Kontrolle",heavy_pressure:"schwerer Druck",solo:"hauptsächlich Solo",trio:"hauptsächlich Trio",both:"Solo und Trio",easy:"leicht zu lernen",moderate:"mittlere Ausführung",high:"hohes Können",survival:"Überleben",burst:"Burst-Schaden",sustain:"anhaltender Druck",control:"Kontrolle",mobility:"Mobilität",support:"Team-Unterstützung"},
    reasons:{combat:"Kampfpräferenz: {answer}.",mode:"Hauptmodus: {answer}.",difficulty:"Bevorzugter Anspruch: {answer}.",priority:"Priorität: {answer}."},
  },
} as const;

function track(event: string, parameters: Record<string, string | number | undefined>) {
  const analyticsWindow = window as typeof window & { gtag?: (command: string, event: string, parameters: Record<string, string | number>) => void };
  const clean = Object.fromEntries(Object.entries(parameters).filter(([, value]) => value !== undefined)) as Record<string, string | number>;
  analyticsWindow.gtag?.("event", event, clean);
}

function replace(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce((result, [key, value]) => result.replace(`{${key}}`, String(value)), template);
}

export default function ClassPicker({ locale, entryType }: { locale: Locale; entryType: PickerEntryType }) {
  const t = copy[locale];
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PickerAnswers>({});
  const [completed, setCompleted] = useState(false);
  const hydrated = useRef(false);
  const result = useMemo(() => completed ? scoreClassPicker(answers) : null, [answers, completed]);

  useEffect(() => {
    let savedState: StoredPickerState | null = null;
    try {
      const saved = sessionStorage.getItem(PICKER_STORAGE_KEY);
      if (saved) {
        savedState = parseStoredPickerState(saved);
        if (!savedState) sessionStorage.removeItem(PICKER_STORAGE_KEY);
      }
    } catch { /* Ignore unavailable or invalid session state. */ }
    queueMicrotask(() => {
      if (savedState) {
        setStep(savedState.step);
        setAnswers(savedState.answers);
        setCompleted(savedState.completed);
      }
      hydrated.current = true;
    });
  }, []);

  useEffect(() => {
    if (!hydrated.current) return;
    try { sessionStorage.setItem(PICKER_STORAGE_KEY, JSON.stringify(createStoredPickerState(step, answers, completed))); } catch { /* Session storage is optional. */ }
  }, [step, answers, completed]);

  function choose(questionId: PickerQuestionId, answerId: string) {
    const nextAnswers = { ...answers, [questionId]: answerId };
    setAnswers(nextAnswers);
    track("class_picker_answer", { source_path: location.pathname, entry_type: entryType, question_id: questionId, answer_id: answerId });
    if (step === 0 && !answers.combat) track("class_picker_start", { source_path: location.pathname, entry_type: entryType });
    if (step < pickerQuestionIds.length - 1) setStep(step + 1);
    else {
      const nextResult = scoreClassPicker(nextAnswers);
      setCompleted(true);
      track("class_picker_complete", { source_path: location.pathname, entry_type: entryType, primary_class: nextResult.primary.slug, secondary_class: nextResult.secondary.slug, recommended_route: nextResult.recommendedRoute });
      track("class_picker_result", { source_path: location.pathname, entry_type: entryType, primary_class: nextResult.primary.slug, secondary_class: nextResult.secondary.slug, recommended_route: nextResult.recommendedRoute });
    }
  }

  function restart() {
    setStep(0); setAnswers({}); setCompleted(false);
    try { sessionStorage.removeItem(PICKER_STORAGE_KEY); } catch { /* Session storage is optional. */ }
    track("class_picker_restart", { source_path: location.pathname, entry_type: entryType });
  }

  if (result) {
    const reasonIds = getPickerReasonIds(answers, result.primary.slug);
    return <div className="class-picker-result" aria-live="polite">
      <p className="class-picker-kicker">{t.best}</p>
      <h2>{result.primary.name}</h2>
      <dl><div><dt>{t.route}</dt><dd>{result.recommendedRoute}</dd></div><div><dt>{t.also}</dt><dd>{result.secondary.name}</dd></div></dl>
      <h3>{t.why}</h3>
      <ul>{reasonIds.map((id) => {
        const answer = answers[id]!;
        return <li key={id}>{replace(t.reasons[id], { answer: t.options[answer as keyof typeof t.options] })}</li>;
      })}</ul>
      <div className="class-picker-actions">
        <Link href={result.primary.buildPath} onClick={() => track("class_picker_build_click", { source_path: location.pathname, entry_type: entryType, primary_class: result.primary.slug, recommended_route: result.recommendedRoute })}>{replace(t.build, { className: result.primary.name })}</Link>
        <Link href={result.primary.classPath} onClick={() => track("class_picker_class_click", { source_path: location.pathname, entry_type: entryType, primary_class: result.primary.slug })}>{replace(t.classGuide, { className: result.primary.name })}</Link>
        <Link href="/how-to-extract/">{t.extract}</Link>
      </div>
      <button className="class-picker-restart" type="button" onClick={restart}>{t.restart}</button>
      <p className="class-picker-disclaimer">{t.disclaimer}</p>
    </div>;
  }

  const questionId = pickerQuestionIds[step];
  return <div className="class-picker-panel">
    <div className="class-picker-progress"><span>{t.title}</span><strong>{replace(t.progress, { current: step + 1 })}</strong></div>
    <div className="class-picker-progress-bar" aria-hidden="true"><span style={{ width: `${((step + 1) / 4) * 100}%` }} /></div>
    <fieldset><legend>{t.questions[questionId]}</legend>
      <div className="class-picker-options">{pickerOptions[questionId].map((option) => <button key={option} type="button" aria-pressed={answers[questionId] === option} onClick={() => choose(questionId, option)}>{t.options[option as keyof typeof t.options]}</button>)}</div>
    </fieldset>
    {step > 0 && <button className="class-picker-back" type="button" onClick={() => setStep(step - 1)}>← {t.back}</button>}
  </div>;
}
