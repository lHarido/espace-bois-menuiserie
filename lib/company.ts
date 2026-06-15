import {
  BadgeCheck,
  BriefcaseBusiness,
  DoorOpen,
  Hammer,
  Home,
  PanelsTopLeft,
  Ruler,
  ShieldCheck,
  Star,
  TreePine,
  type LucideIcon,
} from "lucide-react";

export type CompanyRating = {
  source: string;
  value: string;
  count: string;
};

export type CompanyReview = {
  quote: string;
  source: string;
  date: string;
};

export type OpeningHours = {
  day: string;
  hours: string;
  schemaDay?: string;
  opens?: string;
  closes?: string;
  afternoonOpens?: string;
  afternoonCloses?: string;
};

export type Service = {
  title: string;
  shortTitle: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

export const company = {
  name: "ESPACE BOIS MENUISERIE",
  tagline: "Menuiserie bois, PVC & aluminium à Confort",
  description:
    "Fenêtres, portes, volets, escaliers, parquets et agencements sur mesure pour vos projets de rénovation et d'aménagement.",
  manager: "Julien TOURNEUX",
  legalForm: "Société par actions simplifiée",
  capital: "5 000 €",
  siren: "801 054 768",
  siret: "801 054 768 00024",
  vat: "FR83801054768",
  ape: "4332A - Travaux de menuiserie bois et PVC",
  createdAt: "02 avril 2014",
  staff: "1 à 2 salariés",
  phone: "06 71 11 93 91",
  phoneHref: "tel:+33671119391",
  address: {
    street: "223 rue du Manoir",
    postalCode: "01200",
    city: "Confort",
    country: "France",
  },
  certification:
    "Qualibat RGE indiquee dans les informations fournies, a verifier avant mise en ligne.",
  supplier: "BOUVET",
  payments: ["Chèque", "Espèces", "Virement bancaire"],
  areas: [
    "Confort",
    "Valserhône",
    "Bellegarde-sur-Valserine",
    "Ain (01)",
    "Haute-Savoie (74), selon projet",
  ],
  seoTerms: [
    "menuisier Confort",
    "menuiserie Ain",
    "pose fenêtres Ain",
    "fenêtres PVC bois aluminium",
    "volets roulants",
    "porte de garage",
    "escalier sur mesure",
    "parquet",
    "dressing sur mesure",
    "menuiserie intérieure",
    "menuiserie extérieure",
    "rénovation énergétique menuiseries",
  ],
};

export const ratings: CompanyRating[] = [
  { source: "PagesJaunes", value: "4,2/5", count: "7 avis" },
  { source: "Google", value: "5/5", count: "5 avis" },
];

export const reviews: CompanyReview[] = [
  {
    quote:
      "Nous sommes très contents du travail accompli. Très organisé, soigné, Julien est aussi une personne ponctuelle, de bons conseils. Je le recommande sans hésiter.",
    source: "PagesJaunes",
    date: "12 juillet 2025",
  },
  {
    quote:
      "Nous sommes ravis du travail effectué par Espace Bois Menuiserie sur notre chantier : changement de toutes les fenêtres et baies vitrées, volets roulants, garde-corps, porte de garage, grilles de défense, escaliers sur mesure, encadrement cheminée, pose de parquets, etc. Délais respectés, travail très soigné. Un professionnel qui aime son travail, et qui le fait bien.",
    source: "PagesJaunes",
    date: "21 mai 2025",
  },
  {
    quote: "Très bon travail réalisé chez nous. Je recommande.",
    source: "PagesJaunes",
    date: "16 septembre 2023",
  },
];

export const openingHours: OpeningHours[] = [
  {
    day: "Lundi",
    hours: "08h00 - 12h00 / 13h00 - 17h00",
    schemaDay: "Monday",
    opens: "08:00",
    closes: "12:00",
    afternoonOpens: "13:00",
    afternoonCloses: "17:00",
  },
  {
    day: "Mardi",
    hours: "08h00 - 12h00 / 13h00 - 17h00",
    schemaDay: "Tuesday",
    opens: "08:00",
    closes: "12:00",
    afternoonOpens: "13:00",
    afternoonCloses: "17:00",
  },
  {
    day: "Mercredi",
    hours: "08h00 - 12h00 / 13h00 - 17h00",
    schemaDay: "Wednesday",
    opens: "08:00",
    closes: "12:00",
    afternoonOpens: "13:00",
    afternoonCloses: "17:00",
  },
  {
    day: "Jeudi",
    hours: "08h00 - 12h00 / 13h00 - 17h00",
    schemaDay: "Thursday",
    opens: "08:00",
    closes: "12:00",
    afternoonOpens: "13:00",
    afternoonCloses: "17:00",
  },
  {
    day: "Vendredi",
    hours: "08h00 - 12h00 / 13h00 - 16h00",
    schemaDay: "Friday",
    opens: "08:00",
    closes: "12:00",
    afternoonOpens: "13:00",
    afternoonCloses: "16:00",
  },
  { day: "Samedi", hours: "Fermé" },
  { day: "Dimanche", hours: "Fermé" },
];

export const trustBadges = [
  { label: "Depuis 2014", icon: BriefcaseBusiness },
  { label: "Qualibat RGE", icon: BadgeCheck },
  { label: "4,2/5 PagesJaunes", icon: Star },
  { label: "5/5 Google", icon: Star },
  { label: "Travail soigné", icon: ShieldCheck },
  { label: "Conseils personnalisés", icon: Hammer },
];

export const services: Service[] = [
  {
    title: "Fenêtres & baies vitrées",
    shortTitle: "Fenêtres",
    description:
      "Remplacement et pose de fenêtres, baies vitrées et huisseries adaptées au bâti, avec attention portée à l'isolation et aux finitions.",
    items: ["Fenêtres bois, PVC et aluminium", "Baies vitrées", "Huisseries", "Pose en rénovation"],
    icon: PanelsTopLeft,
  },
  {
    title: "Portes, portes de garage & portails",
    shortTitle: "Portes",
    description:
      "Solutions d'accès robustes et soignées pour améliorer le confort, la sécurité et l'esthétique de l'habitat.",
    items: ["Portes d'entrée", "Portes intérieures", "Portes de garage", "Portails"],
    icon: DoorOpen,
  },
  {
    title: "Volets & protections solaires",
    shortTitle: "Volets",
    description:
      "Pose de volets et volets roulants pour protéger les ouvertures, gagner en confort et piloter la lumière au quotidien.",
    items: ["Volets roulants", "Volets battants", "Protections des ouvertures", "Conseil produit"],
    icon: ShieldCheck,
  },
  {
    title: "Escaliers, parquets & agencement intérieur",
    shortTitle: "Intérieur",
    description:
      "Travaux de menuiserie intérieure pour créer des espaces durables, chaleureux et bien intégrés à la maison.",
    items: ["Escaliers sur mesure", "Pose de parquets", "Encadrement de cheminée", "Finitions bois"],
    icon: Ruler,
  },
  {
    title: "Dressings, placards & rangements",
    shortTitle: "Rangements",
    description:
      "Création de rangements sur mesure pour optimiser chaque volume avec une conception simple, pratique et nette.",
    items: ["Dressings", "Placards", "Rangements intégrés", "Agencement intérieur"],
    icon: Home,
  },
  {
    title: "Menuiserie extérieure",
    shortTitle: "Extérieur",
    description:
      "Aménagements extérieurs en bois, PVC ou aluminium, pensés pour résister aux usages et aux contraintes du lieu.",
    items: ["Garde-corps", "Grilles de défense", "Agencement extérieur", "Menuiseries extérieures"],
    icon: TreePine,
  },
  {
    title: "Rénovation énergétique des menuiseries",
    shortTitle: "Rénovation énergétique",
    description:
      "Accompagnement sur le remplacement des menuiseries pour améliorer la performance thermique du logement.",
    items: ["Fenêtres isolantes", "Portes performantes", "Volets adaptés", "Certification RGE à vérifier"],
    icon: BadgeCheck,
  },
];

export const projectShowcase = [
  {
    title: "Remplacement de fenêtres et baies vitrées",
    description:
      "Rénovation avec fenêtres aluminium gris anthracite RAL 7016.",
    imageSrc: "/images/fenetres-alu-7016.png",
    imageAlt:
      "Fenêtres aluminium gris anthracite RAL 7016 sur une façade claire",
  },
  {
    title: "Pose de volets roulants",
    description:
      "Fenêtres PVC blanc et volets roulants intégrés sur façade claire.",
    imageSrc: "/images/volets-pvc-blanc.png",
    imageAlt:
      "Fenêtres PVC blanc avec volets roulants intégrés",
  },
  {
    title: "Escalier sur mesure",
    description:
      "Escalier en chêne avec garde-corps sobre et lignes précises.",
    imageSrc: "/images/escalier-bois.png",
    imageAlt: "Escalier intérieur en bois clair sur mesure",
  },
  {
    title: "Pose de parquet",
    description:
      "Parquet chêne posé avec soin dans une pièce lumineuse.",
    imageSrc: "/images/parquet-chene.png",
    imageAlt: "Parquet chêne en point de Hongrie dans un salon",
  },
  {
    title: "Dressing / placard sur mesure",
    description:
      "Rangement intégré en bois, pensé pour une chambre sobre et pratique.",
    imageSrc: "/images/dressing-sur-mesure.png",
    imageAlt: "Dressing en bois avec tiroirs et portes ouvertes",
  },
  {
    title: "Porte de garage",
    description:
      "Porte de garage finition bois sur une maison rénovée.",
    imageSrc: "/images/porte-garage-bois.png",
    imageAlt: "Porte de garage avec finition bois",
  },
];

export const sourceLinks = [
  {
    label: "Annuaire des entreprises",
    href: "https://annuaire-entreprises.data.gouv.fr/entreprise/801054768",
  },
  { label: "INSEE / Sirene", href: "https://avis-situation-sirene.insee.fr/" },
  { label: "PagesJaunes", href: "https://www.pagesjaunes.fr/" },
  { label: "Qualibat", href: "https://www.qualibat.com/" },
];

export const fullAddress = `${company.address.street}, ${company.address.postalCode} ${company.address.city}, ${company.address.country}`;
