import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, MapPin, Phone, Ruler } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { ServiceCard } from "@/components/ServiceCard";
import { company, services } from "@/lib/company";
import { withBasePath } from "@/lib/sitePath";

export const metadata: Metadata = {
  title: "Prestations menuiserie Ain, Pays de Gex, Haute-Savoie",
  description:
    "Fenêtres, portes, volets roulants, escaliers, parquets, dressings et rénovation énergétique autour de Valserhône, dans l'Ain, le Pays de Gex et la Haute-Savoie proche.",
};

export default function PrestationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Prestations" }]} />
      <section className="py-10 sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">Projets</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Partez du chantier, pas de la catégorie.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-steel">
              Fenêtres alu RAL 7016, PVC blanc, volets, porte de garage,
              escalier, parquet ou rangement : le bon choix dépend d'abord de la
              maison, de l'usage et des finitions attendues.
            </p>
          </div>

          <figure className="relative min-h-[360px] overflow-hidden border border-bark/20 bg-stone shadow-soft sm:min-h-[500px]">
            <Image
              src={withBasePath("/images/fenetres-alu-7016.png")}
              alt="Fenêtres aluminium gris anthracite RAL 7016 posées sur une façade claire"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/76 via-ink/10 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 text-paper sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-timber">Fenêtres, volets, finitions</p>
              <p className="mt-2 max-w-lg text-2xl font-semibold leading-tight">
                Voir le rendu final avant de parler produit.
              </p>
              <div className="mt-5 grid gap-2 text-sm text-paper/86 sm:grid-cols-3">
                <span className="bg-ink/78 px-3 py-2 backdrop-blur">Alu RAL 7016</span>
                <span className="bg-ink/78 px-3 py-2 backdrop-blur">PVC blanc</span>
                <span className="bg-ink/78 px-3 py-2 backdrop-blur">Bois intérieur</span>
              </div>
            </figcaption>
          </figure>

          <div className="grid gap-5 border-y border-stone/80 py-5 text-sm text-ink lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  label: "Commune",
                  text: "Pour vérifier tout de suite si le chantier est dans la zone.",
                  icon: MapPin,
                },
                {
                  label: "Photos",
                  text: "Façade, pièce, détail abîmé : l'image évite les devis hors sujet.",
                  icon: Camera,
                },
                {
                  label: "Mesures",
                  text: "Une largeur, une hauteur et l'objectif suffisent pour démarrer.",
                  icon: Ruler,
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex gap-3">
                    <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    <p>
                      <strong>{item.label}</strong>
                      <span className="mt-1 block leading-6 text-steel">{item.text}</span>
                    </p>
                  </div>
                );
              })}
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:min-w-[360px] lg:flex-col">
              <a
                href={company.phoneHref}
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-moss"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span>Appeler le {company.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-bark/35 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss"
              >
                <span>Préparer ma demande</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-moss">Prestations</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Chaque chantier a son visuel et ses points à vérifier.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-steel lg:justify-self-end">
              Les images servent à repérer une direction : lignes fines en aluminium,
              entretien simple en PVC, chaleur du bois, rangement intégré ou accès
              plus sécurisé.
            </p>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Vous hésitez entre deux solutions ?" text="Appelez avec la commune, deux photos et l'objectif du chantier. Le choix entre PVC, aluminium ou bois sera plus simple à trancher." />
    </>
  );
}
