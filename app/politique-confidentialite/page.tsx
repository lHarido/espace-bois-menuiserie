import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionTitle } from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité du site Espace Bois Menuiserie : formulaire de contact, finalité, conservation et cookies.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Politique de confidentialité" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <SectionTitle as="h1" eyebrow="Données personnelles" title="Politique de confidentialité" />
          <div className="mt-8 space-y-8 border-y border-stone/80 bg-paper py-6 leading-7 text-steel">
            <section>
              <h2 className="text-xl font-semibold text-ink">Données collectées</h2>
              <p className="mt-4">
                Le formulaire de contact peut collecter le nom, le téléphone,
                l'e-mail, la commune du chantier, le type de projet et le message
                transmis par l'utilisateur.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink">Finalité</h2>
              <p className="mt-4">
                Ces données servent uniquement à répondre aux demandes de contact
                et à préparer un échange lié à un projet de menuiserie.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink">Durée de conservation</h2>
              <p className="mt-4">
                Les informations transmises sont conservées uniquement le temps
                nécessaire au traitement de la demande et au suivi de l'échange.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink">Droit de suppression</h2>
              <p className="mt-4">
                Vous pouvez demander la suppression des informations transmises en
                contactant directement l'entreprise par ses coordonnées publiques.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink">Cookies</h2>
              <p className="mt-4">
                Aucun cookie marketing n'est ajouté par défaut. Si des outils de
                mesure d'audience ou services tiers sont ajoutés ultérieurement,
                leur fonctionnement devra être documenté ici.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
