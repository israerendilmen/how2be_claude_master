export type Language = "tr" | "en";

export type Module = {
  number: string;
  icon: string;
  color: string;
  title: Record<Language, string>;
  description: Record<Language, string>;
  lessons: Record<Language, string>[];
  duration: string;
  level: Record<Language, string>;
};

export const modules: Module[] = [
  {
    number: "01",
    icon: "⌘",
    color: "#b9f5d0",
    title: { tr: "Slash komutları", en: "Slash commands" },
    description: {
      tr: "Claude Code ile hızlı, tekrarlanabilir çalışma akışları kur.",
      en: "Build fast, repeatable workflows inside Claude Code."
    },
    lessons: [
      { tr: "İlk komutun", en: "Your first command" },
      { tr: "Özel komutlar", en: "Custom commands" },
      { tr: "MCP prompt'ları", en: "MCP prompts" }
    ],
    duration: "30 min",
    level: { tr: "Başlangıç", en: "Beginner" }
  },
  {
    number: "02",
    icon: "✦",
    color: "#d8c8ff",
    title: { tr: "Kalıcı hafıza", en: "Project memory" },
    description: {
      tr: "CLAUDE.md ile kurallarını her oturumda yanında taşı.",
      en: "Carry your project rules into every session with CLAUDE.md."
    },
    lessons: [
      { tr: "CLAUDE.md temelleri", en: "CLAUDE.md basics" },
      { tr: "Kural hiyerarşisi", en: "Rule hierarchy" },
      { tr: "Otomatik hafıza", en: "Auto memory" }
    ],
    duration: "45 min",
    level: { tr: "Başlangıç+", en: "Beginner+" }
  },
  {
    number: "03",
    icon: "◌",
    color: "#ffd6a5",
    title: { tr: "Skills", en: "Skills" },
    description: {
      tr: "Uzmanlığını gerektiğinde yüklenen, paylaşılabilir becerilere dönüştür.",
      en: "Turn expertise into shareable capabilities that load on demand."
    },
    lessons: [
      { tr: "Progressive disclosure", en: "Progressive disclosure" },
      { tr: "Skill oluşturma", en: "Create a skill" },
      { tr: "Skill yönetimi", en: "Manage skills" }
    ],
    duration: "1 hour",
    level: { tr: "Orta", en: "Intermediate" }
  },
  {
    number: "04",
    icon: "↗",
    color: "#b8e4ff",
    title: { tr: "Agent ekipleri", en: "Agent teams" },
    description: {
      tr: "Büyük görevleri doğru uzmanlara böl ve paralel ilerle.",
      en: "Split complex work across specialists and move in parallel."
    },
    lessons: [
      { tr: "Subagent mantığı", en: "Subagent fundamentals" },
      { tr: "Arka plan görevleri", en: "Background tasks" },
      { tr: "Worktree izolasyonu", en: "Worktree isolation" }
    ],
    duration: "1.5 hours",
    level: { tr: "Orta+", en: "Intermediate+" }
  },
  {
    number: "05",
    icon: "◎",
    color: "#ffe2a9",
    title: { tr: "MCP bağlantıları", en: "MCP connections" },
    description: {
      tr: "GitHub, veritabanı ve API'leri Claude'a güvenli şekilde bağla.",
      en: "Connect GitHub, databases, and APIs to Claude safely."
    },
    lessons: [
      { tr: "MCP kurulumu", en: "Install MCP" },
      { tr: "Scope'lar", en: "MCP scopes" },
      { tr: "Tool search", en: "Tool search" }
    ],
    duration: "1 hour",
    level: { tr: "Orta+", en: "Intermediate+" }
  },
  {
    number: "06",
    icon: "⌁",
    color: "#ffc4d6",
    title: { tr: "Hook'lar", en: "Hooks" },
    description: {
      tr: "Kalite kontrollerini ve otomasyonu her araç çağrısına taşı.",
      en: "Put quality gates and automation around every tool call."
    },
    lessons: [
      { tr: "Hook olayları", en: "Hook events" },
      { tr: "Girdi ve çıktı", en: "Input and output" },
      { tr: "Debugging", en: "Debugging" }
    ],
    duration: "1 hour",
    level: { tr: "Orta", en: "Intermediate" }
  }
];

export const copy = {
  tr: {
    brand: "Claude Academy",
    navModules: "Modüller",
    navHow: "Nasıl çalışır?",
    navLesson: "İlk ders",
    language: "EN",
    heroKicker: "Claude Code öğrenme platformu",
    heroTitle: "Kod yazmayı değil, <em>akış kurmayı</em> öğren.",
    heroText:
      "Claude Code'un gücünü küçük deneylerden güvenilir ekip akışlarına taşıyan, Türkçe ve İngilizce pratik eğitim.",
    start: "İlk derse başla",
    explore: "Modülleri keşfet",
    modules: "modül",
    hours: "öğrenme saati",
    bilingual: "iki dil",
    terminalLabel: "claude-academy / ilk-oturum",
    terminalPrompt: "İlk projem için güvenli bir başlangıç akışı öner.",
    terminalResult: "3 adım bulundu · 1 öneri hazır",
    roadmapKicker: "Öğrenme yolu",
    roadmapTitle: "Merakını çalışan bir sisteme dönüştür.",
    roadmapText:
      "Her modül kısa bir fikir, uygulanabilir bir görev ve kendi projenize taşıyabileceğiniz bir çıktı ile ilerler.",
    viewAll: "Tüm modüller",
    lessonKicker: "Örnek ders",
    lessonTitle: "İlk 15 dakikada güvenli çalışma döngünü kur.",
    lessonText:
      "İncele, planla, değiştir ve doğrula. İlk Claude Code oturumunu küçük ama gerçek bir sonuçla tamamla.",
    openLesson: "Örnek dersi aç",
    howKicker: "Yöntem",
    howTitle: "Dört adım. Daha az tahmin.",
    howItems: [
      ["01", "İncele", "Önce bağlamı anla, sonra dosyaya dokun."],
      ["02", "Planla", "Küçük ve doğrulanabilir bir sonraki adımı seç."],
      ["03", "Üret", "Claude'u doğru araç ve kurallarla yönlendir."],
      ["04", "Doğrula", "Diff'i, testi ve sonucu birlikte kontrol et."]
    ],
    footer: "Açık kaynak, uygulamalı Claude Code eğitimi."
  },
  en: {
    brand: "Claude Academy",
    navModules: "Modules",
    navHow: "How it works",
    navLesson: "First lesson",
    language: "TR",
    heroKicker: "A Claude Code learning studio",
    heroTitle: "Learn to build <em>systems</em>, not just prompts.",
    heroText:
      "Practical Turkish and English lessons that take Claude Code from small experiments to reliable team workflows.",
    start: "Start the first lesson",
    explore: "Explore modules",
    modules: "modules",
    hours: "learning hours",
    bilingual: "bilingual",
    terminalLabel: "claude-academy / first-session",
    terminalPrompt: "Suggest a safe starting workflow for my first project.",
    terminalResult: "3 steps found · 1 recommendation ready",
    roadmapKicker: "Learning path",
    roadmapTitle: "Turn curiosity into a working system.",
    roadmapText:
      "Every module combines one clear idea, a practical task, and an output you can take into your own project.",
    viewAll: "View all modules",
    lessonKicker: "Example lesson",
    lessonTitle: "Build your safe working loop in 15 minutes.",
    lessonText:
      "Inspect, plan, change, and verify. Finish your first Claude Code session with a small but real result.",
    openLesson: "Open the example lesson",
    howKicker: "The method",
    howTitle: "Four steps. Less guesswork.",
    howItems: [
      ["01", "Inspect", "Understand context before touching a file."],
      ["02", "Plan", "Choose the next small, verifiable step."],
      ["03", "Create", "Guide Claude with the right tools and rules."],
      ["04", "Verify", "Check the diff, tests, and result together."]
    ],
    footer: "Open-source, hands-on Claude Code education."
  }
} as const;
