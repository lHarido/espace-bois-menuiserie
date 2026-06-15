"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { company } from "@/lib/company";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis", href: "/avis" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-stone/70 bg-paper/96 backdrop-blur">
      <div className="container-shell flex min-h-16 items-center justify-between gap-4">
        <Link href="/" className="group flex min-w-0 items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-sm font-bold text-paper shadow-sm">
            EB
          </span>
          <span className="min-w-0">
            <span className="block truncate text-sm font-bold tracking-wide text-ink">
              {company.name}
            </span>
            <span className="hidden text-xs text-steel sm:block">Autour de Valserhône</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive ? "bg-sage text-ink" : "text-steel hover:bg-linen hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <a
            href={company.phoneHref}
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-moss px-4 py-2 text-sm font-semibold text-white transition hover:bg-ink"
          >
            <Phone aria-hidden="true" className="h-4 w-4" />
            <span className="whitespace-nowrap">{company.phone}</span>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-stone bg-paper text-ink lg:hidden"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" className="h-5 w-5" /> : <Menu aria-hidden="true" className="h-5 w-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="border-t border-stone/70 bg-paper lg:hidden">
          <nav aria-label="Navigation mobile" className="container-shell py-4">
            <div className="grid gap-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-md px-3 py-3 text-sm font-medium ${
                      isActive ? "bg-sage text-ink" : "text-steel hover:bg-linen hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href={company.phoneHref}
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-moss px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Appeler maintenant
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
