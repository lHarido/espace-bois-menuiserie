import { openingHours } from "@/lib/company";

export function BusinessHours() {
  return (
    <dl className="divide-y divide-stone/70 rounded-md border border-stone/80 bg-paper">
      {openingHours.map((item) => (
        <div key={item.day} className="grid grid-cols-[110px_1fr] gap-3 px-4 py-3 text-sm sm:grid-cols-[140px_1fr]">
          <dt className="font-semibold text-ink">{item.day}</dt>
          <dd className="text-steel">{item.hours}</dd>
        </div>
      ))}
    </dl>
  );
}
