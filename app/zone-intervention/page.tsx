import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { company, fullAddress } from "@/lib/company";
import { withBasePath } from "@/lib/sitePath";

export const metadata: Metadata = {
  title: "Menuisier Ain, Haute-Savoie et Pays de Gex",
  description:
    "Menuisier à Confort près de Valserhône : pose de fenêtres, volets, portes et menuiseries dans l'Ain, le Pays de Gex et la Haute-Savoie proche.",
  keywords: [
    "menuisier Ain 01",
    "menuisier Ain",
    "menuisier Haute-Savoie 74",
    "menuisier Haute-Savoie",
    "menuisier Pays de Gex",
    "menuiserie Valserhône",
    "menuisier Bellegarde-sur-Valserine",
    "menuisier Saint-Julien-en-Genevois",
    "pose fenêtres Pays de Gex",
    "fenêtres aluminium Ain",
    "fenêtres PVC Haute-Savoie",
    "volets roulants Ain Haute-Savoie",
  ],
  alternates: {
    canonical: "/zone-intervention",
  },
  openGraph: {
    title: "Zone d'intervention menuiserie : Ain, Haute-Savoie, Pays de Gex",
    description:
      "Espace Bois Menuiserie intervient depuis Confort près de Valserhône pour vos fenêtres, volets, portes, escaliers, parquets et rangements.",
    type: "website",
  },
};

const areaGroups = [
  {
    title: "Ain (01) et Valserhône",
    lead: "La zone la plus directe depuis l'atelier : Confort, Valserhône, Bellegarde-sur-Valserine et les communes proches.",
    places: [
      "Confort",
      "Valserhône",
      "Bellegarde-sur-Valserine",
      "Lancrans",
      "Châtillon-en-Michaille",
      "Collonges",
      "Léaz",
      "Nantua",
      "Oyonnax",
    ],
  },
  {
    title: "Pays de Gex",
    lead: "Interventions possibles pour les projets de fenêtres, volets, portes ou ensembles de menuiseries.",
    places: [
      "Gex",
      "Divonne-les-Bains",
      "Ferney-Voltaire",
      "Saint-Genis-Pouilly",
      "Thoiry",
      "Prévessin-Moëns",
      "Cessy",
      "Ornex",
      "Ségny",
    ],
  },
  {
    title: "Haute-Savoie (74) proche",
    lead: "Interventions possibles côté Haute-Savoie proche selon la commune, les accès et le planning.",
    places: [
      "Saint-Julien-en-Genevois",
      "Archamps",
      "Neydens",
      "Viry",
      "Valleiry",
      "Frangy",
      "Seyssel",
      "Cruseilles",
      "Annecy selon chantier",
    ],
  },
];

const seoAreaSections = [
  {
    title: "Menuisier dans l'Ain autour de Valserhône",
    text:
      "Depuis Confort, Espace Bois Menuiserie intervient en priorité dans l'Ain pour les projets de menuiserie extérieure et intérieure : remplacement de fenêtres, pose de volets roulants, portes, parquets, escaliers et rangements sur mesure. Les demandes autour de Valserhône, Bellegarde-sur-Valserine, Nantua et Oyonnax sont les plus simples à organiser.",
  },
  {
    title: "Pose de fenêtres et volets dans le Pays de Gex",
    text:
      "Dans le Pays de Gex, Espace Bois Menuiserie répond aux demandes de fenêtres aluminium RAL 7016, fenêtres PVC blanc, volets, portes d'entrée ou porte de garage. Les communes comme Gex, Divonne-les-Bains, Ferney-Voltaire, Saint-Genis-Pouilly, Thoiry, Cessy et Prévessin-Moëns peuvent être évoquées simplement au premier contact.",
  },
  {
    title: "Menuiserie en Haute-Savoie proche",
    text:
      "Côté Haute-Savoie, l'intervention concerne surtout les secteurs proches de l'Ain : Saint-Julien-en-Genevois, Archamps, Neydens, Viry, Valleiry, Frangy, Seyssel ou Cruseilles. Les chantiers vers Annecy peuvent être regardés selon la nature des travaux, les délais et les produits à poser.",
  },
];

const projectMatches = [
  "Remplacement de fenêtres aluminium RAL 7016, PVC blanc ou bois",
  "Pose de volets roulants, volets battants et protections solaires",
  "Portes d'entrée, portes intérieures, portes de garage et portails",
  "Escaliers, parquets, dressings, placards et agencements intérieurs",
];

const faqItems = [
  {
    question: "Espace Bois Menuiserie intervient-il dans tout l'Ain ?",
    answer:
      "La priorité est donnée à Valserhône, Bellegarde-sur-Valserine, Confort et aux communes proches. Les demandes plus éloignées dans l'Ain, comme Nantua ou Oyonnax, sont étudiées selon le type de menuiserie et le volume du chantier.",
  },
  {
    question: "Est-il possible de faire poser des fenêtres dans le Pays de Gex ?",
    answer:
      "Oui, les projets dans le Pays de Gex peuvent être regardés, surtout pour des fenêtres, volets, portes ou menuiseries à remplacer. La commune et quelques photos permettent de préparer une première réponse claire.",
  },
  {
    question: "Intervenez-vous en Haute-Savoie ?",
    answer:
      "Oui, principalement en Haute-Savoie proche de l'Ain : Saint-Julien-en-Genevois, Archamps, Neydens, Viry, Valleiry, Frangy, Seyssel ou Cruseilles. Annecy peut être étudiée selon le chantier.",
  },
  {
    question: "Quels travaux sont les plus adaptés à une intervention éloignée ?",
    answer:
      "Les remplacements de fenêtres aluminium, fenêtres PVC, volets, portes de garage, escaliers, parquets ou aménagements complets sont plus adaptés qu'un petit réglage isolé.",
  },
];

export default function ZoneInterventionPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Menuisier Ain, Haute-Savoie et Pays de Gex",
    description:
      "Pose de fenêtres, volets, portes et menuiseries intérieures depuis Confort près de Valserhône, dans l'Ain, le Pays de Gex et la Haute-Savoie proche.",
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
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Zone d'intervention" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
              intervenir dans l'Ain, le Pays de Gex et la Haute-Savoie proche :
              fenêtres aluminium RAL 7016, PVC blanc, volets, portes, escaliers,
              parquets et rangements sur mesure.
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
                  <span className="mt-1 block leading-6 text-steel">Ain, Pays de Gex et Haute-Savoie proche, selon chantier.</span>
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
            <div className="image-overlay-contrast absolute inset-0" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-paper sm:p-7">
              <div className="image-caption-panel max-w-xl p-4 sm:p-5">
                <p className="image-caption-kicker text-xs font-semibold uppercase leading-5 tracking-[0.12em]">
                  <span className="sm:hidden">Ain, Pays de Gex</span>
                  <span className="hidden sm:inline">Ain, Pays de Gex, Haute-Savoie proche</span>
                </p>
                <p className="mt-2 max-w-lg text-2xl font-semibold leading-tight">
                  Une zone large, avec un premier contact simple autour de votre commune.
                </p>
              </div>
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
              à situer rapidement les demandes en menuiserie dans l'Ain (01), le
              Pays de Gex et la Haute-Savoie (74) proche.
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
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
                Secteurs
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Menuiserie locale par secteur.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-steel lg:justify-self-end">
              Chaque demande est validée avec la commune, le type de menuiserie et
              quelques photos. Cela permet de confirmer si le chantier est réaliste
              avant de programmer un déplacement.
            </p>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {seoAreaSections.map((section) => (
              <article key={section.title} className="border-l-4 border-moss bg-linen p-5">
                <h3 className="text-xl font-semibold leading-snug text-ink">{section.title}</h3>
                <p className="mt-4 text-sm leading-7 text-steel">{section.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Chantiers concernés
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Chaque projet se regarde simplement.
            </h2>
            <p className="mt-4 leading-7 text-steel">
              Indiquez la commune, le type de menuiserie et quelques photos si
              vous en avez. Cela permet de vous répondre clairement sur la suite,
              que le projet concerne l'Ain, le Pays de Gex ou la Haute-Savoie proche.
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

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">
              Questions fréquentes
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Zone d'intervention, sans flou.
            </h2>
            <p className="mt-4 leading-7 text-steel">
              Ces réponses aident à préparer les recherches locales avant l'appel :
              menuisier Ain, pose fenêtres Pays de Gex, menuiserie Haute-Savoie
              proche ou remplacement de volets autour de Valserhône.
            </p>
          </div>

          <div className="divide-y divide-stone/80 border-y border-stone/80">
            {faqItems.map((item) => (
              <article key={item.question} className="py-5">
                <h3 className="text-lg font-semibold leading-snug text-ink">{item.question}</h3>
                <p className="mt-3 leading-7 text-steel">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Votre commune est dans l'Ain, le Pays de Gex ou la Haute-Savoie proche ?"
        text="Appelez avec la commune, le type de menuiserie et quelques photos. Vous aurez un premier retour clair pour avancer sereinement."
      />
    </>
  );
}
