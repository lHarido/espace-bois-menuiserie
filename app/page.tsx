import Link from "next/link";
import { ArrowRight, MapPin, Phone, Star } from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { HeroCraftVisual } from "@/components/HeroCraftVisual";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { TrustBadge } from "@/components/TrustBadge";
import {
  company,
  projectShowcase,
  qualitySignals,
  ratings,
  reviews,
  services,
  trustBadges,
  visitorPersonas,
} from "@/lib/company";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-linen via-paper to-paper py-8 sm:py-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-moss/40 to-transparent" aria-hidden="true" />
        <div className="container-shell grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-md bg-sage px-3 py-2 text-sm font-semibold text-moss">
              Artisan menuisier autour de Valserhône
            </p>
            <h1 className="max-w-4xl break-words font-display text-3xl font-semibold leading-tight text-ink sm:text-5xl sm:leading-[1.04]">
              Fenêtres, volets et menuiseries posés proprement autour de Valserhône
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-steel">
              Bois, PVC ou aluminium : un artisan local pour remplacer vos
              ouvertures, rénover vos intérieurs et obtenir des finitions nettes.
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
                href="/contact"
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-bark/35 bg-paper px-5 py-3 text-sm font-semibold text-ink transition hover:bg-white sm:w-auto"
              >
                <span className="min-w-0 truncate sm:whitespace-nowrap">Décrire mon projet</span>
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

      <section className="py-14 sm:py-16">
        <div className="container-shell">
          <SectionTitle eyebrow="Vos besoins" title="Ce que vous voulez savoir avant de choisir un menuisier">
            <p>
              Avant d'appeler, vous avez besoin de savoir si votre projet est compris,
              si le chantier sera propre et si le rendu sera à la hauteur.
            </p>
          </SectionTitle>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {visitorPersonas.map((persona) => {
              const Icon = persona.icon;

              return (
                <article key={persona.title} className="rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-sage text-moss">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-ink">{persona.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-steel">{persona.need}</p>
                  <p className="mt-4 border-t border-stone/70 pt-4 text-sm font-medium leading-6 text-ink">
                    {persona.reassurance}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <SectionTitle eyebrow="Qualité" title="Ce qui doit se voir sur un chantier terminé">
            <p>
              La qualité ne se résume pas au matériau. Elle se voit dans la pose,
              les raccords, les conseils donnés avant le devis et l'état du logement
              à la fin de l'intervention.
            </p>
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {qualitySignals.map((signal) => {
              const Icon = signal.icon;

              return (
                <div key={signal.title} className="flex gap-4 rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-paper">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink">{signal.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-steel">{signal.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Réalisations" title="Des rendus sobres pour se projeter">
              <p>
                Aluminium anthracite, PVC blanc, escalier bois ou agencement :
                ces exemples donnent une idée claire du niveau de finition recherché.
              </p>
            </SectionTitle>
            <Link
              href="/realisations"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-bark/30 bg-paper px-4 py-2 text-sm font-semibold text-ink hover:bg-white"
            >
              Voir les réalisations
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {projectShowcase.slice(0, 3).map((project, index) => (
              <ProjectPlaceholder key={project.title} {...project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16" id="prestations">
        <div className="container-shell">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionTitle eyebrow="Prestations" title="Les demandes les plus courantes">
              <p>
                Repérez rapidement le bon point d'entrée, puis appelez pour valider
                le matériau, les contraintes et les prochaines étapes.
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
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.slice(0, 4).map((service) => (
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
                Après le premier appel : besoin clarifié, solution choisie, devis
                préparé puis pose contrôlée.
              </p>
            </SectionTitle>
          </div>
          <ProcessSteps />
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-shell">
          <SectionTitle eyebrow="Avis clients" title="Ce que les clients retiennent">
            <p>
              Les avis mettent surtout en avant la ponctualité, le conseil,
              l'organisation et la propreté du travail.
            </p>
          </SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ratings.map((rating) => (
              <div key={rating.source} className="flex items-center justify-between gap-4 rounded-md border border-stone/80 bg-linen p-5">
                <div>
                  <p className="text-sm font-medium text-steel">{rating.source}</p>
                  <p className="mt-1 text-2xl font-semibold text-ink">{rating.value}</p>
                </div>
                <div className="flex gap-1 text-timber" aria-label={`Note ${rating.value}`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.source}-${review.date}`} review={review} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle eyebrow="Zone d'intervention" title="Un rayon d'environ 1h autour de Valserhône">
            <p>
              L'entreprise intervient en priorité autour de Valserhône et dans les
              communes accessibles dans un rayon d'environ une heure, selon la
              nature du chantier.
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

      <ContactCTA
        title="Vous voulez savoir si votre projet est faisable ?"
        text="Appelez directement avec quelques photos, dimensions ou priorités. L'objectif est de comprendre le besoin avant de parler matériau ou devis."
      />
    </>
  );
}
