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
    default: "Menuisier autour de Valserhône - Espace Bois Menuiserie",
    template: "%s | Espace Bois Menuiserie",
  },
  description:
    "Fenêtres alu RAL 7016, PVC blanc, volets, portes et bois intérieur autour de Valserhône, dans un rayon d'environ 1h.",
  keywords: company.seoTerms,
  authors: [{ name: company.name }],
  openGraph: {
    title: "Menuisier autour de Valserhône - Espace Bois Menuiserie",
    description:
      "Menuiseries posées proprement autour de Valserhône : alu, PVC, volets, portes et bois intérieur.",
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
