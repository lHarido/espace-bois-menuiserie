import { Quote, Star } from "lucide-react";
import type { CompanyReview } from "@/lib/company";

type ReviewCardProps = {
  review: CompanyReview;
};

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="flex h-full flex-col rounded-md border border-stone/80 bg-paper p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Quote aria-hidden="true" className="h-5 w-5 text-moss" />
        <div className="flex gap-1 text-timber" aria-label="Avis positif">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} aria-hidden="true" className="h-4 w-4 fill-current" />
          ))}
        </div>
      </div>
      <blockquote className="flex-1 text-sm leading-6 text-ink">“{review.quote}”</blockquote>
      <p className="mt-5 border-t border-stone/70 pt-4 text-sm text-steel">
        {review.source}, avis du {review.date}.
      </p>
    </article>
  );
}
