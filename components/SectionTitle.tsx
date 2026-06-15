type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionTitle({
  eyebrow,
  title,
  children,
  align = "left",
  as = "h2",
}: SectionTitleProps) {
  const Heading = as;

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-moss">
          {eyebrow}
        </p>
      ) : null}
      <Heading className="text-balance font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl">
        {title}
      </Heading>
      {children ? (
        <div className="mt-4 text-base leading-7 text-steel sm:text-lg">{children}</div>
      ) : null}
    </div>
  );
}
