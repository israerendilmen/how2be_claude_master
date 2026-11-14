import Link from "next/link";

export function GithubProfile() {
  return (
    <a className="github-profile" href="https://github.com/israerendilmen" target="_blank" rel="noreferrer">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.62 1.22 3.26.94.1-.73.39-1.22.71-1.5-2.5-.28-5.12-1.25-5.12-5.58 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.12 1.15a10.7 10.7 0 0 1 5.68 0c2.17-1.47 3.12-1.15 3.12-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.34-2.63 5.3-5.14 5.57.4.35.76 1.04.76 2.1v3.08c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z"/></svg>
      <span>@israerendilmen</span>
    </a>
  );
}

export function Brand() {
  return <img className="brand-logo" src="/brand/claude-atelier.svg" alt="Claude Atölye" />;
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <Brand />
      <p>Açık kaynak, uygulamalı Claude Code eğitimi.</p>
      <div className="footer-links">
        <Link href="/docs">Dokümanlar</Link>
        <a href="https://github.com/israerendilmen/how2be_claude_master/tree/main/vi" target="_blank" rel="noreferrer">VI</a>
        <a href="https://github.com/israerendilmen/how2be_claude_master/tree/main/zh" target="_blank" rel="noreferrer">ZH</a>
        <a href="https://github.com/israerendilmen/how2be_claude_master/tree/main/ja" target="_blank" rel="noreferrer">JA</a>
        <a href="https://github.com/israerendilmen/how2be_claude_master/tree/main/ko" target="_blank" rel="noreferrer">KO</a>
        <a href="https://github.com/israerendilmen/how2be_claude_master/tree/main/uk" target="_blank" rel="noreferrer">UK</a>
        <a href="https://github.com/israerendilmen/how2be_claude_master/tree/main/fa" target="_blank" rel="noreferrer">FA</a>
        <a href="https://github.com/luongnv89/claude-howto" target="_blank" rel="noreferrer">Upstream kaynak</a>
        <a href="https://github.com/israerendilmen/how2be_claude_master/blob/main/LICENSE" target="_blank" rel="noreferrer">MIT License</a>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
