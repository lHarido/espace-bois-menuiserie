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
    <article className="group flex h-full flex-col border-l-4 border-stone bg-paper p-5 shadow-sm transition hover:border-timber hover:bg-white">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-linen text-moss">
          <Icon aria-hidden="true" className="h-5 w-5" />
        </div>
        <span className="text-xs font-semibold uppercase text-steel">{service.shortTitle}</span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-ink">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-steel">{service.description}</p>
      {!compact ? (
        <ul className="mt-5 flex flex-wrap gap-2 text-sm text-ink">
          {service.items.map((item) => (
            <li key={item} className="bg-linen px-3 py-2">
              {item}
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
        {compact ? "Voir quoi préparer" : "Préparer ce projet"}
        <ArrowRight aria-hidden="true" className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </Link>
    </article>
  );
}
