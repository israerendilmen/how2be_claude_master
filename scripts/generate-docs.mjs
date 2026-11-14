import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

const repoRoot = process.cwd();
const outputPath = path.join(repoRoot, "data", "docs.json");
const ignored = new Set([
  ".git", ".github", ".claude", ".venv", "venv", "env", "node_modules", "scripts",
  "site", "local-progress", "promo-video", "blog-posts", "openspec",
  "archive", "vi", "zh", "ja", "uk", "ko", "fa", "data"
]);

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (ignored.has(entry.name)) return [];
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(absolute);
    return entry.isFile() && entry.name.endsWith(".md") ? [absolute] : [];
  });
}

function titleFromMarkdown(markdown, fallback) {
  const heading = markdown.match(/^#\s+(.+)$/m);
  return heading ? heading[1].replace(/[*_`]/g, "") : fallback;
}

function slugFor(relativePath) {
  const normalized = relativePath.replaceAll(path.sep, "/");
  if (normalized === "README.md") return "guide";
  if (normalized.endsWith("/README.md")) return normalized.slice(0, -"/README.md".length);
  return normalized.replace(/\.md$/, "");
}

const documents = walk(repoRoot).map((absolutePath) => {
  const relativePath = path.relative(repoRoot, absolutePath);
  const source = fs.readFileSync(absolutePath, "utf8");
  const content = source.replace(/^---\n[\s\S]*?\n---\n/, "");
  const slug = slugFor(relativePath);
  const parts = relativePath.split(path.sep);
  const section = parts.length > 1 ? parts[0] : "Reference";
  return {
    slug,
    sourcePath: relativePath.replaceAll(path.sep, "/"),
    section,
    title: titleFromMarkdown(content, path.basename(relativePath, ".md")),
    excerpt: content.replace(/^#.*$/gm, "").replace(/[`*_>-]/g, "").replace(/\s+/g, " ").trim().slice(0, 180),
    html: marked.parse(content, { headerIds: true, mangle: false })
  };
}).sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(documents, null, 2)}\n`);
console.log(`Generated ${documents.length} documents → ${path.relative(repoRoot, outputPath)}`);
