import type { Metadata } from "next";
import { CheckCircle2, Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { ratings, reviews } from "@/lib/company";

export const metadata: Metadata = {
  title: "Avis clients Espace Bois Menuiserie",
  description:
    "Avis clients Espace Bois Menuiserie : organisation, conseil, délais respectés et qualité de pose autour de Valserhône.",
};

const takeaways = [
  "Le chantier est préparé, pas improvisé.",
  "Les conseils restent compréhensibles.",
  "La pose et les finitions se voient une fois les outils rangés.",
];

export default function AvisPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Avis clients" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-moss">Avis clients</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Ce que les clients remarquent quand le chantier est fini.
              </h1>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {ratings.map((rating) => (
                <div key={rating.source} className="border-l-4 border-timber bg-paper p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-timber">
                    <Star aria-hidden="true" className="h-5 w-5 fill-current" />
                    <p className="text-2xl font-semibold text-ink">{rating.value}</p>
                  </div>
                  <p className="mt-2 text-sm text-steel">
                    {rating.source}, {rating.count}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="border-y border-stone/80 py-6">
              <h2 className="text-xl font-semibold text-ink">Ce qu'on doit retrouver</h2>
              <div className="mt-5 space-y-4">
                {takeaways.map((item) => (
                  <p key={item} className="flex gap-3 text-sm leading-6 text-steel">
                    <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {reviews.map((review) => (
                <blockquote key={`${review.source}-${review.date}`} className="border-l-4 border-stone bg-paper p-5 shadow-sm">
                  <p className="text-lg font-semibold leading-8 text-ink">"{review.quote}"</p>
                  <footer className="mt-4 text-sm text-steel">
                    {review.source}, avis du {review.date}.
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactCTA title="Vous voulez éviter les mauvaises surprises ?" text="Décrivez le chantier simplement : commune, photos, dimensions et objectif. Le premier échange sert à cadrer avant d'aller plus loin." />
    </>
  );
}
