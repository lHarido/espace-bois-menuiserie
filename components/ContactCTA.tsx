import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "@/lib/company";

type ContactCTAProps = {
  title?: string;
  text?: string;
};

export function ContactCTA({
  title = "Un projet à clarifier ?",
  text = "Un premier appel permet de valider le besoin, la zone d'intervention et les priorités du chantier.",
}: ContactCTAProps) {
  return (
    <section className="atelier-texture py-14 text-paper">
      <div className="container-shell">
        <div className="flex flex-col gap-6 border-y border-paper/18 py-8 md:flex-row md:items-center md:justify-between">
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
              Préparer ma demande
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
