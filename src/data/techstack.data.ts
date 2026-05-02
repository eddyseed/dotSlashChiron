export type Proficiency = "Expert" | "Advanced" | "Intermediate" | "Learning";

export interface TechItem {
  name: string;
  icon: string; // Devicon class  e.g. "devicons-react-original"
  proficiency: Proficiency;
  years: number;
  note?: string; // short tooltip / hover note
}

export interface TechCategory {
  id: string;
  label: string;
  description: string;
  items: TechItem[];
}

export const techCategories: TechCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "What users see and interact with",
    items: [
      {
        name: "React",
        icon: "devicon-react-original",
        proficiency: "Expert",
        years: 3,
        note: "Primary UI library",
      },
      {
        name: "Next.js",
        icon: "devicon-nextjs",
        proficiency: "Expert",
        years: 2.5,
        note: "SSR & full-stack apps",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        proficiency: "Intermediate",
        years: 1.5,
        note: "Typed everything",
      },
      {
        name: "Tailwind",
        icon: "devicon-tailwindcss-plain",
        proficiency: "Expert",
        years: 4,
        note: "Utility-first CSS",
      },
      {
        name: "Framer",
        icon: "devicon-framermotion-original",
        proficiency: "Intermediate",
        years: 1,
        note: "Animations & gestures",
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description: "The logic & APIs under the hood",
    items: [
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        proficiency: "Expert",
        years: 3,
        note: "Primary runtime",
      },
      {
        name: "Express",
        icon: "devicon-express-original",
        proficiency: "Expert",
        years: 3,
        note: "REST APIs",
      },
      {
        name: "Nest",
        icon: "devicon-nestjs-plain",
        proficiency: "Intermediate",
        years: 2,
        note: "High-perf HTTP",
      },
      {
        name: "Python",
        icon: "devicon-python-plain",
        proficiency: "Advanced",
        years: 5,
        note: "Scripts & ML glue",
      },
    ],
  },
  {
    id: "database",
    label: "Database",
    description: "Storing and querying data reliably",
    items: [
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
        proficiency: "Advanced",
        years: 2.5,
        note: "Go-to relational DB",
      },
      {
        name: "MongoDB",
        icon: "devicon-mongodb-plain",
        proficiency: "Advanced",
        years: 2,
        note: "Document store",
      },
      {
        name: "Redis",
        icon: "devicon-redis-plain",
        proficiency: "Intermediate",
        years: 1.5,
        note: "Cache & pub/sub",
      },
      {
        name: "Prisma",
        icon: "devicon-prisma-original",
        proficiency: "Advanced",
        years: 1.5,
        note: "Type-safe ORM",
      },
      {
        name: "Supabase",
        icon: "devicon-supabase-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "BaaS / Postgres cloud",
      },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    description: "Deploying and scaling with confidence",
    items: [
      {
        name: "Docker",
        icon: "devicon-docker-plain",
        proficiency: "Learning",
        years: 1,
        note: "Containerization",
      },
      {
        name: "GitHub Actions",
        icon: "devicon-github-original",
        proficiency: "Advanced",
        years: 2,
        note: "CI/CD pipelines",
      },
      {
        name: "Vercel",
        icon: "devicon-vercel-original",
        proficiency: "Expert",
        years: 2,
        note: "Next.js deployments",
      },
      {
        name: "Linux",
        icon: "devicon-linux-plain",
        proficiency: "Intermediate",
        years: 5,
        note: "Server admin & shell",
      },
    ],
  },
  {
    id: "tools",
    label: "Tools & Workflow",
    description: "Day-to-day gear that keeps me productive",
    items: [
      {
        name: "Git",
        icon: "devicon-git-plain",
        proficiency: "Expert",
        years: 3,
        note: "Version control",
      },
      {
        name: "VS Code",
        icon: "devicon-vscode-plain",
        proficiency: "Expert",
        years: 3,
        note: "Primary editor",
      },
      {
        name: "Figma",
        icon: "devicon-figma-plain",
        proficiency: "Intermediate",
        years: 1.5,
        note: "Design handoff",
      },
      {
        name: "Postman",
        icon: "devicon-postman-plain",
        proficiency: "Advanced",
        years: 2,
        note: "API testing",
      },
      {
        name: "Jira",
        icon: "devicon-jira-plain",
        proficiency: "Advanced",
        years: 1.5,
        note: "Project tracking",
      },
    ],
  },
];

// ─── Footer Data ────────────────────────────────────────────────────

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export const footerColumns: FooterColumn[] = [
  {
    heading: "Navigate",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Tech Stack", href: "#tech-stack" },
      { label: "Certificates", href: "#certificates" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "GitHub", href: process.env.NEXT_PUBLIC_GITHUB_LINK || "#" },
      { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_LINK || "#" },
      {
        label: "Email",
        href: `mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`,
      },
    ],
  },
  {
    heading: "Work",
    links: [
      { label: "Resume (PDF)", href: "/resume.pdf" },
      { label: "Case Studies", href: "#projects" },
      {
        label: "Open Source",
        href: process.env.NEXT_PUBLIC_GITHUB_LINK || "#",
      },
      { label: "Blog", href: "/blog" },
    ],
  },
];

export const footerMeta = {
  tagline: "Building elegant web experiences — one commit at a time.",
  copyright: `© ${new Date().getFullYear()} Rishabh Jain. All rights reserved.`,
  statusLabel: "Open to work",
  madeWith: "Next.js · TypeScript · Tailwind",
};
