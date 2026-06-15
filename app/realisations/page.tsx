import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";
import { SectionTitle } from "@/components/SectionTitle";
import { projectShowcase } from "@/lib/company";

export const metadata: Metadata = {
  title: "Réalisations et inspirations menuiserie",
  description:
    "Exemples de rendus pour se projeter : fenêtres aluminium RAL 7016, PVC blanc, volets roulants, escalier, parquet, dressing et porte de garage.",
};

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <SectionTitle as="h1" eyebrow="Réalisations" title="Des finitions sobres pour visualiser le résultat">
            <p>
              Ces exemples aident à imaginer le rendu d'une rénovation : menuiseries
              aluminium, PVC blanc, volets intégrés, bois intérieur ou porte de garage.
            </p>
          </SectionTitle>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectShowcase.map((project, index) => (
              <ProjectPlaceholder key={project.title} {...project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Un rendu similaire vous intéresse ?" />
    </>
  );
}
