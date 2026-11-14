# Claude Atölye Web

Next.js uygulaması, repo içindeki Markdown kaynaklarını build sırasında
otomatik olarak siteye aktarır.

## Local development

```bash
npm install
npm run dev
```

## Vercel deployment

Vercel project settings içinde **Root Directory** değerini `web` yapın.
Framework otomatik olarak Next.js algılanır; build komutu `npm run build` olur.

Her production sayfasında `@vercel/analytics` ve
`@vercel/speed-insights` bileşenleri aktif olarak render edilir. Vercel
dashboard üzerinden Analytics ve Speed Insights panellerini etkinleştirmek
yeterlidir; uygulama tarafında ek environment variable gerekmez.
