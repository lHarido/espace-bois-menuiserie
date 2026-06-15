import type { Metadata } from "next";
import { BadgeCheck, Building2, CalendarDays, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionTitle } from "@/components/SectionTitle";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "À propos de l'entreprise",
  description:
    "Présentation d'Espace Bois Menuiserie, entreprise de menuiserie créée en 2014 et basée à Confort, dirigée par Julien TOURNEUX.",
};

export default function AProposPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "À propos" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionTitle as="h1" eyebrow="À propos" title="Espace Bois Menuiserie, artisan local à Confort">
            <p>
              {company.name} est une entreprise de menuiserie spécialisée dans la
              vente, la fourniture et la pose de menuiseries, fenêtres, portes
              intérieures et extérieures, huisseries, menuiseries bois, PVC et
              aluminium.
            </p>
            <p className="mt-4">
              Dirigée par {company.manager}, l'entreprise met en avant une approche
              de terrain : écouter le besoin, conseiller les solutions adaptées et
              réaliser une pose soignée.
            </p>
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { label: "Dirigeant", value: company.manager, icon: UserRound },
              { label: "Création", value: company.createdAt, icon: CalendarDays },
              { label: "Statut", value: company.legalForm, icon: Building2 },
              { label: "Certification", value: "Qualibat RGE indiquée, à vérifier", icon: BadgeCheck },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="rounded-md border border-stone/80 bg-paper p-5">
                  <Icon aria-hidden="true" className="h-5 w-5 text-moss" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-steel">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-semibold leading-6 text-ink">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-8 md:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold text-ink">Matériaux</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              Bois, PVC et aluminium permettent de répondre à différents besoins :
              chaleur du matériau, facilité d'entretien, finesse des profils ou
              performance thermique.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ink">Approche</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              Conseil, organisation, ponctualité et finitions propres sont les
              qualités mises en avant dans les extraits d'avis clients fournis.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-ink">Fournisseur mentionné</h2>
            <p className="mt-3 text-sm leading-6 text-steel">
              La marque {company.supplier} est mentionnée dans les informations
              fournies comme marque ou fournisseur à présenter avec prudence.
            </p>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
