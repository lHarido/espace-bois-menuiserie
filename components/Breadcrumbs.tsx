import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Breadcrumb = {
  label: string;
  href?: string;
};

type BreadcrumbsProps = {
  items: Breadcrumb[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Fil d'Ariane" className="container-shell pt-6 text-sm text-steel">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link className="hover:text-moss" href="/">
            Accueil
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <ChevronRight aria-hidden="true" className="h-4 w-4" />
            {item.href ? (
              <Link className="hover:text-moss" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
