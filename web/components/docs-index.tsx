"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { DocumentRecord } from "@/lib/docs";
import { Brand, GithubProfile, SiteFooter } from "@/components/site-footer";

export function DocsIndex({ documents }: { documents: DocumentRecord[] }) {
  const [query, setQuery] = useState("");
  const [section, setSection] = useState("All");
  const sections = ["All", ...Array.from(new Set(documents.map((document) => document.section)))];
  const filtered = useMemo(() => documents.filter((document) => {
    const haystack = `${document.title} ${document.excerpt} ${document.sourcePath}`.toLowerCase();
    return (section === "All" || document.section === section) && haystack.includes(query.toLowerCase());
  }), [documents, query, section]);

  return (
    <main className="site-shell docs-index">
      <header className="topbar">
        <Link className="brand" href="/"><Brand /></Link>
        <nav className="nav-links"><Link href="/">Ana sayfa</Link><a href="#catalog">Katalog</a><Link href="/lesson/ilk-ders">İlk ders</Link></nav>
        <GithubProfile />
        <span className="language-button">TR / EN</span>
      </header>
      <section className="docs-hero">
        <p className="eyebrow"><span className="eyebrow-dot" /> Claude Atölye / tüm içerik</p>
        <h1>Öğrenme kütüphanesi<span>.</span></h1>
        <p>Repo içindeki tüm rehberleri, modülleri, referansları ve şablonları tek bir arayüzde keşfet.</p>
        <div className="docs-stats"><strong>{documents.length}</strong><span>kaynak doküman</span><strong>10</strong><span>öğrenme modülü</span></div>
      </section>
      <section className="docs-catalog" id="catalog">
        <div className="docs-toolbar">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Dokümanlarda ara..." aria-label="Dokümanlarda ara" />
          <div className="section-filters">{sections.map((item) => <button className={section === item ? "selected" : ""} key={item} onClick={() => setSection(item)}>{item}</button>)}</div>
        </div>
        <div className="docs-grid">
          {filtered.map((document, index) => (
            <Link className="doc-card" href={`/docs/${document.slug}`} key={document.slug}>
              <span className="doc-card-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="doc-card-section">{document.section}</span>
              <h2>{document.title}</h2>
              <p>{document.excerpt}</p>
              <span className="doc-card-link">Oku ↗</span>
            </Link>
          ))}
        </div>
        {filtered.length === 0 && <div className="empty-docs">Aramanla eşleşen doküman bulunamadı.</div>}
      </section>
      <SiteFooter />
    </main>
  );
}
