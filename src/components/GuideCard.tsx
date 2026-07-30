import Link from "next/link";
import type { GuidePageData } from "@/lib/types";

export default function GuideCard({ page }: { page: GuidePageData }) {
  return (
    <article className="guide-card">
      <p className="card-kicker">{page.category}</p>
      <h3><Link href={`/${page.path}/`}>{page.h1}</Link></h3>
      <p>{page.answer}</p>
      <Link className="card-link" href={`/${page.path}/`}>Read guide <span aria-hidden="true">→</span></Link>
    </article>
  );
}
