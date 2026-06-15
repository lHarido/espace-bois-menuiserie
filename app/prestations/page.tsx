import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Projets de menuiserie autour de Valserhône",
  description:
    "Fenêtres, portes, volets roulants, escaliers sur mesure, parquets, dressings et rénovation énergétique autour de Valserhône.",
};

export default function PrestationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Prestations" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <SectionTitle as="h1" eyebrow="Projets" title="Partez du chantier, pas de la catégorie.">
            <p>
              Fenêtres, volets, portes, escalier, parquet ou rangement : le plus
              utile est de décrire le problème, la commune et ce que vous voulez
              obtenir à la fin.
            </p>
          </SectionTitle>
          <div className="mt-8 grid gap-3 border-y border-stone/80 py-5 text-sm text-ink md:grid-cols-3">
            <p>
              <strong>1. Où ?</strong>
              <span className="mt-1 block leading-6 text-steel">Commune du chantier pour vérifier la zone.</span>
            </p>
            <p>
              <strong>2. Quoi ?</strong>
              <span className="mt-1 block leading-6 text-steel">Fenêtre, volet, porte, escalier, sol ou rangement.</span>
            </p>
            <p>
              <strong>3. Pourquoi ?</strong>
              <span className="mt-1 block leading-6 text-steel">Isolation, sécurité, esthétique, usage ou gain de place.</span>
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
