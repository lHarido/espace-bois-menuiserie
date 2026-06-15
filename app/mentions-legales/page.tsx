import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SectionTitle } from "@/components/SectionTitle";
import { company, fullAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales d'Espace Bois Menuiserie : SIREN, SIRET, TVA, siège social, directeur de publication et hébergement.",
};

export default function MentionsLegalesPage() {
  const contactEmail = process.env.CONTACT_EMAIL ?? null;

  return (
    <>
      <Breadcrumbs items={[{ label: "Mentions légales" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell max-w-4xl">
          <SectionTitle as="h1" eyebrow="Informations légales" title="Mentions légales" />
          <div className="mt-8 space-y-8 rounded-md border border-stone/80 bg-paper p-6 leading-7 text-steel">
            <section>
              <h2 className="text-xl font-semibold text-ink">Éditeur du site</h2>
              <ul className="mt-4 space-y-2">
                <li>{company.name}</li>
                <li>SAS au capital de {company.capital}</li>
                <li>SIREN : {company.siren}</li>
                <li>SIRET : {company.siret}</li>
                <li>TVA intracommunautaire : {company.vat}</li>
                <li>Code APE : {company.ape}</li>
                <li>Siège social : {fullAddress}</li>
                <li>Directeur de publication : {company.manager}</li>
                <li>Téléphone : {company.phone}</li>
                {contactEmail ? <li>E-mail : {contactEmail}</li> : null}
              </ul>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink">Hébergement</h2>
              <p className="mt-4">
                Ce site statique est hébergé par GitHub Pages, service fourni par
                GitHub, Inc.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-ink">Propriété intellectuelle</h2>
              <p className="mt-4">
                Les contenus, textes et visuels du site sont destinés à présenter
                l'activité de l'entreprise. Toute réutilisation doit faire l'objet
                d'une autorisation préalable.
              </p>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
