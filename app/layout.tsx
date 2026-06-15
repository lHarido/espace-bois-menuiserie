import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema";
import { company } from "@/lib/company";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Menuisier à Confort - Espace Bois Menuiserie",
    template: "%s | Espace Bois Menuiserie",
  },
  description:
    "Menuiserie bois, PVC et aluminium à Confort près de Valserhône : fenêtres, portes, volets, escaliers, parquets et agencements sur mesure.",
  keywords: company.seoTerms,
  authors: [{ name: company.name }],
  openGraph: {
    title: "Menuisier à Confort - Espace Bois Menuiserie",
    description:
      "Fenêtres, portes, volets et menuiseries sur mesure dans l'Ain.",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <LocalBusinessSchema />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
