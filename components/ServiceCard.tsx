import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/company";
import { withBasePath } from "@/lib/sitePath";

type ServiceCardProps = {
  service: Service;
  compact?: boolean;
};

export function ServiceCard({ service, compact = false }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden border border-stone/80 bg-paper shadow-sm transition hover:-translate-y-0.5 hover:border-timber hover:bg-white hover:shadow-soft">
      {!compact ? (
        <div className="relative aspect-[4/3] overflow-hidden bg-stone">
          <Image
            src={withBasePath(service.imageSrc)}
            alt={service.imageAlt}
            fill
            sizes="(min-width: 1024px) 31vw, (min-width: 768px) 45vw, 100vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/8 to-transparent" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-paper">
            <span className="text-xs font-semibold uppercase text-timber">{service.visualLabel}</span>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-paper text-ink">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </span>
          </div>
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          {compact ? (
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-linen text-moss">
              <Icon aria-hidden="true" className="h-5 w-5" />
            </div>
          ) : null}
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
      </div>
    </article>
  );
}
