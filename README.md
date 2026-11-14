# Claude Academy

Türkçe ve İngilizce, uygulamalı Claude Code öğrenme platformu.

Claude Academy; Claude Code'u tek seferlik prompt'lardan güvenilir çalışma
akışlarına taşıyan, seviyeye göre ilerleyen ve doğrudan uygulanabilir dersler
sunan açık kaynaklı bir öğrenme alanıdır.

## Platform

Next.js uygulaması repository kökünde bulunur:

- Seviye tespiti: Başlangıç, Orta Seviye, İleri Seviye
- Oyunlaştırılmış roadmap ve XP ilerlemesi
- Türkçe / İngilizce dil geçişi
- 93 Markdown kaynağından otomatik doküman kataloğu
- Arama, bölüm filtreleri ve okunabilir doküman sayfaları
- Örnek ders: `/lesson/ilk-ders`
- Vercel Analytics ve Speed Insights

## Local development

```bash
npm install
npm run dev
```

Tarayıcıda `http://localhost:3000` adresini aç.

Geliştirme sunucusunu doğrudan kökten çalıştır:

```bash
npm run dev
```

## Vercel deployment

Vercel projesini bu repository'ye bağla. Root Directory alanı görünmüyorsa
artık kök `package.json` ve `vercel.json` Next.js girişini tanımlar:

```text
Install command: npm install
Build command: npm run build
Framework: Next.js
```

Analytics ve Speed Insights bileşenleri `app/layout.tsx` içinde tüm
sayfalara bağlıdır. Vercel dashboard'dan iki paneli etkinleştirmen yeterlidir.

## İçerik kaynakları

Kurs içeriği ve kopyalanabilir örnekler repository kökündeki modüllerde bulunur:

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

`npm run build`, Markdown kaynaklarını otomatik tarar ve `/docs` rotalarını
yeniden üretir.

## Diller ve kaynak proje

Türkçe arayüz ve İngilizce içerik akışına ek olarak repository içinde
Vietnamca, Çince, Japonca, Korece, Ukraynaca ve Farsça kaynak klasörleri
bulunur. Bu çeviriler web kataloğuna sonraki içerik katmanı olarak eklenebilir;
şimdilik kaynak klasörlerinden korunur.

Claude Academy, [luongnv89/claude-howto](https://github.com/luongnv89/claude-howto)
projesinden esinlenen bir fork ve yeniden tasarım çalışmasıdır. Upstream
kaynak, footer ve lisans bilgileriyle görünür biçimde belirtilir.

## Kalite kontrolleri

```bash
uv run scripts/check_cross_references.py
uv run scripts/check_markdown_rendering.py
npm run build
```

## Lisans

MIT License. Ayrıntılar için [LICENSE](LICENSE) dosyasına bak.

GitHub: [israerendilmen/how2be_claude_master](https://github.com/israerendilmen/how2be_claude_master)
