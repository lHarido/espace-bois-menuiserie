"use client";

import { FormEvent, useState } from "react";
import { AlertCircle, Send } from "lucide-react";

type ContactFormProps = {
  contactEmail: string | null;
};

const projectTypes = [
  "Fenêtres / baies vitrées",
  "Volets / volets roulants",
  "Porte d'entrée",
  "Porte de garage / portail",
  "Escalier sur mesure",
  "Parquet",
  "Dressing / placard",
  "Autre projet de menuiserie",
];

export function ContactForm({ contactEmail }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "needsConnection">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("needsConnection");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-ink">
            Nom
          </label>
          <input
            id="contact-name"
            required
            name="name"
            autoComplete="name"
            className="min-h-11 rounded-md border border-stone bg-white px-3 py-2 text-sm text-ink"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-phone" className="text-sm font-medium text-ink">
            Téléphone
          </label>
          <input
            id="contact-phone"
            required
            name="phone"
            type="tel"
            autoComplete="tel"
            className="min-h-11 rounded-md border border-stone bg-white px-3 py-2 text-sm text-ink"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-ink">
            E-mail
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className="min-h-11 rounded-md border border-stone bg-white px-3 py-2 text-sm text-ink"
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="contact-city" className="text-sm font-medium text-ink">
            Commune du chantier
          </label>
          <input
            id="contact-city"
            name="city"
            autoComplete="address-level2"
            className="min-h-11 rounded-md border border-stone bg-white px-3 py-2 text-sm text-ink"
          />
        </div>
      </div>

      <div className="mt-4 grid gap-2">
        <label htmlFor="contact-project-type" className="text-sm font-medium text-ink">
          Type de projet
        </label>
        <select
          id="contact-project-type"
          name="projectType"
          className="min-h-11 rounded-md border border-stone bg-white px-3 py-2 text-sm text-ink"
          defaultValue=""
        >
          <option value="" disabled>
            Sélectionner une prestation
          </option>
          {projectTypes.map((project) => (
            <option key={project}>{project}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 grid gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          name="message"
          rows={5}
          className="rounded-md border border-stone bg-white px-3 py-2 text-sm text-ink"
        />
      </div>

      <div className="mt-5 rounded-md bg-sage px-4 py-3 text-sm leading-6 text-ink">
        <p>
          Adresse de réception prévue :{" "}
          <strong>{contactEmail ?? "CONTACT_EMAIL à renseigner avant mise en ligne"}</strong>.
        </p>
      </div>

      {status === "needsConnection" ? (
        <div className="mt-4 flex gap-3 rounded-md border border-timber/35 bg-linen p-4 text-sm leading-6 text-ink">
          <AlertCircle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-timber" />
          <p>
            Le formulaire est prêt côté interface, mais l'envoi doit être connecté à un
            service réel avant mise en ligne. Pour une demande immédiate, appelez
            directement l'entreprise.
          </p>
        </div>
      ) : null}

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink sm:w-auto"
      >
        <Send aria-hidden="true" className="h-4 w-4" />
        Préparer la demande
      </button>
    </form>
  );
}
