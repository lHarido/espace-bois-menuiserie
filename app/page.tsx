import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  DoorOpen,
  MapPin,
  Phone,
  Ruler,
  ShieldCheck,
} from "lucide-react";
import { ContactCTA } from "@/components/ContactCTA";
import { company, projectShowcase, ratings, reviews } from "@/lib/company";
import { withBasePath } from "@/lib/sitePath";

const projectPaths = [
  {
    title: "Fenêtres qui fatiguent",
    text: "Isolation, vitrage, dépose propre et choix entre PVC blanc, alu RAL 7016 ou bois.",
    href: "/contact",
    icon: Ruler,
  },
  {
    title: "Volets ou protections solaires",
    text: "Remplacement, motorisation possible et intégration discrète sur la façade.",
    href: "/contact",
    icon: ShieldCheck,
  },
  {
    title: "Porte, garage ou accès",
    text: "Sécurité, usage quotidien, seuils et finitions sans bricolage visible.",
    href: "/contact",
    icon: DoorOpen,
  },
  {
    title: "Bois intérieur",
    text: "Escalier, parquet, dressing ou placard : du sur mesure qui tombe juste.",
    href: "/contact",
    icon: ClipboardCheck,
  },
];

const materialChoices = [
  {
    name: "PVC blanc",
    bestFor: "Rénovation efficace, entretien simple, rendu lumineux.",
    watch: "Attention aux proportions sur grandes ouvertures.",
  },
  {
    name: "Alu RAL 7016",
    bestFor: "Lignes fines, façade contemporaine, baies vitrées.",
    watch: "À accorder avec le style de la maison et l'exposition.",
  },
  {
    name: "Bois",
    bestFor: "Intérieur, chaleur matière, ajustements sur mesure.",
    watch: "Demande un vrai soin sur les finitions.",
  },
];

const callSteps = [
  {
    title: "Votre commune",
    text: "Cela permet de situer le chantier et d'organiser la suite simplement.",
    icon: MapPin,
  },
  {
    title: "Deux ou trois photos",
    text: "Façade, intérieur, détail abîmé : ça évite les devis hors sujet.",
    icon: Camera,
  },
  {
    title: "Une mesure approximative",
    text: "Pas besoin d'un plan parfait. Une largeur, une hauteur et l'objectif suffisent pour démarrer.",
    icon: Ruler,
  },
];

export default function HomePage() {
  const mainProjects = projectShowcase.slice(0, 4);
  const featuredReview = reviews[0];

  return (
    <>
      <section className="relative overflow-hidden border-b border-stone/70 bg-paper">
        <div className="container-shell grid gap-10 py-10 sm:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="mb-5 w-fit border-l-4 border-timber bg-linen px-4 py-2 text-sm font-semibold text-moss">
              Valserhône, Ain, Pays de Gex
            </p>
            <h1 className="max-w-4xl break-words font-display text-4xl font-semibold leading-[1.02] text-ink sm:text-6xl">
              Menuiseries autour de Valserhône, posées sans faire durer le flou.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-steel">
              Fenêtres alu RAL 7016, PVC blanc, volets, portes et bois intérieur :
              on regarde votre maison, votre usage, votre commune dans l'Ain, le
              Pays de Gex ou la Haute-Savoie proche avant de parler catalogue.
            </p>
            <div className="mt-7 flex min-w-0 flex-col gap-3 sm:flex-row">
              <a
                href={company.phoneHref}
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-moss sm:w-auto"
              >
                <Phone aria-hidden="true" className="h-4 w-4" />
                <span className="min-w-0 truncate sm:whitespace-nowrap">Appeler le {company.phone}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-md border border-bark/35 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss sm:w-auto"
              >
                <span className="min-w-0 truncate sm:whitespace-nowrap">Préparer ma demande</span>
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>

          </div>

          <figure className="relative min-h-[320px] overflow-hidden border border-bark/20 bg-stone shadow-soft sm:min-h-[430px] lg:min-h-[590px]">
            <Image
              src={withBasePath("/images/hero-menuiseries-alu-7016.webp")}
              alt="Façade rénovée avec fenêtres aluminium gris anthracite et baie vitrée"
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/12 to-transparent" aria-hidden="true" />
            <figcaption className="absolute inset-x-0 bottom-0 hidden gap-px bg-paper/15 text-paper sm:grid sm:grid-cols-3">
              {materialChoices.map((choice) => (
                <div key={choice.name} className="bg-ink/82 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase text-timber">{choice.name}</p>
                  <p className="mt-2 text-sm leading-6 text-paper/86">{choice.bestFor}</p>
                </div>
              ))}
            </figcaption>
            <div className="absolute inset-x-0 bottom-0 bg-ink/82 p-4 text-paper backdrop-blur sm:hidden">
              <p className="text-xs font-semibold uppercase text-timber">Alu 7016, PVC blanc, bois</p>
              <p className="mt-1 text-sm leading-6 text-paper/86">On choisit selon votre maison, pas selon une case.</p>
            </div>
          </figure>

          <div className="grid gap-3 border-y border-stone/80 py-4 text-sm text-ink sm:grid-cols-3 lg:col-span-2">
            {callSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="flex gap-3">
                  <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 leading-6 text-steel">{step.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-paper sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-timber">Entrées rapides</p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Trouvez votre cas en dix secondes.
            </h2>
            <p className="mt-4 max-w-md leading-7 text-paper/74">
              Pas besoin de connaître les termes techniques. Partez du problème,
              l'artisan traduit ensuite en solution.
            </p>
          </div>

          <div className="border-y border-paper/18">
            {projectPaths.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group grid gap-4 border-b border-paper/14 py-5 last:border-b-0 sm:grid-cols-[auto_minmax(0,1fr)_auto] sm:items-center"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-paper text-ink">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold">{item.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-paper/72">{item.text}</span>
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-paper/25 text-paper transition group-hover:bg-paper group-hover:text-ink">
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Choix matière</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Le matériau n'est pas une case à cocher.
            </h2>
            <p className="mt-4 leading-7 text-steel">
              Une fenêtre, un volet ou un escalier se choisit selon le bâti, la
              lumière, l'entretien voulu et le niveau de finition. Si une option
              n'est pas cohérente, elle doit être écartée avant le devis.
            </p>
          </div>

          <div className="overflow-hidden border-y border-stone/80 bg-paper">
            {materialChoices.map((choice) => (
              <div
                key={choice.name}
                className="grid gap-3 border-b border-stone/70 p-5 last:border-b-0 md:grid-cols-[0.3fr_0.4fr_0.3fr]"
              >
                <h3 className="text-lg font-semibold text-ink">{choice.name}</h3>
                <p className="text-sm leading-6 text-steel">{choice.bestFor}</p>
                <p className="text-sm font-medium leading-6 text-bark">{choice.watch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-moss">Rendus</p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
                Des images qui aident vraiment à se projeter.
              </h2>
            </div>
            <p className="max-w-2xl leading-7 text-steel lg:justify-self-end">
              La priorité n'est pas de montrer un atelier. C'est de voir le rendu
              final : aluminium anthracite, PVC blanc, bois intérieur, lignes
              propres et proportions crédibles.
            </p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
            <Link
              href="/realisations"
              className="group relative min-h-[390px] overflow-hidden bg-stone text-paper shadow-soft sm:min-h-[500px]"
            >
              <Image
                src={withBasePath(mainProjects[0].imageSrc)}
                alt={mainProjects[0].imageAlt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              <div className="image-overlay-contrast absolute inset-0" aria-hidden="true" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="image-caption-panel max-w-2xl p-4 sm:p-5">
                  <p className="image-caption-kicker text-sm font-semibold uppercase">Fenêtres alu 7016</p>
                  <h3 className="mt-2 max-w-xl text-2xl font-semibold leading-tight sm:text-3xl">
                    {mainProjects[0].title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-7 text-paper/86">{mainProjects[0].description}</p>
                </div>
              </div>
            </Link>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {mainProjects.slice(1).map((project) => (
                <Link
                  key={project.title}
                  href="/realisations"
                  className="group grid min-h-[170px] grid-cols-[0.42fr_0.58fr] overflow-hidden border border-stone/80 bg-linen"
                >
                  <div className="relative min-h-[170px] bg-stone">
                    <Image
                      src={withBasePath(project.imageSrc)}
                      alt={project.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 18vw, 42vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-4">
                    <h3 className="font-semibold leading-snug text-ink">{project.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-steel">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linen py-14 sm:py-16">
        <div className="container-shell grid gap-10 lg:grid-cols-[1fr_0.72fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Premier échange</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Une réponse utile avant de bloquer une visite.
            </h2>
            <div className="mt-8 divide-y divide-stone/80 border-y border-stone/80">
              {callSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="grid gap-4 py-5 sm:grid-cols-[auto_minmax(0,1fr)]">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-moss">0{index + 1}</span>
                      <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-paper">
                        <Icon aria-hidden="true" className="h-5 w-5" />
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 leading-7 text-steel">{step.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <aside className="border-l-4 border-timber bg-paper p-6 shadow-soft">
            <div className="flex flex-wrap gap-2">
              {ratings.map((rating) => (
                <div key={rating.source} className="rounded-md bg-sage px-3 py-2 text-sm font-semibold text-ink">
                  {rating.value} {rating.source}
                </div>
              ))}
            </div>
            <blockquote className="mt-6 text-xl font-semibold leading-8 text-ink">
              "{featuredReview.quote}"
            </blockquote>
            <p className="mt-4 text-sm text-steel">
              {featuredReview.source}, avis du {featuredReview.date}.
            </p>
            <a
              href={company.phoneHref}
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              Appeler maintenant
            </a>
          </aside>
        </div>
      </section>

      <section id="zone" className="bg-paper py-14 sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Zone d'intervention</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
              Ain, Pays de Gex et Haute-Savoie proche : dites simplement où se trouve le chantier.
            </h2>
            <p className="mt-4 leading-7 text-steel">
              Un appel permet de situer le projet et d'organiser la suite. Selon
              la nature des travaux, l'entreprise intervient autour de Valserhône,
              Bellegarde-sur-Valserine, dans le Pays de Gex, vers Nantua, Oyonnax
              et en Haute-Savoie proche.
            </p>
            <Link
              href="/zone-intervention"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-bark/35 bg-white px-4 py-2 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss sm:w-fit"
            >
              Voir la zone d'intervention
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {company.areas.map((area) => (
              <div key={area} className="flex items-center gap-3 border border-stone/80 bg-linen p-4">
                <MapPin aria-hidden="true" className="h-5 w-5 shrink-0 text-moss" />
                <span className="text-sm font-medium leading-6 text-ink">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-14 text-paper sm:py-16">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase text-timber">À préparer</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Trois infos valent mieux qu'un long formulaire.
            </h2>
          </div>
          <div className="grid gap-3">
            {[
              "La commune du chantier",
              "Le type de menuiserie à poser ou remplacer",
              "Quelques photos et dimensions approximatives",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 border-b border-paper/16 py-3">
                <CheckCircle2 aria-hidden="true" className="h-5 w-5 shrink-0 text-timber" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA
        title="Vous avez une photo du chantier sous la main ?"
        text="Appelez avec la commune, le type de projet et quelques photos. Vous aurez un retour clair sur les possibilités, les matériaux adaptés et les prochaines étapes."
      />
    </>
  );
}
