import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin, Phone } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { HeroCraftVisual } from "@/components/HeroCraftVisual";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadge } from "@/components/TrustBadge";
import { company, reviews, services, trustBadges } from "@/lib/company";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-linen via-paper to-paper py-8 sm:py-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moss/40 to-transparent" aria-hidden="true" />
        <div className="container-shell grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-md bg-sage px-3 py-2 text-sm font-semibold text-moss">
              Artisan menuisier basé à Confort, dans l'Ain
            </p>
            <h1 className="max-w-4xl break-words font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl sm:leading-[1.04]">
              Menuiserie bois, PVC & aluminium à Confort
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-steel">
              Fenêtres, portes, volets, escaliers, parquets et agencements sur
              mesure pour vos projets de rénovation et d'aménagement.
            </p>
            <div className="mt-6 flex min-w-0 flex-col gap-3 sm:flex-row">
              <a
                href={company.phoneHref}
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink sm:w-auto"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span className="min-w-0 truncate sm:whitespace-nowrap">Appeler le {company.phone}</span>
              </a>
              <Link
                href="/prestations"
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-bark/35 bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white sm:w-auto"
              >
                <span className="min-w-0 truncate sm:whitespace-nowrap">Voir les prestations</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {trustBadges.map((badge) => (
                <TrustBadge key={badge.label} {...badge} />
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <HeroCraftVisual />
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-18">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle eyebrow="Entreprise locale" title="Un interlocuteur de proximité pour vos menuiseries">
            <p>
              {company.name}, dirigée par {company.manager}, intervient sur des
              projets de menuiserie intérieure et extérieure : remplacement de
              fenêtres, pose de volets roulants, porte d'entrée, porte de garage,
              escalier sur mesure, parquet, dressing ou placard.
            </p>
            <p className="mt-4">
              L'entreprise est créée depuis 2014 et basée à Confort. Le contenu
              met en avant une approche sobre : écoute, conseil, organisation et
              travail soigné.
            </p>
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Bois, PVC et aluminium",
              "Pose et fourniture de menuiseries",
              "Rénovation énergétique liée aux ouvertures",
              "Agencements intérieurs et extérieurs",
            ].map((item) => (
              <div key={item} className="flex gap-3 rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                <p className="text-base font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16" id="prestations">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Prestations" title="Des travaux de menuiserie pour l'habitat">
              <p>
                Fenêtres PVC, bois ou aluminium, volets roulants, porte de garage,
                escalier sur mesure, parquet ou dressing : chaque projet demande
                une solution adaptée au logement.
              </p>
            </SectionTitle>
            <Link
              href="/prestations"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-bark/30 bg-paper px-4 py-2 text-sm font-semibold text-ink hover:bg-white"
            >
              Toutes les prestations
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((service) => (
              <ServiceCard key={service.title} service={service} compact />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-shell">
          <div className="mb-9 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Méthode" title="Une approche claire, du premier échange à la pose">
              <p>
                Une présentation volontairement simple pour refléter l'essentiel :
                comprendre le besoin, conseiller justement et livrer une menuiserie
                proprement posée.
              </p>
            </SectionTitle>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-shell">
          <SectionTitle eyebrow="Avis clients" title="Extraits d'avis clients fournis">
            <p>
              Les notes et avis ci-dessous reprennent uniquement les informations
              fournies pour la création du site.
            </p>
          </SectionTitle>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.source}-${review.date}`} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle eyebrow="Zone d'intervention" title="Un menuisier à Confort, près de Valserhône">
            <p>
              L'ancrage local est centré sur Confort, Valserhône,
              Bellegarde-sur-Valserine et l'Ain. La Haute-Savoie peut être évoquée
              selon les projets, sans engagement géographique non confirmé.
            </p>
          </SectionTitle>
          <div className="grid gap-3 sm:grid-cols-2">
            {company.areas.map((area) => (
              <div key={area} className="flex items-center gap-3 rounded-md border border-stone/80 bg-paper p-4">
                <MapPin aria-hidden="true" className="h-5 w-5 text-moss" />
                <span className="text-sm font-medium text-ink">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
