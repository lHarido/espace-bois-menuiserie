import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Ruler } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { projectShowcase } from "@/lib/company";
import { withBasePath } from "@/lib/sitePath";

export const metadata: Metadata = {
  title: "Réalisations menuiserie Ain et Pays de Gex",
  description:
    "Rendus de menuiseries autour de Valserhône, dans l'Ain, le Pays de Gex et la Haute-Savoie proche : fenêtres aluminium RAL 7016, PVC blanc, volets, escalier, parquet et dressing.",
};

export default function RealisationsPage() {
  const featured = projectShowcase[0];
  const secondary = projectShowcase.slice(1);

  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-moss">Réalisations</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Regardez le rendu, pas une promesse.
              </h1>
            </div>
            <p className="max-w-2xl leading-7 text-steel lg:justify-self-end">
              Aluminium gris anthracite, PVC blanc, bois intérieur, porte de
              garage ou rangement : ces visuels servent à repérer une direction
              de finition avant le premier appel.
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="relative min-h-[430px] overflow-hidden bg-stone text-paper shadow-soft sm:min-h-[560px]">
              <Image
                src={withBasePath(featured.imageSrc)}
                alt={featured.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="image-overlay-contrast absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="image-caption-panel max-w-2xl p-4 sm:p-5">
                  <p className="image-caption-kicker text-sm font-semibold uppercase">Point de repère</p>
                  <h2 className="mt-2 max-w-2xl text-2xl font-semibold leading-tight sm:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-xl leading-7 text-paper/86">{featured.description}</p>
                </div>
              </div>
            </article>

            <div className="grid gap-5">
              <div className="border-y border-stone/80 py-5">
                <h2 className="text-xl font-semibold text-ink">Ce qu'il faut regarder</h2>
                <div className="mt-5 grid gap-4 text-sm leading-6 text-steel">
                  <p className="flex gap-3">
                    <Ruler aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    Alignements, proportions des profils, seuils et raccords.
                  </p>
                  <p className="flex gap-3">
                    <Camera aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    Rendu sur façade réelle ou dans une pièce, pas seulement un produit isolé.
                  </p>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-moss"
              >
                Demander un avis sur mon projet
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {secondary.map((project) => (
              <article key={project.title} className="group overflow-hidden border border-stone/80 bg-paper">
                <div className="relative aspect-[4/3] bg-stone">
                  <Image
                    src={withBasePath(project.imageSrc)}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-lg font-semibold leading-snug text-ink">{project.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-steel">{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Vous avez repéré un rendu qui vous plaît ?" text="Appelez avec une photo de votre façade ou de votre pièce. On verra vite si le rendu est cohérent avec votre maison." />
    </>
  );
}
