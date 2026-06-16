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
    default: "Menuisier Ain, Pays de Gex, Haute-Savoie - Espace Bois Menuiserie",
    template: "%s | Espace Bois Menuiserie",
  },
  description:
    "Pose de fenêtres alu RAL 7016, PVC blanc, volets, portes et bois intérieur depuis Confort près de Valserhône, dans l'Ain, le Pays de Gex et la Haute-Savoie proche.",
  keywords: company.seoTerms,
  authors: [{ name: company.name }],
  openGraph: {
    title: "Menuisier Ain, Pays de Gex, Haute-Savoie - Espace Bois Menuiserie",
    description:
      "Menuiseries posées proprement depuis Confort près de Valserhône, dans l'Ain, le Pays de Gex et la Haute-Savoie proche.",
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
