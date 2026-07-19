export type ProjectTheme = {
  brand: string;
  motif: string;
  bg: string;
  bg2: string;
  ink: string;
  accent: string;
  tagline: string;
};

export type Project = {
  id: string;
  title: string;
  role: string;
  summary: string;
  value: string;
  stack: string[];
  href: string | null;
  live: boolean;
  inScene: boolean;
  badge: string;
  color: string;
  position: [number, number, number];
  theme: ProjectTheme;
};
