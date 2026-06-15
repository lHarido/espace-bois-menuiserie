import type { Metadata } from "next";
import { Clock, MapPin, Phone, WalletCards } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BusinessHours } from "@/components/BusinessHours";
import { ContactForm } from "@/components/ContactForm";
import { company, fullAddress } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact menuisier Ain, Pays de Gex, Haute-Savoie",
  description:
    "Contactez Espace Bois Menuiserie près de Valserhône pour un chantier dans l'Ain, le Pays de Gex ou la Haute-Savoie proche : téléphone, horaires et zone d'intervention.",
};

export default function ContactPage() {
  const contactEmail = process.env.CONTACT_EMAIL ?? null;
  const mapQuery = encodeURIComponent(fullAddress);

  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <section className="py-12 sm:py-16">
        <div className="container-shell">
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase text-moss">Contact</p>
              <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
                Le plus rapide : appeler avec deux photos.
              </h1>
              <p className="mt-5 leading-7 text-steel">
                Donnez la commune du chantier, le type de menuiserie et une mesure
                approximative. Le premier échange sert à savoir si la demande est
                dans la bonne zone et quelle solution mérite d'être étudiée.
              </p>

              <div className="mt-8 border-y border-stone/80 py-5">
                <a
                  href={company.phoneHref}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-paper transition hover:bg-moss sm:w-auto"
                >
                  <Phone aria-hidden="true" className="h-4 w-4" />
                  Appeler le {company.phone}
                </a>
                <div className="mt-5 space-y-4 text-sm leading-6 text-steel">
                  <p className="flex gap-3">
                    <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    <span>{fullAddress}</span>
                  </p>
                  <p className="flex gap-3">
                    <WalletCards aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
                    <span>Paiements : {company.payments.join(", ")}</span>
                  </p>
                </div>
              </div>
            </div>

            <ContactForm contactEmail={contactEmail} />
          </div>
        </div>
      </section>

      <section className="bg-linen py-12 sm:py-14">
        <div className="container-shell grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase text-moss">Horaires & adresse</p>
            <h2 className="mt-3 flex items-center gap-3 text-2xl font-semibold text-ink">
              <Clock aria-hidden="true" className="h-6 w-6 text-moss" />
              Quand appeler
            </h2>
            <div className="mt-5">
              <BusinessHours />
            </div>
          </div>
          <div className="overflow-hidden border border-stone/80 bg-paper">
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
