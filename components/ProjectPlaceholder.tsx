import Image from "next/image";
import { withBasePath } from "@/lib/sitePath";

type ProjectPlaceholderProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  priority?: boolean;
};

export function ProjectPlaceholder({
  title,
  description,
  imageSrc,
  imageAlt,
  priority = false,
}: ProjectPlaceholderProps) {
  return (
    <article className="group overflow-hidden rounded-md border border-stone/80 bg-paper shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone">
        <Image
          src={withBasePath(imageSrc)}
          alt={imageAlt}
          fill
          priority={priority}
          loading={priority ? undefined : "eager"}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/48 via-transparent to-transparent" aria-hidden="true" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-steel">{description}</p>
      </div>
    </article>
  );
}
