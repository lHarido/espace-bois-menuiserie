import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { company, fullAddress } from "@/lib/company";
import { withBasePath } from "@/lib/sitePath";

export const metadata: Metadata = {
  title: "Menuisier Ain, Pays de Gex et Haute-Savoie proche",
  description:
    "Zone d'intervention Espace Bois Menuiserie : Valserhône, Ain, Pays de Gex, Bellegarde-sur-Valserine et Haute-Savoie proche pour fenêtres, volets, portes et menuiseries.",
  keywords: [
    "menuisier Ain",
    "menuisier Pays de Gex",
    "menuisier Haute-Savoie",
    "menuiserie Valserhône",
    "pose fenêtres Pays de Gex",
    "fenêtres aluminium Ain",
    "fenêtres PVC Haute-Savoie",
  ],
  alternates: {
    canonical: "/zone-intervention",
  },
};

const areaGroups = [
  {
    title: "Ain et Valserhône",
    lead: "La zone la plus directe depuis l'atelier : Valserhône, Bellegarde-sur-Valserine et les communes proches.",
    places: ["Valserhône", "Bellegarde-sur-Valserine", "Confort", "Lancrans", "Châtillon-en-Michaille", "Nantua", "Oyonnax"],
  },
  {
    title: "Pays de Gex",
    lead: "Déplacement étudié selon le chantier, surtout pour remplacement de fenêtres, volets, portes ou ensemble de menuiseries.",
    places: ["Gex", "Divonne-les-Bains", "Ferney-Voltaire", "Saint-Genis-Pouilly", "Thoiry", "Prévessin-Moëns", "Cessy"],
  },
  {
    title: "Haute-Savoie proche",
    lead: "Interventions possibles côté Haute-Savoie lorsque le trajet et le volume de travaux restent cohérents.",
    places: ["Saint-Julien-en-Genevois", "Frangy", "Seyssel", "Annecy selon chantier", "Cruseilles selon chantier", "Valleiry"],
  },
];

const projectMatches = [
  "Remplacement de fenêtres aluminium RAL 7016, PVC blanc ou bois",
  "Pose de volets roulants, volets battants et protections solaires",
  "Portes d'entrée, portes intérieures, portes de garage et portails",
  "Escaliers, parquets, dressings, placards et agencements intérieurs",
];

export default function ZoneInterventionPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Zone d'intervention menuiserie",
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: company.name,
      telephone: company.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: company.address.street,
        postalCode: company.address.postalCode,
        addressLocality: company.address.city,
        addressCountry: "FR",
      },
    },
    areaServed: areaGroups.flatMap((group) =>
      group.places.map((place) => ({
        "@type": "Place",
        name: place,
      })),
    ),
    serviceType: projectMatches,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Zone d'intervention" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="py-10 sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Zone d'intervention
            </p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Menuisier dans l'Ain, le Pays de Gex et la Haute-Savoie proche.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-steel">
              Espace Bois Menuiserie part de Confort, près de Valserhône, pour
              intervenir sur des chantiers cohérents en distance : fenêtres, volets,
              portes, escaliers, parquets et rangements sur mesure.
            </p>

            <div className="mt-7 grid gap-4 border-y border-stone/80 py-5 text-sm text-ink sm:grid-cols-2">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                <span>
                  <strong>Départ</strong>
                  <span className="mt-1 block leading-6 text-steel">{fullAddress}</span>
                </span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                <span>
                  <strong>Rayon</strong>
                  <span className="mt-1 block leading-6 text-steel">Environ 1h autour de Valserhône, selon chantier.</span>
                </span>
              </p>
            </div>

            <div className="mt-7 flex min-w-0 flex-col gap-3 sm:flex-row">
              <a
                href={company.phoneHref}
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-moss sm:w-auto"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                Appeler le {company.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-bark/35 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss sm:w-auto"
              >
                Vérifier ma commune
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <figure className="relative min-h-[360px] overflow-hidden border border-bark/20 bg-stone shadow-soft sm:min-h-[500px]">
            <Image
              src={withBasePath("/images/hero-menuiseries-alu-7016.webp")}
              alt="Maison rénovée avec fenêtres aluminium gris anthracite dans l'Ain"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/10 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-paper sm:p-7">
              <p className="text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-timber">
                <span className="sm:hidden">Ain, Pays de Gex</span>
                <span className="hidden sm:inline">Ain, Pays de Gex, Haute-Savoie proche</span>
              </p>
              <p className="mt-2 max-w-lg text-2xl font-semibold leading-tight">
                Une zone large, mais pas au hasard : la commune se valide dès le premier appel.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                Communes
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Les secteurs à citer quand vous appelez.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-steel lg:justify-self-end">
              La liste n'est pas une promesse automatique de déplacement. Elle sert
              à cadrer rapidement les demandes en menuiserie dans l'Ain, le Pays de
              Gex et la Haute-Savoie proche.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {areaGroups.map((group) => (
              <article key={group.title} className="border border-stone/80 bg-paper p-5 shadow-sm">
                <h3 className="text-xl font-semibold text-ink">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{group.lead}</p>
                <ul className="mt-5 flex flex-wrap gap-2 text-sm text-ink">
                  {group.places.map((place) => (
                    <li key={place} className="bg-linen px-3 py-2">
                      {place}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Chantiers concernés
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Le déplacement dépend surtout du projet.
            </h2>
            <p className="mt-4 leading-7 text-steel">
              Pour un petit réglage isolé, la zone sera plus courte. Pour un
              remplacement de plusieurs fenêtres, une porte de garage ou un chantier
              complet, l'intervention peut être étudiée plus largement.
            </p>
          </div>

          <div className="divide-y divide-stone/80 border-y border-stone/80">
            {projectMatches.map((item) => (
              <p key={item} className="flex gap-3 py-4 text-sm font-medium leading-6 text-ink">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Votre commune est dans l'Ain, le Pays de Gex ou la Haute-Savoie proche ?"
        text="Appelez avec la commune, le type de menuiserie et deux photos. Vous saurez vite si le déplacement est cohérent et quelle solution mérite d'être étudiée."
      />
    </>
  );
}
