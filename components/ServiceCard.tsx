import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/company";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-stone/80 bg-paper shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="h-1 bg-gradient-to-r from-moss via-timber to-stone" aria-hidden="true" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-sage text-moss">
            <Icon aria-hidden="true" className="h-5 w-5" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-[0.12em] text-steel">
            {service.shortTitle}
          </span>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-ink">{service.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-steel">{service.description}</p>
        {!compact ? (
          <ul className="mt-5 space-y-2 text-sm text-ink">
            {service.items.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-timber" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        <Link
          href={compact ? "/prestations" : "/contact"}
          className={`mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition ${
            compact
              ? "border border-stone/90 bg-white text-ink hover:border-moss hover:text-moss"
              : "bg-ink text-paper hover:bg-moss"
          }`}
        >
          {compact ? "Voir les détails" : "Demander un renseignement"}
          <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
