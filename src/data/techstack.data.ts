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
    description: "Building responsive and interactive user experiences",
    items: [
      {
        name: "React",
        icon: "devicon-react-original",
        proficiency: "Advanced",
        years: 2,
        note: "Primary UI library",
      },
      {
        name: "Next.js",
        icon: "devicon-nextjs-plain",
        proficiency: "Advanced",
        years: 2,
        note: "Full-stack React framework",
      },
      {
        name: "TypeScript",
        icon: "devicon-typescript-plain",
        proficiency: "Intermediate",
        years: 1.5,
        note: "Type-safe application development",
      },
      {
        name: "JavaScript",
        icon: "devicon-javascript-plain",
        proficiency: "Advanced",
        years: 3,
        note: "Core web development",
      },
      {
        name: "Tailwind CSS",
        icon: "devicon-tailwindcss-original",
        proficiency: "Advanced",
        years: 2,
        note: "Utility-first styling",
      },
      {
        name: "Zustand",
        icon: "devicon-react-original",
        proficiency: "Intermediate",
        years: 1,
        note: "Client-side state management",
      },
    ],
  },

  {
    id: "backend",
    label: "Backend",
    description: "Designing APIs, services, and application logic",
    items: [
      {
        name: "Node.js",
        icon: "devicon-nodejs-plain",
        proficiency: "Advanced",
        years: 2,
        note: "Backend runtime",
      },
      {
        name: "Express.js",
        icon: "devicon-express-original",
        proficiency: "Advanced",
        years: 2,
        note: "REST API development",
      },
      {
        name: "FastAPI",
        icon: "devicon-fastapi-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "Python API development",
      },
      {
        name: "Flask",
        icon: "devicon-flask-original",
        proficiency: "Intermediate",
        years: 1,
        note: "Lightweight Python APIs",
      },
      {
        name: "Python",
        icon: "devicon-python-plain",
        proficiency: "Advanced",
        years: 3,
        note: "Data science, automation & backend",
      },
    ],
  },

  {
    id: "data-ai",
    label: "Data & AI",
    description: "Data analysis, machine learning, and AI-powered applications",
    items: [
      {
        name: "Pandas",
        icon: "devicon-pandas-plain",
        proficiency: "Advanced",
        years: 1,
        note: "Data cleaning & analysis",
      },
      {
        name: "NumPy",
        icon: "devicon-numpy-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "Numerical computing",
      },
      {
        name: "Scikit-learn",
        icon: "devicon-scikitlearn-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "Machine learning workflows",
      },
      {
        name: "Jupyter",
        icon: "devicon-jupyter-plain",
        proficiency: "Advanced",
        years: 1,
        note: "Data science experimentation",
      },
      {
        name: "Ollama",
        icon: "devicon-ollama-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "Local LLM integration",
      },
    ],
  },

  {
    id: "database",
    label: "Database & BaaS",
    description: "Managing application data and cloud-backed storage",
    items: [
      {
        name: "PostgreSQL",
        icon: "devicon-postgresql-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "Relational database",
      },
      {
        name: "MongoDB",
        icon: "devicon-mongodb-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "NoSQL document database",
      },
      {
        name: "Firebase",
        icon: "devicon-firebase-plain",
        proficiency: "Advanced",
        years: 1.5,
        note: "Authentication & cloud services",
      },
      {
        name: "Firestore",
        icon: "devicon-firebase-plain",
        proficiency: "Advanced",
        years: 1.5,
        note: "Cloud NoSQL database",
      },
      {
        name: "Supabase",
        icon: "devicon-supabase-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "Postgres BaaS & storage",
      },
    ],
  },

  {
    id: "apis-tools",
    label: "APIs & Developer Tools",
    description: "Tools for building, testing, and integrating applications",
    items: [
      {
        name: "REST APIs",
        icon: "devicon-fastapi-plain",
        proficiency: "Advanced",
        years: 2,
        note: "API design & integration",
      },
      {
        name: "OpenAPI",
        icon: "devicon-swagger-plain",
        proficiency: "Intermediate",
        years: 1,
        note: "API specification & testing",
      },
      {
        name: "Postman",
        icon: "devicon-postman-plain",
        proficiency: "Advanced",
        years: 2,
        note: "API testing & debugging",
      },
      {
        name: "Git",
        icon: "devicon-git-plain",
        proficiency: "Advanced",
        years: 3,
        note: "Version control",
      },
      {
        name: "GitHub",
        icon: "devicon-github-original",
        proficiency: "Advanced",
        years: 3,
        note: "Source control & collaboration",
      },
      {
        name: "VS Code",
        icon: "devicon-vscode-plain",
        proficiency: "Advanced",
        years: 3,
        note: "Primary development environment",
      },
    ],
  },

  {
    id: "deployment",
    label: "Deployment & Cloud",
    description: "Deploying and running applications",
    items: [
      {
        name: "Vercel",
        icon: "devicon-vercel-original",
        proficiency: "Advanced",
        years: 2,
        note: "Frontend & Next.js deployment",
      },
      {
        name: "Docker",
        icon: "devicon-docker-plain",
        proficiency: "Learning",
        years: 1,
        note: "Containerization",
      },
      {
        name: "Linux",
        icon: "devicon-linux-plain",
        proficiency: "Intermediate",
        years: 2,
        note: "Development & server environment",
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
