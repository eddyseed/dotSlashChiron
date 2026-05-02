'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { projects, type Project } from '@/data/projects.data';
import { use, useState } from 'react';

// ── Icons ──────────────────────────────────────────────────────────────────
const ArrowLeftIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
);
const ArrowUpRightIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
    </svg>
);
const GithubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);
const CloseIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);
const ChevronLeftIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <polyline points="15 18 9 12 15 6" />
    </svg>
);
const ChevronRightIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <polyline points="9 18 15 12 9 6" />
    </svg>
);

// ── Status styles ──────────────────────────────────────────────────────────
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

// ── Lightbox ───────────────────────────────────────────────────────────────
function Lightbox({
    images, index, onClose, onPrev, onNext,
}: {
    images: string[]; index: number;
    onClose: () => void; onPrev: () => void; onNext: () => void;
}) {
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.92)' }}
            onClick={onClose}
        >
            <button onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                <CloseIcon />
            </button>

            <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/50 z-10"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>
                {index + 1} / {images.length}
            </div>

            {images.length > 1 && (
                <button onClick={(e) => { e.stopPropagation(); onPrev(); }}
                    className="absolute left-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                    <ChevronLeftIcon />
                </button>
            )}

            <div className="relative w-[90vw] max-w-5xl h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
                <Image
                    src={images[index]}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-contain rounded-[10px]"
                    sizes="90vw"
                />
            </div>

            {images.length > 1 && (
                <button onClick={(e) => { e.stopPropagation(); onNext(); }}
                    className="absolute right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                    <ChevronRightIcon />
                </button>
            )}

            {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.map((src, i) => (
                        <button key={i}
                            onClick={(e) => e.stopPropagation()}
                            className={`relative w-10 h-10 rounded-[6px] overflow-hidden border-2 transition-all ${i === index ? 'border-white opacity-100' : 'border-transparent opacity-40 hover:opacity-70'}`}>
                            <Image src={src} alt="" fill className="object-cover" sizes="40px" />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

// ── Image Gallery ──────────────────────────────────────────────────────────
function ImageGallery({ images, accentHex }: { images: string[]; accentHex: string }) {
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const open = (i: number) => setLightboxIndex(i);
    const close = () => setLightboxIndex(null);
    const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
    const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

    if (images.length === 0) return null;

    const [hero, ...rest] = images;
    const thumbs = rest.slice(0, 3);
    const overflow = images.length - 4;

    return (
        <>
            <div className="mt-12 opacity-0 animate-[fadeUp_0.55s_0.2s_ease_forwards]">
                <p className="text-[10px] uppercase tracking-[0.15em] text-[#bbb] mb-4"
                    style={{ fontFamily: "'DM Mono', monospace" }}>
                    Gallery
                </p>

                {/* Hero — 16:9 */}
                <div
                    className="relative w-full rounded-[14px] overflow-hidden border border-black/[0.08] shadow-[0_4px_40px_rgba(0,0,0,0.07)] cursor-zoom-in mb-3 group"
                    style={{ height: '420px' }}
                    onClick={() => open(0)}
                >
                    <Image
                        src={hero}
                        alt="Project screenshot 1"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="780px"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: accentHex }}
                    />
                    {/* Zoom hint */}
                    <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/40 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px' }}>
                        click to expand
                    </div>
                </div>

                {/* Thumbnail row — fixed 160px height */}
                {thumbs.length > 0 && (
                    <div className={`grid gap-3 ${thumbs.length === 1 ? 'grid-cols-1' : thumbs.length === 2 ? 'grid-cols-2' : 'grid-cols-3'}`}>
                        {thumbs.map((src, i) => {
                            const isLast = i === thumbs.length - 1 && overflow > 0;
                            return (
                                <div
                                    key={i}
                                    className="relative rounded-[10px] overflow-hidden border border-black/[0.08] cursor-zoom-in group"
                                    style={{ height: '160px' }}
                                    onClick={() => open(i + 1)}
                                >
                                    <Image
                                        src={src}
                                        alt={`Project screenshot ${i + 2}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 780px) 33vw, 240px"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                    {isLast && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                                            <span className="text-white font-medium"
                                                style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}>
                                                +{overflow} more
                                            </span>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {lightboxIndex !== null && (
                <Lightbox images={images} index={lightboxIndex} onClose={close} onPrev={prev} onNext={next} />
            )}
        </>
    );
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const prevProject = projects[currentIndex - 1] ?? null;
    const nextProject = projects[currentIndex + 1] ?? null;

    return (
        <main
            className="min-h-screen"
            style={{
                fontFamily: "'Instrument Sans', sans-serif",
                backgroundColor: '#fafaf8',
                backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
            }}
        >
            <div className="h-[3px] w-full" style={{ background: project.accentHex }} />

            <div className="max-w-[780px] mx-auto px-6 py-16">

                {/* Back */}
                <div className="opacity-0 animate-[fadeUp_0.5s_ease_forwards]">
                    <Link href="/#projects"
                        className="inline-flex items-center gap-2 text-[12px] text-[#999] hover:text-[#111] transition-colors mb-12"
                        style={{ fontFamily: "'DM Mono', monospace" }}>
                        <ArrowLeftIcon />
                        All projects
                    </Link>
                </div>

                {/* Header */}
                <div className="opacity-0 animate-[fadeUp_0.55s_0.05s_ease_forwards]">
                    <div className="flex items-center gap-3 mb-5">
                        <span className="text-[11px] text-[#bbb]"
                            style={{ fontFamily: "'DM Mono', monospace", letterSpacing: '0.06em' }}>
                            {project.index}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10.5px] font-medium ${statusStyles[project.status]}`}>
                            <span className={`w-[5px] h-[5px] rounded-full ${statusDot[project.status]}`} />
                            {project.status}
                        </span>
                    </div>

                    <h1 className="text-[#0f0f0f] leading-[1.05] tracking-tight mb-3"
                        style={{ fontFamily: "'DM Serif Display', serif", fontSize: 'clamp(36px, 6vw, 56px)' }}>
                        {project.title}
                    </h1>

                    <p className="text-[16px] text-[#666] leading-relaxed mb-8 max-w-[560px]">
                        {project.tagline}
                    </p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 pb-8 border-b border-black/[0.07]"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#999' }}>
                        <span>{project.year}</span>
                        <span className="w-px h-3 bg-black/[0.12]" />
                        <span>{project.role}</span>
                        {project.liveUrl && (
                            <>
                                <span className="w-px h-3 bg-black/[0.12]" />
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[#555] hover:text-[#111] transition-colors">
                                    Live site <ArrowUpRightIcon />
                                </a>
                            </>
                        )}
                        {project.githubUrl && (
                            <>
                                <span className="w-px h-3 bg-black/[0.12]" />
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[#555] hover:text-[#111] transition-colors">
                                    <GithubIcon /> GitHub
                                </a>
                            </>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                            <span key={tag}
                                className="px-2.5 py-[4px] rounded-md bg-black/[0.04] border border-black/[0.06] text-[11px] text-[#666]"
                                style={{ fontFamily: "'DM Mono', monospace" }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Stack */}
                <div className="mt-10 opacity-0 animate-[fadeUp_0.55s_0.12s_ease_forwards]">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#bbb] mb-3"
                        style={{ fontFamily: "'DM Mono', monospace" }}>Stack</p>
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((s) => (
                            <span key={s}
                                className="px-3 py-1.5 rounded-[8px] bg-white border border-black/[0.08] text-[12px] text-[#444]"
                                style={{ fontFamily: "'DM Mono', monospace" }}>
                                {s}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Description */}
                <div className="mt-12 opacity-0 animate-[fadeUp_0.55s_0.15s_ease_forwards]">
                    <p className="text-[10px] uppercase tracking-[0.15em] text-[#bbb] mb-4"
                        style={{ fontFamily: "'DM Mono', monospace" }}>Overview</p>
                    <p className="text-[15px] text-[#444] leading-[1.8]">{project.description}</p>
                </div>

                {/* Gallery */}
                {project.images && project.images.length > 0 && (
                    <ImageGallery images={project.images} accentHex={project.accentHex} />
                )}

                {/* Highlights */}
                {project.highlights.length > 0 && (
                    <div className="mt-10 opacity-0 animate-[fadeUp_0.55s_0.25s_ease_forwards]">
                        <p className="text-[10px] uppercase tracking-[0.15em] text-[#bbb] mb-4"
                            style={{ fontFamily: "'DM Mono', monospace" }}>Highlights</p>
                        <ul className="flex flex-col gap-3">
                            {project.highlights.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <span className="mt-[7px] w-1.5 h-1.5 rounded-full flex-shrink-0"
                                        style={{ backgroundColor: project.accentHex }} />
                                    <span className="text-[14px] text-[#555] leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Prev / Next */}
                <div className="mt-20 pt-8 border-t border-black/[0.07] grid grid-cols-2 gap-4 opacity-0 animate-[fadeUp_0.55s_0.3s_ease_forwards]">
                    {prevProject ? (
                        <Link href={`/projects/${prevProject.slug}`}
                            className="group flex flex-col gap-1 p-4 rounded-[12px] border border-black/[0.08] bg-white hover:border-black/[0.18] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all">
                            <span className="text-[10px] text-[#bbb] uppercase tracking-[0.12em]"
                                style={{ fontFamily: "'DM Mono', monospace" }}>← Previous</span>
                            <span className="text-[13.5px] font-medium text-[#0f0f0f] group-hover:text-[#333] transition-colors truncate"
                                style={{ fontFamily: "'DM Serif Display', serif" }}>{prevProject.title}</span>
                        </Link>
                    ) : <div />}

                    {nextProject ? (
                        <Link href={`/projects/${nextProject.slug}`}
                            className="group flex flex-col gap-1 p-4 rounded-[12px] border border-black/[0.08] bg-white hover:border-black/[0.18] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all text-right">
                            <span className="text-[10px] text-[#bbb] uppercase tracking-[0.12em]"
                                style={{ fontFamily: "'DM Mono', monospace" }}>Next →</span>
                            <span className="text-[13.5px] font-medium text-[#0f0f0f] group-hover:text-[#333] transition-colors truncate"
                                style={{ fontFamily: "'DM Serif Display', serif" }}>{nextProject.title}</span>
                        </Link>
                    ) : <div />}
                </div>

            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');
                @keyframes fadeUp {
                    from { opacity: 0; transform: translateY(16px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </main>
    );
}