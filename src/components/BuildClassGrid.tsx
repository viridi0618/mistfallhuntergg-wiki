import Link from "next/link";
import type { BuildHubCard } from "@/lib/types";

export default function BuildClassGrid({ cards }: { cards: BuildHubCard[] }) {
  return (
    <section className="build-class-grid" aria-labelledby="build-class-grid-title">
      <p className="section-label">Builds by class</p>
      <h2 id="build-class-grid-title">Choose a class build</h2>
      <div>{cards.map((card) => <div className="build-class-card" key={card.href}>
        <p>{card.difficulty}</p>
        <h3><Link href={card.href}>{card.name}</Link></h3>
        <dl><div><dt>Routes</dt><dd>{card.routes}</dd></div><div><dt>Best for</dt><dd>{card.bestFor}</dd></div></dl>
        <Link className="card-link" href={card.href}>Open build guide →</Link>
      </div>)}</div>
    </section>
  );
}
