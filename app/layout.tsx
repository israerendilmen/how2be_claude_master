import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "Claude Academy — Claude Code learning platform",
  description: "Türkçe ve İngilizce, uygulamalı Claude Code öğrenme platformu.",
  metadataBase: new URL("https://claudelearnacademy.vercel.app"),
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Claude Academy",
    description: "A gamified Turkish and English Claude Code learning platform.",
    url: "https://claudelearnacademy.vercel.app",
    siteName: "Claude Academy",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
