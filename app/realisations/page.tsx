import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactCTA } from "@/components/ContactCTA";
import { ProjectPlaceholder } from "@/components/ProjectPlaceholder";
import { SectionTitle } from "@/components/SectionTitle";
import { projectShowcase } from "@/lib/company";

export const metadata: Metadata = {
  title: "Réalisations et inspirations menuiserie",
  description:
    "Exemples de projets pour présenter les savoir-faire d'Espace Bois Menuiserie : fenêtres, volets roulants, escalier, parquet, dressing et porte de garage.",
};

export default function RealisationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Réalisations" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <SectionTitle as="h1" eyebrow="Réalisations" title="Exemples de projets pour se projeter">
            <p>
              Fenêtres, volets, escalier, parquet, dressing ou porte de garage :
              ces aperçus montrent les types de travaux que l'entreprise peut
              mettre en avant.
            </p>
          </SectionTitle>
          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projectShowcase.map((project, index) => (
              <ProjectPlaceholder key={project.title} {...project} priority={index === 0} />
            ))}
          </div>
        </div>
      </section>
      <ContactCTA title="Un projet similaire à préparer ?" />
    </>
  );
}
