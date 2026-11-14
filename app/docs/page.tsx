import { DocsIndex } from "@/components/docs-index";
import { getDocuments } from "@/lib/docs";

export default function DocsPage() {
  return <DocsIndex documents={getDocuments()} />;
}
