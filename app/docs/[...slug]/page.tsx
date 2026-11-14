import Link from "next/link";
import { notFound } from "next/navigation";
import { getDocument, getDocuments } from "@/lib/docs";
import { Brand, GithubProfile, SiteFooter } from "@/components/site-footer";

export function generateStaticParams() {
  return getDocuments().map((document) => ({ slug: document.slug.split("/") }));
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const document = getDocument((await params).slug);
  if (!document) notFound();

  return (
    <main className="lesson-shell docs-page">
      <header className="topbar lesson-topbar">
        <Link className="brand" href="/"><Brand /></Link>
        <div className="lesson-breadcrumb"><Link href="/docs">Docs</Link><span>/</span><span>{document.section}</span></div>
        <GithubProfile />
        <Link className="language-button" href="/docs">← Katalog</Link>
      </header>
      <div className="doc-layout">
        <aside className="doc-sidebar">
          <Link className="back-link" href="/docs">← Tüm dökümanlar</Link>
          <span className="doc-section-label">{document.section}</span>
          <h2>{document.title}</h2>
          <p>{document.sourcePath}</p>
        </aside>
        <article className="doc-article">
          <div className="doc-article-head">
            <span className="eyebrow">Claude Atölye / documentation</span>
            <h1>{document.title}</h1>
            <p>{document.excerpt}</p>
          </div>
          <div className="markdown-body" dangerouslySetInnerHTML={{ __html: document.html }} />
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
