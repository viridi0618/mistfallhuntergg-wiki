import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="brand-mark" aria-hidden="true">M</div>
      <p className="eyebrow">404 • Lost in the Gyldenmist</p>
      <h1>This guide could not be found.</h1>
      <p>The route may have changed, or the page may never have existed. Choose a verified destination below.</p>
      <div className="hero-actions">
        <Link className="button button-primary" href="/">Return home</Link>
        <Link className="button button-secondary" href="/beginner-guide/">Beginner Guide</Link>
        <Link className="button button-secondary" href="/classes/">Classes</Link>
        <Link className="button button-secondary" href="/builds/">Builds</Link>
        <Link className="button button-secondary" href="/known-issues/">Known Issues</Link>
      </div>
    </main>
  );
}
