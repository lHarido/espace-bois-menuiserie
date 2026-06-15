import { company, fullAddress, openingHours, services } from "@/lib/company";

export function LocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const openingHoursSpecification = openingHours
    .filter((item) => item.schemaDay && item.opens && item.closes)
    .flatMap((item) => [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.schemaDay,
        opens: item.opens,
        closes: item.closes,
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.schemaDay,
        opens: item.afternoonOpens,
        closes: item.afternoonCloses,
      },
    ]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: company.name,
    telephone: company.phone,
    ...(siteUrl ? { url: siteUrl } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      postalCode: company.address.postalCode,
      addressLocality: company.address.city,
      addressCountry: "FR",
    },
    areaServed: company.areas,
    paymentAccepted: company.payments,
    openingHoursSpecification,
    description: company.description,
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
    knowsAbout: company.seoTerms,
    legalName: company.name,
    founder: company.manager,
    taxID: company.vat,
    identifier: company.siren,
    addressDisplay: fullAddress,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
