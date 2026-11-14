import fs from "node:fs";
import path from "node:path";

export type DocumentRecord = {
  slug: string;
  sourcePath: string;
  section: string;
  title: string;
  excerpt: string;
  html: string;
};

const docsPath = path.join(process.cwd(), "data", "docs.json");

export function getDocuments(): DocumentRecord[] {
  if (!fs.existsSync(docsPath)) return [];
  return JSON.parse(fs.readFileSync(docsPath, "utf8")) as DocumentRecord[];
}

export function getDocument(slug: string[]): DocumentRecord | undefined {
  return getDocuments().find((document) => document.slug === slug.join("/"));
}
