"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2, Phone, Send } from "lucide-react";
import { company } from "@/lib/company";

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
  const [status, setStatus] = useState<"idle" | "prepared">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (contactEmail) {
      const lines = [
        `Nom : ${formData.get("name") ?? ""}`,
        `Téléphone : ${formData.get("phone") ?? ""}`,
        `E-mail : ${formData.get("email") ?? ""}`,
        `Commune du chantier : ${formData.get("city") ?? ""}`,
        `Type de projet : ${formData.get("projectType") ?? ""}`,
        "",
        `${formData.get("message") ?? ""}`,
      ];
      const subject = encodeURIComponent("Demande de projet menuiserie");
      const body = encodeURIComponent(lines.join("\n"));
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      return;
    }

    setStatus("prepared");
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-semibold text-ink">Préparer une demande claire</h2>
        <p className="mt-2 text-sm leading-6 text-steel">
          Ces informations aident à cadrer l'échange. Pour aller vite, appelez
          directement avec le type de projet, la commune et quelques dimensions.
        </p>
      </div>
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
          Message ou éléments à prévoir
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
        <p>Le plus efficace : indiquez la commune, le type de menuiserie, les dimensions approximatives et l'objectif du chantier.</p>
      </div>

      {status === "prepared" ? (
        <div className="mt-4 flex gap-3 rounded-md border border-moss/25 bg-linen p-4 text-sm leading-6 text-ink">
          <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-moss" />
          <p>
            Votre demande est prête à être expliquée. Appelez directement l'entreprise
            pour valider la faisabilité et les prochaines étapes.
          </p>
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-moss px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink sm:w-auto"
        >
          <Send aria-hidden="true" className="h-4 w-4" />
          {contactEmail ? "Envoyer par e-mail" : "Préparer ma demande"}
        </button>
        <a
          href={company.phoneHref}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md border border-bark/35 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-moss hover:text-moss sm:w-auto"
        >
          <Phone aria-hidden="true" className="h-4 w-4" />
          Appeler
        </a>
      </div>
    </form>
  );
}
