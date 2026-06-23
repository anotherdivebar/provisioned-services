export const SITE = {
  name: "Provisioned Services, Inc.",
  shortName: "Provisioned Services",
  tagline: "Facility Support for Brands That Can't Afford Downtime.",
  email: "info@provisionedservices.com",
  phone: "(555) 000-0000",
} as const;

export const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/projects", label: "Projects" },
  { href: "/vendors", label: "Vendors" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const TRUST_STRIP_ITEMS = [
  "Facility maintenance",
  "Emergency repairs",
  "Rollouts & installations",
  "Cooler/freezer work",
  "Flooring solutions",
  "Vendor coordination",
] as const;

export const HERO_TRUST_POINTS = [
  "Multi-site facility support",
  "Restaurant & retail experience",
  "Emergency response",
  "Project coordination",
  "Vendor network support",
] as const;

export const WHAT_WE_DO = [
  {
    title: "Restaurant Facility Support",
    description:
      "Maintenance, repairs, and project coordination built for active dining environments.",
    icon: "utensils",
  },
  {
    title: "Retail Facility Support",
    description:
      "Responsive support for high-traffic retail locations that need minimal disruption.",
    icon: "store",
  },
  {
    title: "Cooler / Freezer Work",
    description:
      "Repairs, retrofits, and restoration coordination to protect temperature-sensitive operations.",
    icon: "thermometer",
  },
  {
    title: "Flooring Solutions",
    description:
      "Replacement and refresh work planned around operating hours and customer flow.",
    icon: "layers",
  },
  {
    title: "Installation & Rollouts",
    description:
      "Disciplined execution for equipment, fixtures, and multi-location rollout programs.",
    icon: "package",
  },
  {
    title: "Crisis / Rapid Response",
    description:
      "Fast coordination when a location cannot wait for a standard maintenance window.",
    icon: "zap",
  },
  {
    title: "Day-to-Day Maintenance",
    description:
      "Reliable facility upkeep across single sites and multi-location portfolios.",
    icon: "wrench",
  },
  {
    title: "Emergency Repairs",
    description:
      "Clear intake, dispatch, and closeout when urgent repairs threaten operations.",
    icon: "alert-circle",
  },
] as const;

export const INDUSTRIES = [
  {
    slug: "restaurants",
    title: "Restaurants",
    description:
      "Support for dining rooms, kitchens, coolers, and front-of-house environments.",
    painPoints: [
      "Equipment failures during service hours",
      "Cooler and refrigeration downtime",
      "Multi-unit consistency across locations",
      "Limited maintenance windows",
    ],
    howWeHelp:
      "Provisioned coordinates responsive repairs, planned maintenance, and rollout work with clear communication and minimal disruption to guest-facing operations.",
    services: [
      "Emergency repair coordination",
      "Cooler/freezer support",
      "Kitchen and dining maintenance",
      "Rollout and refresh projects",
    ],
  },
  {
    slug: "retail",
    title: "Retail",
    description:
      "Facility support for storefronts, back-of-house, and customer-facing spaces.",
    painPoints: [
      "High-traffic wear and urgent repairs",
      "Flooring and fixture refresh needs",
      "After-hours and weekend constraints",
      "Brand standards across locations",
    ],
    howWeHelp:
      "We help retail operators keep locations open and presentable with disciplined project planning and reliable service partner coordination.",
    services: [
      "Flooring solutions",
      "Emergency repairs",
      "Installation support",
      "Site refreshes and reimages",
    ],
  },
  {
    slug: "fitness-clubs",
    title: "Fitness Clubs",
    description:
      "Maintenance and repair support for active, equipment-heavy environments.",
    painPoints: [
      "HVAC and lighting reliability",
      "Flooring wear in high-use areas",
      "Locker room and wet-area maintenance",
      "Limited downtime tolerance",
    ],
    howWeHelp:
      "Provisioned supports fitness operators with practical maintenance coordination and responsive repair dispatch when member experience is on the line.",
    services: [
      "HVAC coordination",
      "Flooring replacement",
      "General maintenance",
      "Emergency response",
    ],
  },
  {
    slug: "veterinary-clinics",
    title: "Veterinary Clinics",
    description:
      "Facility support for clinical, reception, and treatment environments.",
    painPoints: [
      "Plumbing and HVAC reliability",
      "Clean, professional facility standards",
      "Equipment and exam room upkeep",
      "Unexpected repair urgency",
    ],
    howWeHelp:
      "We coordinate repairs and maintenance with respect for clinical schedules and the need for a professional, dependable facility environment.",
    services: [
      "Plumbing coordination",
      "General repairs",
      "Lighting and electrical support",
      "Facility refresh work",
    ],
  },
  {
    slug: "franchise-groups",
    title: "Franchise Groups",
    description:
      "Consistent facility support across franchisee networks and brand standards.",
    painPoints: [
      "Variable vendor quality across markets",
      "Rollout consistency",
      "Centralized reporting needs",
      "Franchisee communication gaps",
    ],
    howWeHelp:
      "Provisioned acts as one accountable partner to coordinate service providers, maintain clear scopes, and support brand-consistent outcomes.",
    services: [
      "Rollout coordination",
      "Vendor network management",
      "Multi-site maintenance",
      "Project closeout and QA",
    ],
  },
  {
    slug: "multi-site-operators",
    title: "Multi-Site Operators",
    description:
      "National and regional support for operators managing many locations.",
    painPoints: [
      "Fragmented vendor relationships",
      "Inconsistent response times",
      "Complex project visibility",
      "Operational disruption risk",
    ],
    howWeHelp:
      "We provide disciplined intake-to-closeout coordination so operators have one partner accountable for facility work across their portfolio.",
    services: [
      "Portfolio maintenance support",
      "Emergency repair coordination",
      "Installation and rollout programs",
      "Vendor coordination",
    ],
  },
] as const;

export const WHY_PROVISIONED = [
  {
    title: "One accountable partner",
    description:
      "A single point of coordination instead of juggling multiple vendors and follow-ups.",
  },
  {
    title: "Fast response",
    description:
      "Structured intake and dispatch when locations need action, not another ticket in a queue.",
  },
  {
    title: "Clear communication",
    description:
      "Scopes, timelines, and status updates that operations teams can act on.",
  },
  {
    title: "Disciplined project coordination",
    description:
      "From intake through validation and closeout, work stays organized and accountable.",
  },
  {
    title: "Reliable service-provider relationships",
    description:
      "A vetted vendor network aligned to quality, responsiveness, and professional standards.",
  },
  {
    title: "Reduced operational disruption",
    description:
      "Planning and execution built for brands that cannot afford extended downtime.",
  },
  {
    title: "Practical support from intake to closeout",
    description:
      "Real-world facility coordination—not generic handyman promises.",
  },
  {
    title: "Built for active business environments",
    description:
      "Experience supporting restaurants, retail, and multi-site operators under pressure.",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Intake",
    description:
      "We capture location details, urgency, and scope so nothing critical is missed.",
  },
  {
    step: "02",
    title: "Scope",
    description:
      "Clear expectations are defined before dispatch so work starts with alignment.",
  },
  {
    step: "03",
    title: "Dispatch",
    description:
      "The right service partner is assigned based on trade, coverage, and urgency.",
  },
  {
    step: "04",
    title: "Execute",
    description:
      "Work proceeds with coordination, updates, and attention to site constraints.",
  },
  {
    step: "05",
    title: "Validate",
    description:
      "Completion is reviewed against scope and quality expectations.",
  },
  {
    step: "06",
    title: "Closeout",
    description:
      "Documentation and follow-up ensure the location is ready to operate.",
  },
] as const;

export const CASE_STUDIES = [
  {
    id: "restaurant-grand-opening",
    title: "Restaurant Grand Opening Support",
    projectType: "Rollout / Opening Support",
    industry: "Restaurants",
    challenge:
      "A new location needed final punch-list work, equipment checks, and vendor coordination before opening day.",
    solution:
      "Provisioned coordinated trades across HVAC, plumbing, and general repairs with a disciplined closeout checklist.",
    outcome:
      "The location opened on schedule with outstanding items resolved and clear documentation for the operator.",
  },
  {
    id: "retail-emergency-repair",
    title: "Emergency Repair for a High-Traffic Retail Location",
    projectType: "Emergency Repair",
    industry: "Retail",
    challenge:
      "A critical facility issue threatened store operations during peak traffic hours.",
    solution:
      "Rapid intake, scoped dispatch, and after-hours execution minimized customer impact.",
    outcome:
      "The location returned to full operation with reduced downtime and clear communication throughout.",
  },
  {
    id: "multi-location-refresh",
    title: "Multi-Location Refresh Program",
    projectType: "Refresh Program",
    industry: "Multi-Site Operators",
    challenge:
      "An operator needed consistent refresh work across multiple locations without disrupting daily business.",
    solution:
      "Provisioned sequenced trades, standardized scopes, and coordinated scheduling by location.",
    outcome:
      "Locations were refreshed on plan with consistent quality and manageable operational disruption.",
  },
  {
    id: "flooring-replacement",
    title: "Flooring Replacement with Minimal Disruption",
    projectType: "Flooring",
    industry: "Retail",
    challenge:
      "Worn flooring needed replacement in an active retail environment with limited closure windows.",
    solution:
      "Phased installation planning, after-hours work, and clear site protection protocols.",
    outcome:
      "New flooring was installed with minimal impact on store hours and customer flow.",
  },
  {
    id: "cooler-freezer-restoration",
    title: "Cooler/Freezer Repair or Restoration Support",
    projectType: "Refrigeration",
    industry: "Restaurants",
    challenge:
      "Temperature-sensitive equipment failure created immediate operational risk.",
    solution:
      "Emergency coordination with refrigeration specialists and follow-through to validated closeout.",
    outcome:
      "Equipment was restored and the location maintained product safety and service continuity.",
  },
  {
    id: "installation-rollout",
    title: "Installation or Rollout Project",
    projectType: "Installation / Rollout",
    industry: "Franchise Groups",
    challenge:
      "A franchise group required fixture and equipment installations across new and existing units.",
    solution:
      "Provisioned managed vendor assignments, scheduling, and quality validation across sites.",
    outcome:
      "Installations completed with consistent execution and accountable project coordination.",
  },
  {
    id: "retail-reimage",
    title: "Retail Reimage or Rollout Support",
    projectType: "Reimage / Rollout",
    industry: "Retail",
    challenge:
      "A reimage program required coordinated trades across branding, fixtures, and facility updates.",
    solution:
      "Scoped work packages, sequenced trades, and closeout validation per location.",
    outcome:
      "Locations met brand standards on schedule with organized communication to the operator.",
  },
  {
    id: "veterinary-facility-repair",
    title: "Veterinary Clinic Facility Repair",
    projectType: "Facility Repair",
    industry: "Veterinary Clinics",
    challenge:
      "An urgent plumbing issue affected clinic operations and patient scheduling.",
    solution:
      "Fast dispatch and professional repair coordination with minimal clinic disruption.",
    outcome:
      "The clinic returned to normal operations with the repair validated and documented.",
  },
] as const;

export const SERVICES = [
  {
    slug: "restaurant-facility-support",
    title: "Restaurant Facility Support",
    description:
      "Maintenance, repairs, and project coordination for kitchens, dining areas, coolers, and back-of-house environments.",
  },
  {
    slug: "retail-facility-support",
    title: "Retail Facility Support",
    description:
      "Responsive facility support for storefronts and back-of-house spaces that need to stay open and presentable.",
  },
  {
    slug: "cooler-freezer",
    title: "Cooler/Freezer Remodels, Retrofits, Repairs & Restoration",
    description:
      "Coordination for refrigeration work that protects product safety and operational continuity.",
  },
  {
    slug: "flooring",
    title: "Flooring Solutions",
    description:
      "Replacement and refresh projects planned around operating constraints and customer flow.",
  },
  {
    slug: "installations",
    title: "Installations",
    description:
      "Equipment, fixture, and specialty installation support with clear scope and accountable execution.",
  },
  {
    slug: "rollouts",
    title: "Rollouts",
    description:
      "Multi-location rollout coordination with consistent standards and disciplined closeout.",
  },
  {
    slug: "remodels-refreshes",
    title: "Remodels and Refreshes",
    description:
      "Refresh and remodel support designed to minimize disruption in active business environments.",
  },
  {
    slug: "day-to-day-maintenance",
    title: "Day-to-Day Maintenance",
    description:
      "Reliable upkeep across single sites and multi-location portfolios.",
  },
  {
    slug: "emergency-repairs",
    title: "Emergency Repairs",
    description:
      "Urgent repair coordination when downtime directly impacts revenue and operations.",
  },
  {
    slug: "crisis-rapid-response",
    title: "Crisis / Rapid Response",
    description:
      "Accelerated intake and dispatch when standard maintenance timelines are not an option.",
  },
  {
    slug: "vendor-coordination",
    title: "Vendor Coordination",
    description:
      "One accountable partner managing service providers, scopes, and follow-through.",
  },
  {
    slug: "project-management",
    title: "Project Management",
    description:
      "Structured coordination from intake through validation and closeout.",
  },
  {
    slug: "quality-assurance-closeout",
    title: "Quality Assurance and Closeout",
    description:
      "Completion review, documentation, and follow-up so work meets expectations.",
  },
] as const;

export const TRADE_CARDS = [
  "HVAC coordination",
  "Electrical",
  "Plumbing",
  "Lighting",
  "Flooring",
  "Doors & hardware",
  "Painting",
  "General repairs",
  "Exterior maintenance",
  "Foodservice equipment support",
  "Cooler / freezer support",
  "Signage coordination",
  "Site refreshes",
  "Carpentry",
  "Roofing coordination",
  "Punch list work",
] as const;

export const VENDOR_TRADES = [
  "HVAC",
  "Electrical",
  "Plumbing",
  "Lighting",
  "Flooring",
  "Doors / hardware",
  "Painting",
  "General maintenance",
  "Carpentry",
  "Roofing",
  "Exterior maintenance",
  "Foodservice equipment",
  "Refrigeration / cooler / freezer",
  "Signage",
  "Remodels / refreshes",
  "Emergency repairs",
  "Installations",
  "Rollouts",
  "Other",
] as const;

export const BUSINESS_TYPES = [
  "Corporation",
  "LLC",
  "Sole Proprietor",
  "Partnership",
  "Other",
] as const;

export const URGENCY_OPTIONS = [
  "Emergency",
  "This week",
  "This month",
  "Planning ahead",
] as const;

export const INDUSTRY_OPTIONS = [
  "Restaurants",
  "Retail",
  "Fitness clubs",
  "Veterinary clinics",
  "Franchise groups",
  "Multi-site operators",
  "Other",
] as const;

export const FAQ_ITEMS = [
  {
    question: "What types of facilities does Provisioned support?",
    answer:
      "Provisioned supports restaurants, retail locations, fitness clubs, veterinary clinics, franchise groups, and multi-site commercial operators.",
  },
  {
    question: "Does Provisioned handle emergency repairs?",
    answer:
      "Yes. We coordinate emergency and rapid-response repairs with structured intake, dispatch, and closeout.",
  },
  {
    question: "Can Provisioned support multi-location projects?",
    answer:
      "Yes. We coordinate maintenance, rollouts, refreshes, and repair work across multi-site portfolios.",
  },
  {
    question: "How do I join the Provisioned vendor network?",
    answer:
      "Service providers can apply through our vendor application form. Our team reviews submissions and follows up when services align with current client needs.",
  },
] as const;
