import { ClipboardCheck, Hammer, MessageSquareText, Ruler } from "lucide-react";

const steps = [
  {
    title: "Écoute du besoin",
    text: "Comprendre le logement, l'usage attendu et les contraintes du chantier.",
    icon: MessageSquareText,
  },
  {
    title: "Conseil & choix",
    text: "Orienter vers des solutions cohérentes en bois, PVC ou aluminium.",
    icon: Ruler,
  },
  {
    title: "Pose soignée",
    text: "Réaliser les travaux avec attention aux détails et aux finitions.",
    icon: Hammer,
  },
  {
    title: "Contrôle final",
    text: "Vérifier le bon fonctionnement et la qualité de l'installation.",
    icon: ClipboardCheck,
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <article key={step.title} className="rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-ink text-paper">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <span className="text-sm font-semibold text-moss">0{index + 1}</span>
            </div>
            <h3 className="mt-5 text-base font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-steel">{step.text}</p>
          </article>
        );
      })}
    </div>
  );
}
