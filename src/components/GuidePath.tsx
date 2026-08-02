import Link from "next/link";
import type { GuidePathStep } from "@/lib/types";

export default function GuidePath({ steps }: { steps: GuidePathStep[] }) {
  return (
    <section className="guide-path" aria-labelledby="guide-path-title">
      <p className="section-label">Recommended path</p>
      <h2 id="guide-path-title">Start with the question you need to answer</h2>
      <ol>{steps.map((step) => <li key={step.href}>
        <span>{step.step}</span>
        <div>
          <Link href={step.href}>{step.label}</Link>
          {step.secondaryHref && step.secondaryLabel && <Link className="guide-path-secondary" href={step.secondaryHref}>{step.secondaryLabel}</Link>}
          <p>{step.question}</p>
        </div>
      </li>)}</ol>
    </section>
  );
}
