import Image from "next/image";
import { withBasePath } from "@/lib/sitePath";

export function HeroCraftVisual() {
  return (
    <figure className="relative w-full min-w-0 overflow-hidden rounded-md border border-bark/20 bg-paper p-2 shadow-soft">
      <div className="relative min-h-[330px] overflow-hidden rounded-md bg-stone sm:min-h-[430px]">
        <Image
          src={withBasePath("/images/hero-menuiseries-alu-7016.webp")}
          alt="Façade rénovée avec fenêtres aluminium gris anthracite et baie vitrée"
          fill
          priority
          sizes="(min-width: 1024px) 42vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/78 via-ink/10 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-4 left-4 right-4 rounded-md border border-paper/20 bg-ink/78 p-4 text-paper shadow-sm backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-[320px]">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-timber">
            Fenêtres alu & PVC
          </p>
          <p className="mt-1 text-sm font-semibold leading-6">
            Menuiseries anthracite RAL 7016, PVC blanc et finitions propres.
          </p>
        </div>
      </div>
      <figcaption className="sr-only">
        Façade rénovée avec fenêtres aluminium gris anthracite et baie vitrée.
      </figcaption>
    </figure>
  );
}
