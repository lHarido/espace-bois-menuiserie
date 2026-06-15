import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/company";

type ContactCTAProps = {
  title?: string;
  text?: string;
};

export function ContactCTA({
  title = "Vous avez un projet de menuiserie ?",
  text = "Décrivez votre besoin ou appelez directement pour parler fenêtres, volets, porte de garage, parquet, escalier ou agencement sur mesure.",
}: ContactCTAProps) {
  return (
    <section className="atelier-texture py-14 text-paper">
      <div className="container-shell rounded-md border border-white/10 bg-ink/72 p-6 shadow-soft md:p-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-balance text-2xl font-semibold leading-tight sm:text-3xl">{title}</h2>
          <p className="mt-3 leading-7 text-paper/78">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:shrink-0">
          <a
            href={company.phoneHref}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-linen"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            Appeler le {company.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-paper/35 px-5 py-3 text-sm font-semibold text-paper transition hover:bg-paper/10"
          >
            Contact
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
        </div>
      </div>
    </section>
  );
}
