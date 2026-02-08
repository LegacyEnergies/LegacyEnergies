export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const site = {
  name: "Legacy Energies",
  // Keep empty for a cleaner majors-style lockup
  tagline: "",
  headquarters: "New York, United States",
  emails: {
    general: "info@legacyenergies.com",
    trading: "trading@legacyenergies.com",
    projects: "projects@legacyenergies.com",
    media: "media@legacyenergies.com",
  },
  // Replace these with real assets in /public/images if needed
  images: {
    homeHero: "/images/hero-energy.jpg",
    companyHero: "/images/hero-company.jpg",
    businessesHero: "/images/hero-trading.jpg",
    complianceHero: "/images/hero-compliance.jpg",
    newsroomHero: "/images/hero-newsroom.jpg",
    careersHero: "/images/hero-careers.jpg",
  },
};

export const nav: NavItem[] = [
  {
    label: "About us",
    href: "/company",
    description: "Corporate overview, governance, and operating model.",
    children: [
      { label: "Overview", href: "/company" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Corporate governance", href: "/company/corporate-governance" },
      { label: "How we operate", href: "/company/operating-model" },
      { label: "Ethics and compliance", href: "/compliance" },
    ],
  },
  {
    label: "Products and services",
    href: "/trading-supply",
    description: "Crude, refined products, gas, and execution infrastructure.",
    children: [
  {
    label: "Business solutions",
    href: "/trading-supply",
    description: "Structured physical supply, risk, and logistics solutions.",
  },
  {
    label: "Crude oil and feedstocks",
    href: "/trading-supply/crude-oil-feedstocks",
    description: "Crude oil, condensates, and refinery feedstocks.",
  },
  {
    label: "Refined products",
    href: "/trading-supply/refined-products",
    description: "Gasoline, Diesel/Gasoil, aviation fuel, and fuel oils.",
  },
  {
    label: "Logistics",
    href: "/trading-supply/infrastructure-logistics",
    description: "Storage, blending, shipping, and delivery governance.",
  },
],
  },
  {
    label: "Gas",
    href: "/gas",
    children: [
      {
        label: "Business solutions",
        href: "/gas",
        description: "Commercial participation across pipeline gas and LPG value chains.",
      },
      {
        label: "Gas products",
        href: "/gas/products",
        description: "Pipeline gas and LPG across key markets.",
      },
    ],
  },
  {
    label: "Projects",
    href: "/projects",
    description: "Infrastructure-led initiatives and development pipeline.",
    children: [
      { label: "Active initiatives", href: "/projects" },
      { label: "Development pipeline", href: "/projects/pipeline" },
    ],
  },
  {
    label: "Newsroom",
    href: "/newsroom",
    description: "Press releases, insights, and media resources.",
    children: [
      { label: "Press releases", href: "/newsroom?type=press" },
      { label: "Insights", href: "/newsroom?type=insight" },
      { label: "Media contacts", href: "/newsroom/media" },
    ],
  },
];

// “Majors-style” product taxonomy for Refined Products pages
export const refinedProductsTaxonomy = [
  {
    group: "Crude oil and feedstocks",
    items: [
      {
        name: "Crude Oil",
        description: "Major export grades and blends aligned with refinery and regional demand.",
      },
      {
        name: "Condensates",
        description: "Lean and rich condensates for splitting, petrochemical, and blending programs.",
      },
      {
        name: "Naphtha",
        description: "Straight-run and reformer naphtha for petrochemical and gasoline blending.",
      },
      {
        name: "Reformate",
        description: "High-octane reformate streams for premium gasoline pools.",
      },
    ],
  },
  {
    group: "Refined Products",
    items: [
      {
        name: "Gasoline",
        description: "Premium and regular mogas grades for wholesale and retail channels.",
      },
      {
        name: "Diesel/Gasoil",
        description: "Various gasoil grades for road, marine, and industrial segments.",
      },
      {
        name: "Aviation",
        description: "Jet A/A-1 and other jet fuels aligned with ASTM and DEF STAN requirements.",
      },
      {
        name: "Fuel oils",
        description: "From very light to heavy grades for bunkering, power generation, and industrial users.",
      },
    ],
  },
  {
    group: "Gas",
    items: [
      {
        name: "Natural Gas (Pipeline)",
        description: "Pipeline gas structures across hub-linked and oil-indexed contracts.",
      },
      {
        name: "Gas products",
        description: "Overview of LPG and pipeline-delivered natural gas participation.",
      },
      {
        name: "LPG (Propane / Butane)",
        description: "Propane and butane supply into distribution, retail, and petrochemical channels.",
      },
    ],
  },
  {
    group: "Logistics",
    items: [
      {
        name: "Storage",
        description: "Onshore tankage and in-terminal capacity managed under governance frameworks.",
      },
      {
        name: "Blending",
        description: "Physical blending programs with clear specification and quality controls.",
      },
      {
        name: "Shipping",
        description: "Voyage chartering, freight optimisation, and scheduling across basins.",
      },
      {
        name: "Delivery governance",
        description: "Demurrage, documentation, and handover protocol aligned with counterparties.",
      },
    ],
  },
];


export type NewsType = "press" | "insight";
export type NewsItem = {
  id: string;
  type: NewsType;
  title: string;
  date: string; // ISO
  excerpt: string;
  tags: string[];
  body: string[];
};

export const newsroom: NewsItem[] = [
  {
    id: "market-update-1",
    type: "insight",
    title: "Market Brief: Distillates and Freight Signals",
    date: "2025-12-15",
    excerpt:
      "A structured overview of key drivers shaping middle distillates, freight, and execution risk.",
    tags: ["Refined Products", "Logistics", "Risk"],
    body: [
      "Legacy Energies monitors the interaction between physical differentials, freight, and storage economics across key basins.",
      "Execution discipline and documented procedures remain essential during periods of rapid price discovery.",
      "This insight is illustrative and does not constitute an offer to buy or sell any commodity.",
    ],
  },
  {
    id: "press-1",
    type: "press",
    title: "Legacy Energies Expands Operations Platform",
    date: "2025-11-20",
    excerpt:
      "Strengthening process controls for physical trading, documentation, and counterparty onboarding.",
    tags: ["Company", "Ethics and compliance"],
    body: [
      "Legacy Energies continues to invest in operational resilience across the trade lifecycle, including documentation standards, counterparty onboarding, and logistics governance.",
      "This release is provided for information purposes only.",
    ],
  },
];
