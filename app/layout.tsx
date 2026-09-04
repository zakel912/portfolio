import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AvailabilityBanner } from "@/components/availability-banner";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LocaleProvider } from "@/components/locale-provider";
import { SkipLink } from "@/components/skip-link";

export const metadata: Metadata = {
  title: { default: "Zakaria El Mrani | Data & AI Engineer", template: "%s | Zakaria El Mrani" },
  description: "Élève-ingénieur à l’ENSIIE construisant des plateformes data et des systèmes IA, de l’ingestion aux pipelines RAG et aux APIs.",
  applicationName: "Zakaria El Mrani — Portfolio",
  authors: [{ name: "Zakaria El Mrani" }],
  keywords: ["Data Engineering", "AI Engineering", "Machine Learning", "ENSIIE", "RAG", "Cloud Data"],
  openGraph: {
    title: "Zakaria El Mrani | Data & AI Engineer",
    description: "Études de cas d’ingénierie autour des plateformes data, pipelines cloud et systèmes IA.",
    type: "website",
    locale: "fr_FR",
    siteName: "Zakaria El Mrani — Portfolio"
  },
  twitter: { card: "summary", title: "Zakaria El Mrani | Data & AI Engineer", description: "Construire des plateformes data et des systèmes IA." }
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "dark", themeColor: "#0a0b0d" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <LocaleProvider>
          <SkipLink />
          <div className="site-shell">
            <AvailabilityBanner />
            <Header />
            {children}
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
