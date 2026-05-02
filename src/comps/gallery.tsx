'use client';

import Link from 'next/link';
import { projects, type Project } from '@/data/projects.data';

// ── Icons ──────────────────────────────────────────────────────────────────
const ArrowUpRightIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="7" y1="17" x2="17" y2="7" />
        <polyline points="7 7 17 7 17 17" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

// ── Status badge ───────────────────────────────────────────────────────────
const statusStyles: Record<Project['status'], string> = {
    Live: 'bg-green-500/[0.08] border-green-500/20 text-green-600',
    'In Progress': 'bg-amber-500/[0.08] border-amber-500/20 text-amber-600',
    Archived: 'bg-black/[0.05] border-black/10 text-[#888]',
};
const statusDot: Record<Project['status'], string> = {
    Live: 'bg-green-500',
    'In Progress': 'bg-amber-400',
    Archived: 'bg-[#bbb]',
};

// ── Single card ────────────────────────────────────────────────────────────
function ProjectCard({ project, i }: { project: Project; i: number }) {
    const delay = `${i * 0.08}s`;

    return (
        <Link
            href={`/projects/${project.slug}`}
            className="group relative flex flex-col bg-white border border-black/[0.08] rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-black/[0.18] hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            style={{
                opacity: 0,
                animation: `fadeUp 0.6s ${delay} ease forwards`,
            }}
        >
            {/* Accent bar */}
            <div className="h-[3px] w-full" style={{ background: project.accentHex }} />

            {/* Card body */}
            <div className="flex flex-col flex-1 p-6 gap-5">

                {/* Top row: index + status */}
                <div className="flex items-center justify-between">
                    <span
                        className="text-[11px] text-[#bbb]"
                        style={{ fontFamily: "'DM Mono', monospace", letterSpacing: '0.06em' }}
                    >
                        {project.index}
                    </span>
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10.5px] font-medium ${statusStyles[project.status]}`}>
                        <span className={`w-[5px] h-[5px] rounded-full ${statusDot[project.status]}`} />
                        {project.status}
                    </span>
                </div>

                {/* Title + tagline */}
                <div>
                    <h3
                        className="text-[#0f0f0f] mb-1.5 leading-tight tracking-tight"
                        style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px' }}
                    >
                        {project.title}
                    </h3>
                    <p className="text-[13px] text-[#888] leading-snug">{project.tagline}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="px-2.5 py-[4px] rounded-md bg-black/[0.04] border border-black/[0.06] text-[11px] text-[#666]"
                            style={{ fontFamily: "'DM Mono', monospace" }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Stack – truncated */}
                <div className="flex flex-wrap gap-1">
                    {project.stack.slice(0, 4).map((s) => (
                        <span key={s} className="text-[11px] text-[#aaa]" style={{ fontFamily: "'DM Mono', monospace" }}>
                            {s}{project.stack.indexOf(s) < Math.min(project.stack.length, 4) - 1 ? ' ·' : ''}
                        </span>
                    ))}
                    {project.stack.length > 4 && (
                        <span className="text-[11px] text-[#ccc]" style={{ fontFamily: "'DM Mono', monospace" }}>
                            +{project.stack.length - 4} more
                        </span>
                    )}
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Footer row */}
                <div className="flex items-center justify-between pt-4 border-t border-black/[0.06]">
                    <span className="text-[11px] text-[#bbb]" style={{ fontFamily: "'DM Mono', monospace" }}>
                        {project.year} · {project.role}
                    </span>
                    <span className="flex items-center gap-1 text-[12px] font-medium text-[#555] group-hover:text-[#111] transition-colors">
                        View case
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                            <ArrowUpRightIcon />
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    );
}

// ── Section ────────────────────────────────────────────────────────────────
export default function ProjectsGallery() {
    return (
        <section
            id="projects"
            className="relative pt-28 px-6"
            style={{ fontFamily: "'Instrument Sans', sans-serif", background: '#fafaf8' }}
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            />

            <div className="relative z-10 max-w-[1100px] mx-auto">

                {/* Section header */}
                <div
                    className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
                    style={{ opacity: 0, animation: 'fadeUp 0.6s ease forwards' }}
                >
                    <div>
                        <div
                            className="inline-flex items-center gap-2 mb-4 text-[11px] text-[#999] uppercase"
                            style={{ fontFamily: "'DM Mono', monospace", letterSpacing: '0.15em' }}
                        >
                            <span className="w-7 h-px bg-[#999]" />
                            Selected work
                        </div>
                        <h2
                            className="text-[#0f0f0f] leading-[1.05] tracking-tight"
                            style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(36px, 4vw, 52px)' }}
                        >
                            Things I&apos;ve<br />
                            <em style={{ fontStyle: 'italic', color: '#444' }}>built & shipped</em>
                        </h2>
                    </div>

                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/[0.13] rounded-[10px] text-[13px] font-medium text-[#555] hover:text-[#111] hover:bg-black/[0.04] transition-all self-start sm:self-auto"
                    >
                        All projects
                        <ArrowRightIcon />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.slug} project={project} i={i} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div
                    className="mt-16 flex justify-center"
                    style={{ opacity: 0, animation: `fadeUp 0.6s ${projects.length * 0.08 + 0.1}s ease forwards` }}
                >
                    <p className="text-[13px] text-[#aaa] text-center" style={{ fontFamily: "'DM Mono', monospace" }}>
                        More on{' '}
                        <a
                            href={process.env.GITHUB_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#555] hover:text-[#111] underline underline-offset-2 transition-colors"
                        >
                            GitHub →
                        </a>
                    </p>
                </div>
            </div>

            <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}