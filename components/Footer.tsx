import Link from "next/link";
import { MapPin, Phone } from "lucide-react";
import { company, fullAddress } from "@/lib/company";

const footerNav = [
  { label: "Prestations", href: "/prestations" },
  { label: "Réalisations", href: "/realisations" },
  { label: "Avis clients", href: "/avis" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone/70 bg-linen">
      <div className="container-shell grid gap-10 py-12 md:grid-cols-[1.35fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-sm font-bold text-paper">
              EB
            </span>
            <span className="text-sm font-bold tracking-wide text-ink">{company.name}</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-6 text-steel">
            Menuiserie bois, PVC et aluminium autour de Valserhône pour fenêtres,
            portes, volets, agencements et travaux sur mesure.
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-steel">
            Zone d'intervention : rayon d'environ 1h autour de Valserhône, selon
            la nature du chantier.
          </p>
          <div className="mt-5 space-y-3 text-sm text-steel">
            <p className="flex gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
              <span>Adresse : {fullAddress}</span>
            </p>
            <p className="flex gap-2">
              <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-moss" />
              <a className="hover:text-moss" href={company.phoneHref}>
                {company.phone}
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Navigation</h2>
          <ul className="mt-4 space-y-3 text-sm text-steel">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-moss">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">Informations</h2>
          <ul className="mt-4 space-y-3 text-sm text-steel">
            <li>SIREN : {company.siren}</li>
            <li>APE : {company.ape}</li>
            <li>Qualification : {company.certification}</li>
            <li>
              <Link href="/mentions-legales" className="hover:text-moss">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link href="/politique-confidentialite" className="hover:text-moss">
                Politique de confidentialité
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-stone/70 py-5">
        <div className="container-shell flex flex-col gap-3 text-xs text-steel md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. Tous droits réservés.</p>
          <p>Site vitrine hébergé sur GitHub Pages.</p>
        </div>
      </div>
    </footer>
  );
}
