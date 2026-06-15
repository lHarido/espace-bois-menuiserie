import type { LucideIcon } from "lucide-react";

type TrustBadgeProps = {
  label: string;
  icon: LucideIcon;
};

export function TrustBadge({ label, icon: Icon }: TrustBadgeProps) {
  return (
    <span className="inline-flex min-h-9 shrink-0 items-center gap-2 rounded-md border border-stone/80 bg-white/92 px-3 py-1.5 text-sm font-medium text-ink shadow-sm backdrop-blur">
      <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-moss" />
      <span>{label}</span>
    </span>
  );
}
