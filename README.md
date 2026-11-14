# Claude Academy / Claude Academy

Türkçe / English, uygulamalı ve gamified Claude Code learning platform.

Claude Academy takes Claude Code from one-off prompts to reliable workflows.
Seviyene göre ilerle, gerçek görevleri tamamla ve öğrendiklerini kendi
project'ine taşı.

Live site: [claudelearnacademy.vercel.app](https://claudelearnacademy.vercel.app/)

## Platform / Platform

Next.js app lives at the repository root:

- Seviye tespiti / level detection: Başlangıç, Orta Seviye, İleri Seviye
- Oyunlaştırılmış roadmap / gamified progress and XP
- Türkçe / English language switch
- 93 Markdown kaynağından generated documentation catalog
- Arama, filtreler / search, filters and readable document pages
- Örnek ders / first lesson: `/lesson/ilk-ders`
- Vercel Analytics and Speed Insights

## Local development / Yerel geliştirme

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Vercel deployment / Yayınlama

Connect the Vercel project to this repository. Root `package.json` and
`vercel.json` define the Next.js entrypoint:

```text
Install command: npm install
Build command: npm run build
Framework: Next.js
```

Analytics and Speed Insights are mounted in `app/layout.tsx` for every page.
Vercel dashboard'dan iki paneli enable etmen yeterlidir.

## Content sources / İçerik kaynakları

Course content and copy-paste examples live in the numbered modules:

1. `01-slash-commands/` — Slash komutları
2. `02-memory/` — Proje hafızası
3. `03-skills/` — Skills
4. `04-subagents/` — Agent ekipleri
5. `05-mcp/` — MCP bağlantıları
6. `06-hooks/` — Hook'lar
7. `07-plugins/` — Plugin'ler
8. `08-checkpoints/` — Checkpoint'ler
9. `09-advanced-features/` — İleri özellikler
10. `10-cli/` — CLI referansı

`npm run build` scans Markdown sources and regenerates the `/docs` routes.

## Languages and upstream / Diller ve kaynak proje

Türkçe arayüz / Turkish UI and English learning flow'a ek olarak repository
içinde Vietnamca, Çince, Japonca, Korece, Ukraynaca ve Farsça kaynak
klasörleri bulunur. Translation folders are preserved and can be added to the
web catalog as the next content layer.

Claude Academy is a fork and redesign inspired by
[luongnv89/claude-howto](https://github.com/luongnv89/claude-howto). Upstream
attribution is visible in the footer and license information.

## Quality checks / Kalite kontrolleri

```bash
uv run scripts/check_cross_references.py
uv run scripts/check_markdown_rendering.py
npm run build
```

## License / Lisans

MIT License. Ayrıntılar için [LICENSE](LICENSE) dosyasına bak.

GitHub: [israerendilmen/how2be_claude_master](https://github.com/israerendilmen/how2be_claude_master)
