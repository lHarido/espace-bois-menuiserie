import type { Metadata } from "next";
import { Star } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { ReviewCard } from "@/components/ReviewCard";
import { SectionTitle } from "@/components/SectionTitle";
import { ratings, reviews } from "@/lib/company";

export const metadata: Metadata = {
  title: "Avis clients",
  description:
    "Notes fournies et extraits d'avis clients pour Espace Bois Menuiserie : PagesJaunes 4,2/5 sur 7 avis et Google 5/5 sur 5 avis.",
};

export default function AvisPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Avis clients" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <SectionTitle as="h1" eyebrow="Avis clients" title="Notes et extraits d'avis fournis">
            <p>
              Les avis présentés sont des extraits issus des informations disponibles
              au moment de la création du site.
            </p>
          </SectionTitle>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ratings.map((rating) => (
              <div key={rating.source} className="rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
                <div className="flex items-center gap-2 text-timber">
                  <Star aria-hidden="true" className="h-5 w-5 fill-current" />
                  <p className="text-2xl font-semibold text-ink">{rating.value}</p>
                </div>
                <p className="mt-2 text-sm text-steel">
                  sur {rating.source} - {rating.count}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={`${review.source}-${review.date}`} review={review} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Vous avez un projet ? Contactez Espace Bois Menuiserie." />
    </>
  );
}
