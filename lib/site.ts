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
    description: "Who we are, what we do, and how we operate.",
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
    description: "LPG and pipeline natural gas participation.",
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


export type NewsType = "press" | "news" | "insight";
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
    title: "Delivery governance in volatile markets",
    date: "2025-12-15",
    excerpt:
      "A practical view of how documentation, scheduling discipline, and escalation paths support consistent outcomes under volatility.",
    tags: ["Execution", "Logistics", "Risk"],
    body: [
      "In physical markets, outcomes are frequently determined by operational detail rather than headline prices. Delivery governance, documentation standards, and role clarity reduce avoidable errors during fast moving conditions.",
      "We treat scheduling, nominations, and interface readiness as core controls. Where third parties are involved, accountability and escalation paths are defined in advance.",
      "This insight is provided for general information only. It does not constitute an offer, solicitation, or investment advice.",
    ],
  },
  {
    id: "insight-2",
    type: "insight",
    title: "LPG handling, interfaces, and operational readiness",
    date: "2025-12-05",
    excerpt:
      "Why ignition control, pressure containment, and terminal procedures should be treated as part of day to day execution, not add ons.",
    tags: ["LPG", "HSSE", "Operations"],
    body: [
      "LPG participation requires strict attention to ignition sources, grounding and bonding, pressure containment, and ventilation and confined space awareness. These are operational fundamentals.",
      "Execution depends on clear procedures and competent service providers at each interface, including terminals, vessels, trucks, and documentation handoffs.",
      "This note is general and non exhaustive. Participants should follow applicable laws, terminal rules, and qualified operator guidance.",
    ],
  },
  {
    id: "insight-3",
    type: "insight",
    title: "Counterparty diligence and sanctions screening as execution controls",
    date: "2025-11-28",
    excerpt:
      "In physical markets, KYC and sanctions checks are not back office tasks. They shape what can be executed, when, and with whom.",
    tags: ["Compliance", "Risk", "Governance"],
    body: [
      "Counterparty diligence supports reliable execution by reducing exposure to fraud, misrepresentation, and regulatory breach. Screening and documentation standards also inform operational readiness.",
      "Disciplined processes include role separation, approvals, and recorded decisions. Exceptions are managed through documented escalation and clear mandates.",
      "This insight is for information only and should not be treated as legal advice.",
    ],
  },
  {
    id: "insight-4",
    type: "insight",
    title: "Pipeline delivered natural gas, nominations, and delivery points",
    date: "2025-11-10",
    excerpt:
      "A simple framework for thinking about nominated volumes, delivery points, and operational constraints without turning Insights into market news.",
    tags: ["Natural Gas", "Pipeline", "Operations"],
    body: [
      "Pipeline natural gas participation is shaped by nominated volumes, delivery point constraints, and the operational rules of the relevant network. Interface detail matters.",
      "Reliable outcomes depend on scheduling discipline, confirmation procedures, and coordination with qualified operators and counterparties.",
      "This insight is general and does not address specific assets, regions, or commercial terms.",
    ],
  },
  {
    id: "news-1",
    type: "news",
    title: "Legacy Energies publishes updated gas and logistics pages",
    date: "2026-02-01",
    excerpt:
      "New ‘Gas’ and ‘Gas products’ pages outline LPG and pipeline natural gas participation, operating controls, and safety-first handling standards.",
    href: "/newsroom/news/legacy-energies-publishes-updated-gas-and-logistics-pages",
    tags: ["Company update", "Operations"],
  },
  {
    id: "news-2",
    type: "news",
    title: "Website navigation refined for consistency across sections",
    date: "2026-02-01",
    excerpt:
      "Menu structure and mega menus were aligned across About us, Products and services, Gas, and Newsroom to improve clarity and usability.",
    href: "/newsroom/news/website-navigation-refined-for-consistency",
    tags: ["Digital"],
  },
  {
    id: "news-3",
    type: "news",
    title: "Legacy Energies expands newsroom with Insights and Press releases",
    date: "2026-02-01",
    excerpt:
      "The Newsroom now separates market commentary (Insights) from formal company communications (Press releases) and operational updates (News).",
    href: "/newsroom/news/legacy-energies-expands-newsroom-categories",
    tags: ["Communications"],
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
  {
    id: "press-2",
    type: "press",
    title: "Legacy Energies Updates Governance and Policy Coverage",
    date: "2025-10-22",
    excerpt:
      "Publishing updated governance language and clearer policy coverage aligned with practical operational risks.",
    tags: ["Company", "Governance"],
    body: [
      "Legacy Energies has updated governance and policy coverage language to better reflect practical responsibilities across physical market participation.",
      "The update supports consistent decision making, documentation discipline, and role clarity across execution.",
      "This release is provided for information purposes only.",
    ],
  },
];
