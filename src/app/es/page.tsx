import type { Metadata } from "next";
import LocalizedRoutePage from "@/components/LocalizedRoutePage";
import { getLocalizedPage } from "@/data/localized-pages";
import { localizedMetadata } from "@/i18n/localized-metadata";

const page = getLocalizedPage("/es/")!;
export const metadata: Metadata = localizedMetadata(page);
export default function SpanishHome() { return <LocalizedRoutePage path="/es/" />; }
