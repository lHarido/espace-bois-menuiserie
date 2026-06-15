import type { Metadata } from "next";
import { BadgeCheck, Building2, CalendarDays, CheckCircle2, UserRound } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Artisan menuisier près de Valserhône, Ain",
  description:
    "Espace Bois Menuiserie, artisan menuisier près de Valserhône : pose de menuiseries dans l'Ain, le Pays de Gex et la Haute-Savoie proche.",
};

const facts = [
  { label: "Dirigeant", value: company.manager, icon: UserRound },
  { label: "Création", value: company.createdAt, icon: CalendarDays },
  { label: "Statut", value: company.legalForm, icon: Building2 },
  { label: "Qualification", value: company.certification, icon: BadgeCheck },
];

const workingRules = [
  "Comprendre le besoin avant de pousser un matériau.",
  "Valider la zone d'intervention avant de faire perdre du temps.",
  "Soigner ce qui reste visible : seuils, raccords, alignements et habillages.",
];

export default function AProposPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "À propos" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">À propos</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
              Un artisan local, pas un standard téléphonique.
            </h1>
            <p className="mt-5 leading-7 text-steel">
              {company.name} intervient autour de Valserhône, dans un rayon
              d'environ une heure, pour poser et remplacer des fenêtres, volets,
              portes, escaliers, parquets, dressings et menuiseries sur mesure.
            </p>
            <p className="mt-4 leading-7 text-steel">
              L'objectif est simple : comprendre le logement, choisir une solution
              cohérente et laisser un chantier propre, avec des finitions qui tiennent.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {facts.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.label} className="border-l-4 border-stone bg-paper p-5 shadow-sm">
                  <Icon aria-hidden="true" className="h-5 w-5 text-moss" />
                  <p className="mt-4 text-sm font-semibold uppercase text-steel">{item.label}</p>
                  <p className="mt-2 text-base font-semibold leading-6 text-ink">{item.value}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Façon de travailler</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Ce qui doit se décider avant le devis.
            </h2>
          </div>
          <div className="divide-y divide-stone/80 border-y border-stone/80">
            {workingRules.map((rule) => (
              <p key={rule} className="flex gap-3 py-5 leading-7 text-steel">
                <CheckCircle2 aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-moss" />
                {rule}
              </p>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Vous voulez savoir si le chantier rentre dans la zone ?" text="Appelez avec la commune et deux photos. La première réponse doit être claire, pas décorative." />
    </>
  );
}
