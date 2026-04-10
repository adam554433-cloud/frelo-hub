export type AppStatus = "live" | "beta" | "idea";

export interface AppCard {
  id: string;
  name: string;
  tagline: string;
  url: string;
  status: AppStatus;
  icon: string;
  accent?: string;
}

export interface LinkItem {
  name: string;
  url: string;
  category: "brand" | "ops" | "dev" | "social";
}

export const apps: AppCard[] = [
  {
    id: "creative-hub",
    name: "Creative Hub",
    tagline: "AI-generated static ads, B-roll & avatar videos",
    url: "https://ai-studio-vert-delta.vercel.app",
    status: "live",
    icon: "Sparkles",
  },
  {
    id: "influencer-hub",
    name: "Influencer Hub",
    tagline: "Creator community & campaign management",
    url: "https://frelo-influencer-hub.vercel.app",
    status: "live",
    icon: "Users",
  },
  {
    id: "customer-success",
    name: "Customer Success",
    tagline: "Retention, feedback & customer insights",
    url: "https://frelo-customer-success.vercel.app",
    status: "live",
    icon: "Heart",
  },
  {
    id: "lander-hub",
    name: "Lander Hub",
    tagline: "Landing pages & A/B variants",
    url: "https://lander-app-pearl.vercel.app",
    status: "live",
    icon: "LayoutTemplate",
  },
  {
    id: "intelligence",
    name: "Intelligence",
    tagline: "Brand brain — ask anything, test hypotheses, discover avatars",
    url: "https://frelo-intelligence.vercel.app",
    status: "beta",
    icon: "Brain",
  },
  {
    id: "research-hub",
    name: "Research Hub",
    tagline: "Legacy market research tool (being replaced by Intelligence)",
    url: "https://frelo-research-hub-adam554433-5422s-projects.vercel.app",
    status: "beta",
    icon: "Microscope",
  },
];

export const comingSoon: AppCard[] = [
  {
    id: "video-studio",
    name: "AI Video Studio",
    tagline: "Multi-scene videos combining avatar + B-roll + product",
    url: "#",
    status: "idea",
    icon: "Clapperboard",
  },
  {
    id: "analytics-hub",
    name: "Analytics Hub",
    tagline: "Unified dashboard across all frelo tools",
    url: "#",
    status: "idea",
    icon: "BarChart3",
  },
];

export const links: LinkItem[] = [
  { name: "tryfrelo.com", url: "https://tryfrelo.com", category: "brand" },
  { name: "Brand Guidelines", url: "#", category: "brand" },
  { name: "GitHub", url: "https://github.com/adam554433-cloud", category: "dev" },
  { name: "Vercel Dashboard", url: "https://vercel.com/adam554433-5422s-projects", category: "dev" },
  { name: "Figma", url: "#", category: "brand" },
  { name: "Notion", url: "#", category: "ops" },
];
