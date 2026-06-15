import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BusinessHours } from "@/components/BusinessHours";
import { ContactForm } from "@/components/ContactForm";
import { SectionTitle } from "@/components/SectionTitle";
import { company, fullAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Espace Bois Menuiserie à Confort : téléphone, adresse, horaires et formulaire de demande pour vos projets de menuiserie.",
};

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_EMAIL ?? null;
  const mapQuery = encodeURIComponent(fullAddress);

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <SectionTitle as="h1" eyebrow="Contact" title="Parlez de votre projet de menuiserie">
            <p>
              Pour une demande urgente ou un premier échange, le téléphone reste le
              moyen le plus direct. Le formulaire est préparé pour une intégration
              future avec un service d'envoi.
            </p>
          </SectionTitle>

          <div className="mt-9 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <div className="rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
                <h2 className="text-xl font-semibold text-ink">Coordonnées</h2>
                <div className="mt-5 space-y-4 text-sm leading-6 text-steel">
                  <p className="flex gap-3">
                    <Phone aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    <a className="font-semibold text-ink hover:text-moss" href={company.phoneHref}>
                      {company.phone}
                    </a>
                  </p>
                  <p className="flex gap-3">
                    <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    <span>{fullAddress}</span>
                  </p>
                </div>
                <a
                  href={company.phoneHref}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Appeler maintenant
                </a>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-ink">Horaires</h2>
                <BusinessHours />
              </div>

              <div className="rounded-md border border-stone/80 bg-paper p-5">
                <h2 className="text-xl font-semibold text-ink">Moyens de paiement</h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {company.payments.map((payment) => (
                    <li key={payment} className="rounded-md bg-linen px-3 py-2 text-sm font-medium text-ink">
                      {payment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <ContactForm contactEmail={contactEmail} />
          </div>
        </div>
      </section>

      <section className="bg-linen py-12">
        <div className="container-shell">
          <h2 className="mb-4 text-xl font-semibold text-ink">Adresse</h2>
          <div className="overflow-hidden rounded-md border border-stone/80 bg-paper">
            <iframe
              title="Carte de localisation Espace Bois Menuiserie"
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              className="h-[360px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
