import { notFound } from "next/navigation";
import LocalizedGuidePage from "./LocalizedGuidePage";
import { getLocalizedPage, localizedPagesByPath } from "@/data/localized-pages";

export default function LocalizedRoutePage({ path }: { path: string }) {
  const page = getLocalizedPage(path);
  if (!page) notFound();
  return <LocalizedGuidePage page={page} pagesByPath={localizedPagesByPath} />;
}
