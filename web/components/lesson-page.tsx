"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { copy, Language } from "@/lib/content";
import { Brand, GithubProfile, SiteFooter } from "@/components/site-footer";

const sections = {
  tr: [
    ["01", "Proje klasörünü hazırla", "Temiz bir klasörde Claude Code'u başlat. İlk isteğin dosya değiştirmeden yalnızca bağlamı anlamaya odaklansın.", "mkdir claude-ilk-proje\ncd claude-ilk-proje\nclaude"],
    ["02", "Kalıcı bağlam ekle", "Tekrar eden proje tercihlerini CLAUDE.md içine taşı. Böylece her oturumda aynı kuralları yeniden anlatmazsın.", "Bu proje için kısa bir CLAUDE.md oluştur.\nÖnce önerdiğin kuralları listele ve onayımı bekle."],
    ["03", "İlk görevi küçük tut", "Kapsamı belli, sonucu gözle görülen ve kolayca doğrulanabilen bir görev seç. İlk oturumda büyük bir refaktör isteme.", "README.md dosyasına projenin amacını anlatan üç cümle ekle.\nÖnce planı göster, sonra değiştir ve sonucu özetle."],
    ["04", "Kontrol et", "Diff'i ve uygun testi kontrol ederek döngüyü kapat. Öğrenmenin amacı her şeyi otomatikleştirmek değil, güvenli bir çalışma ritmi kurmaktır.", "git diff\nnpm test"]
  ],
  en: [
    ["01", "Prepare a project folder", "Start Claude Code in a clean folder. Ask it to understand context before it changes a file.", "mkdir claude-first-project\ncd claude-first-project\nclaude"],
    ["02", "Add durable context", "Move repeatable project preferences into CLAUDE.md so you do not have to explain them every session.", "Create a short CLAUDE.md for this project.\nList the rules first and wait for my approval."],
    ["03", "Keep the first task small", "Choose a task with a clear scope and visible result. Avoid asking for a large refactor in your first session.", "Add three sentences to README.md describing this project.\nShow the plan first, then make the change and summarize it."],
    ["04", "Verify the result", "Check the diff and run the appropriate test to close the loop. The goal is a safe working rhythm, not total automation.", "git diff\nnpm test"]
  ]
} as const;

export function LessonPage() {
  const [language, setLanguage] = useState<Language>("tr");
  const [completed, setCompleted] = useState(false);
  const t = copy[language];
  const lessonSections = sections[language];

  useEffect(() => {
    const saved = window.localStorage.getItem("claude-atelier-language");
    if (saved === "tr" || saved === "en") setLanguage(saved);
    setCompleted(window.localStorage.getItem("claude-atelier-lesson-first") === "done");
  }, []);

  function toggleLanguage() {
    const next = language === "tr" ? "en" : "tr";
    setLanguage(next);
    window.localStorage.setItem("claude-atelier-language", next);
  }

  function finishLesson() {
    const next = !completed;
    setCompleted(next);
    window.localStorage.setItem("claude-atelier-lesson-first", next ? "done" : "todo");
  }

  return (
    <main className="lesson-shell">
      <header className="topbar lesson-topbar">
        <Link className="brand" href="/"><Brand /></Link>
        <div className="lesson-breadcrumb"><Link href="/">{language === "tr" ? "Ana sayfa" : "Home"}</Link><span>/</span><span>{t.navLesson}</span></div>
        <GithubProfile />
        <button className="language-button" onClick={toggleLanguage}><span className="language-globe">◉</span> {t.language}</button>
      </header>
      <div className="lesson-header">
        <div><p className="eyebrow"><span className="eyebrow-dot" /> {t.lessonKicker}</p><h1>{language === "tr" ? "Claude Code ile ilk 15 dakika" : "Your first 15 minutes with Claude Code"}</h1><p>{language === "tr" ? "İncele, planla, değiştir ve doğrula. İlk çalışma döngünü küçük ama gerçek bir sonuçla tamamla." : "Inspect, plan, change, and verify. Finish your first working loop with a small but real result."}</p></div>
        <div className="lesson-meta"><span>15 min</span><span>·</span><span>{language === "tr" ? "Başlangıç" : "Beginner"}</span></div>
      </div>
      <div className="lesson-progress"><span style={{ width: "25%" }} /></div>
      <div className="lesson-content">
        <aside className="lesson-sidebar"><span>{language === "tr" ? "Ders içeriği" : "In this lesson"}</span>{lessonSections.map(([number, title]) => <a href={`#step-${number}`} key={number}><b>{number}</b>{title}</a>)}</aside>
        <article className="lesson-article">
          <div className="callout"><span>✦</span><p>{language === "tr" ? "İpucu: Claude'dan önce bağlamı anlamasını iste. Güvenli otomasyon iyi bir soruyla başlar." : "Tip: Ask Claude to understand context first. Safe automation starts with a good question."}</p></div>
          {lessonSections.map(([number, title, description, code]) => <section className="lesson-step" id={`step-${number}`} key={number}><div className="step-heading"><span>{number}</span><h2>{title}</h2></div><p>{description}</p><pre><code>{code}</code></pre></section>)}
          <div className={`completion-card ${completed ? "is-complete" : ""}`}><div><span className="eyebrow">{completed ? (language === "tr" ? "Ders tamamlandı · +150 XP" : "Lesson complete · +150 XP") : (language === "tr" ? "Son adım" : "Last step")}</span><h2>{completed ? (language === "tr" ? "İlk küçük kazanımın kaydedildi." : "Your first small win is saved.") : (language === "tr" ? "İlk küçük kazanımını kutla." : "Celebrate your first small win.")}</h2></div><div className="completion-actions"><button className="button button-dark" onClick={finishLesson}>{completed ? "✓" : (language === "tr" ? "Tamamla" : "Complete")}</button><Link className="button button-light" href="/">{language === "tr" ? "Yol haritası" : "Roadmap"} ↗</Link></div></div>
        </article>
      </div>
      <SiteFooter />
    </main>
  );
}
