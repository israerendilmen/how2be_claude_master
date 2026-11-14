"use client";

import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";
import { copy, Language, modules } from "@/lib/content";
import { Brand, GithubProfile, SiteFooter } from "@/components/site-footer";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export function AcademyHome() {
  const [language, setLanguage] = useState<Language>("tr");
  const [activeModule, setActiveModule] = useState(0);
  const [completed, setCompleted] = useState<string[]>([]);
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced" | null>(null);
  const [notice, setNotice] = useState("");
  const t = copy[language];
  const groups = [
    { id: "beginner" as const, number: "01", name: language === "tr" ? "İlk adımlar" : "First steps", range: [0, 1], color: "#c9f36b", label: language === "tr" ? "Başlangıç" : "Beginner", detail: language === "tr" ? "Claude Code ile ilk güvenli döngünü kur." : "Build your first safe Claude Code loop." },
    { id: "intermediate" as const, number: "02", name: language === "tr" ? "Akış kurucu" : "Workflow builder", range: [2, 3], color: "#d7c5ff", label: language === "tr" ? "Orta seviye" : "Intermediate", detail: language === "tr" ? "Becerilerini otomasyon ve agent akışlarına taşı." : "Turn skills into automation and agent workflows." },
    { id: "advanced" as const, number: "03", name: language === "tr" ? "Takım modu" : "Team mode", range: [4, 5], color: "#ffc98f", label: language === "tr" ? "İleri seviye" : "Advanced", detail: language === "tr" ? "MCP ve hook'larla üretim kalitesinde sistemler kur." : "Build production-grade systems with MCP and hooks." }
  ];
  const moduleDocs: Record<string, string> = {
    "01": "01-slash-commands",
    "02": "02-memory",
    "03": "03-skills",
    "04": "04-subagents",
    "05": "05-mcp",
    "06": "06-hooks"
  };

  useEffect(() => {
    const saved = window.localStorage.getItem("claude-atelier-language");
    if (saved === "tr" || saved === "en") setLanguage(saved);
    const savedProgress = window.localStorage.getItem("claude-atelier-progress");
    if (savedProgress) setCompleted(JSON.parse(savedProgress));
    const savedLevel = window.localStorage.getItem("claude-atelier-level");
    if (savedLevel === "beginner" || savedLevel === "intermediate" || savedLevel === "advanced") {
      setLevel(savedLevel);
      setActiveModule(groups.find((group) => group.id === savedLevel)?.range[0] ?? 0);
    }
  }, []);

  function toggleLanguage() {
    const next = language === "tr" ? "en" : "tr";
    setLanguage(next);
    window.localStorage.setItem("claude-atelier-language", next);
  }

  function completeModule(number: string) {
    const next = completed.includes(number)
      ? completed.filter((item) => item !== number)
      : [...completed, number];
    setCompleted(next);
    window.localStorage.setItem("claude-atelier-progress", JSON.stringify(next));
    setNotice(completed.includes(number) ? (language === "tr" ? "Görev yeniden açıldı." : "Quest reopened.") : "+150 XP kazandın!");
    window.setTimeout(() => setNotice(""), 2400);
  }

  function chooseLevel(nextLevel: "beginner" | "intermediate" | "advanced") {
    setLevel(nextLevel);
    setActiveModule(groups.find((group) => group.id === nextLevel)?.range[0] ?? 0);
    window.localStorage.setItem("claude-atelier-level", nextLevel);
  }

  const visibleGroups = level ? groups.filter((group) => group.id === level) : groups;
  const activeLevel = groups.find((group) => group.id === level);

  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/"><Brand /></Link>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#modules">{t.navModules}</a>
          <a href="#method">{t.navHow}</a>
          <Link href="/docs">Docs</Link>
          <Link href="/lesson/ilk-ders">{t.navLesson}</Link>
        </nav>
        <GithubProfile />
        <button className="language-button" onClick={toggleLanguage} aria-label={`Switch to ${t.language}`}>
          <span className="language-globe">◉</span> {t.language}
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {t.heroKicker}</p>
          <h1 dangerouslySetInnerHTML={{ __html: t.heroTitle }} />
          <p className="hero-text">{t.heroText}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/lesson/ilk-ders">{t.start} <Arrow /></Link>
            <a className="button button-light" href="#roadmap">{t.explore}</a>
          </div>
        </div>
        <div className="quest-card">
          <div className="quest-card-top"><span>QUEST 00{completed.length + 1}</span><span>{completed.length} / {modules.length} {language === "tr" ? "tamamlandı" : "complete"}</span></div>
          <div className="quest-progress"><span style={{ width: `${(completed.length / modules.length) * 100}%` }} /></div>
          <div className="quest-badge">✦</div>
          <p className="quest-label">{language === "tr" ? "Sıradaki görev" : "Next quest"}</p>
          <h2>{modules.find((module) => !completed.includes(module.number))?.title[language] ?? (language === "tr" ? "Yol tamamlandı!" : "Path complete!")}</h2>
          <p>{language === "tr" ? "Haritayı aç, ilk düğümü seç ve kendi hızında ilerle." : "Open the map, choose your first node, and move at your own pace."}</p>
          <a className="quest-link" href="#roadmap">{language === "tr" ? "Görevi gör" : "View quest"} <Arrow /></a>
          <span className="quest-xp">✦ {completed.length * 150} XP</span>
        </div>
      </section>

      <section className="level-section" id="level">
        <div className="level-heading">
          <div>
            <p className="eyebrow">00 / {language === "tr" ? "Seviye tespiti" : "Find your level"}</p>
            <h2>{level ? (language === "tr" ? "Rotan hazır." : "Your route is ready.") : (language === "tr" ? "Haritayı sana göre aç." : "Open the map for you.")}</h2>
          </div>
          <p>{level ? (language === "tr" ? `${activeLevel?.label} rotasındasın. İstediğin zaman seviyeni değiştirebilirsin.` : `You are on the ${activeLevel?.label} path. You can change your level anytime.`) : (language === "tr" ? "Deneyimine en yakın seviyeyi seç. Her rota küçük görevlerle ilerler ve istediğin zaman değiştirilebilir." : "Choose the level closest to your experience. Each route moves through small quests and can be changed anytime.")}</p>
        </div>
        <div className="level-cards">
          {groups.map((group, index) => (
            <button className={`level-card ${level === group.id ? "is-selected" : ""}`} key={group.id} onClick={() => chooseLevel(group.id)} style={{ "--level-color": group.color } as CSSProperties}>
              <span className="level-card-number">0{index + 1}</span>
              <span className="level-card-icon">{index === 0 ? "✦" : index === 1 ? "◌" : "↗"}</span>
              <span className="level-card-label">{group.label}</span>
              <strong>{group.name}</strong>
              <small>{group.detail}</small>
              <span className="level-card-action">{level === group.id ? "✓" : "→"}</span>
            </button>
          ))}
        </div>
        <div className="level-summary"><span>{level ? activeLevel?.label : (language === "tr" ? "Seviyeni seç" : "Choose your level")}</span><strong>{completed.length * 150} XP</strong><span>·</span><span>{completed.length}/{modules.length} {language === "tr" ? "görev" : "quests"}</span></div>
      </section>

      <section className="roadmap-section gamified-roadmap" id="roadmap">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / {t.roadmapKicker}</p>
            <h2>{activeLevel ? activeLevel.name : (language === "tr" ? "Kendi yolunu çiz." : "Draw your own path.")}</h2>
          </div>
          <p>{language === "tr" ? "Her düğüm bir beceri. İlerledikçe yeni seviyeler açılır." : "Every node is a skill. New levels unlock as you move."}</p>
        </div>
        <div className="roadmap-map">
          <div className="map-track"><span style={{ width: `${(completed.length / modules.length) * 100}%` }} /></div>
          {visibleGroups.map((group) => (
            <div className="roadmap-level" key={group.number}>
              <div className="level-marker" style={{ backgroundColor: group.color }}>{group.number}</div>
              <div className="level-copy"><span>{language === "tr" ? "SEVİYE" : "LEVEL"} {group.number}</span><h3>{group.name}</h3></div>
              <div className="quest-nodes">
                {modules.slice(group.range[0], group.range[1] + 1).map((module, index) => {
                  const moduleIndex = group.range[0] + index;
                  const isDone = completed.includes(module.number);
                  const isLocked = index > 0 && !completed.includes(modules[moduleIndex - 1].number);
                  return (
                    <button className={`quest-node ${isDone ? "is-done" : ""} ${isLocked ? "is-locked" : ""} ${activeModule === moduleIndex ? "is-selected" : ""}`} key={module.number} onClick={() => !isLocked && setActiveModule(moduleIndex)} disabled={isLocked}>
                      <span className="node-icon" style={{ backgroundColor: module.color }}>{isDone ? "✓" : module.icon}</span>
                      <span className="node-number">{module.number}</span>
                      <strong>{module.title[language]}</strong>
                      <small>{module.duration}</small>
                      {isLocked && <i>⌑</i>}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <div className="selected-quest">
          <div><span className="eyebrow">{language === "tr" ? "Seçili görev" : "Selected quest"} · {modules[activeModule].duration}</span><h3>{modules[activeModule].title[language]}</h3><p>{modules[activeModule].description[language]}</p><div className="selected-lessons">{modules[activeModule].lessons.map((lesson) => <Link href={`/docs/${moduleDocs[modules[activeModule].number]}`} key={lesson.en}>○ {lesson[language]}</Link>)}</div></div>
          <div className="selected-actions">
            <button className="complete-button" onClick={() => completeModule(modules[activeModule].number)}>{completed.includes(modules[activeModule].number) ? "✓ " : ""}{completed.includes(modules[activeModule].number) ? (language === "tr" ? "Tamamlandı" : "Completed") : (language === "tr" ? "Tamamla" : "Complete")}</button>
            <Link className="detail-link" href="/lesson/ilk-ders">{language === "tr" ? "Görevi aç" : "Open quest"} <Arrow /></Link>
          </div>
        </div>
        {notice && <div className="progress-notice" role="status">{notice}</div>}
      </section>

      <section className="lesson-banner">
        <div className="lesson-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> {t.lessonKicker}</p>
          <h2>{t.lessonTitle}</h2>
          <p>{t.lessonText}</p>
          <Link className="button button-dark" href="/lesson/ilk-ders">{t.openLesson} <Arrow /></Link>
        </div>
        <div className="lesson-index">
          <span>00</span>
          <div className="index-ring">START<br /><b>HERE</b></div>
          <span>01</span>
        </div>
      </section>

      <section className="method-section" id="method">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / {t.howKicker}</p>
            <h2>{t.howTitle}</h2>
          </div>
        </div>
        <div className="method-grid">
          {t.howItems.map(([number, title, description]) => (
            <article key={number} className="method-card">
              <span>{number}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
