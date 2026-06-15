import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionTitle } from "@/components/SectionTitle";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/company";

export const metadata: Metadata = {
  title: "Prestations de menuiserie bois, PVC et aluminium",
  description:
    "Fenêtres, portes, volets roulants, escaliers sur mesure, parquets, dressings et rénovation énergétique des menuiseries à Confort dans l'Ain.",
};

export default function PrestationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Prestations" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <SectionTitle as="h1" eyebrow="Prestations" title="Menuiserie intérieure et extérieure à Confort">
            <p>
              Choisissez votre point d'entrée selon l'objectif du chantier :
              confort thermique, sécurité, accès, rangement ou finitions intérieures.
            </p>
          </SectionTitle>
          <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Vous hésitez entre deux solutions ?" text="Un appel permet de comparer le PVC, l'aluminium, le bois ou les options de pose selon votre logement." />
    </>
  );
}
