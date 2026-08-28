'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px] fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const ArrowDownIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="#999" strokeWidth={2.5}>
        <line x1="12" y1="5" x2="12" y2="19" />
        <polyline points="19 12 12 19 5 12" />
    </svg>
);

const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js',
    'PostgreSQL', 'Docker', 'Tailwind', 'AWS',
];

const stats = [
    { num: '3+', label: 'Years exp.' },
    { num: '24', label: 'Projects shipped' },
    { num: '12', label: 'Clients served' },
];

const crosshairs = [
    'top-[18%] left-[12%]',
    'top-[72%] left-[8%]',
    'top-[25%] right-[14%]',
    'top-[70%] right-[10%]',
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden mt-14 pt-14 pb-14"
            style={{ fontFamily: "'Instrument Sans', sans-serif" }}
        >

            {/* ── Background Layers ── */}
            <PatternBackground />

            {/* Crosshair decorations */}
            {crosshairs.map((pos, i) => (
                <Crosshair key={i} className={pos} />
            ))}

            {/* Floating code badges */}
            <FloatingBadge className="top-[22%] left-[7%]" delay="0s" dir="up">
                const dev = &apos;rishabh&apos;
            </FloatingBadge>
            <FloatingBadge className="top-[62%] right-[8%]" delay="1s" dir="down">
                git commit -m &quot;ship it&quot;
            </FloatingBadge>
            <FloatingBadge className="bottom-[18%] left-[6%] text-[10px]" delay="0.5s" dir="up">
                npm run build → ✓
            </FloatingBadge>

            {/* ── Main Content ── */}
            <div className="relative z-10 max-w-[1100px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 items-center py-12 lg:py-0">

                {/* LEFT */}
                <div className="flex flex-col">

                    {/* Eyebrow */}
                    <div
                        className="inline-flex items-center gap-2 mb-6 opacity-0 animate-[fadeUp_0.7s_ease_forwards]"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}
                    >
                        <span className="w-7 h-px bg-[#999]" />
                        Portfolio · 2026
                    </div>

                    {/* Title */}
                    <h1
                        className="mb-7 opacity-0 animate-[fadeUp_0.7s_0.1s_ease_forwards]"
                        style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: 'clamp(48px, 6vw, 76px)',
                            lineHeight: 1.04,
                            letterSpacing: '-0.025em',
                            color: '#0f0f0f',
                        }}
                    >
                        Building<br />
                        <em style={{ fontStyle: 'italic', color: '#444' }}>elegant</em> web<br />
                        <span className="relative inline-block">
                            experiences
                            <span className="absolute bottom-0.5 left-0 right-0 h-[3px] rounded-sm bg-black/10" />
                        </span>
                    </h1>

                    {/* Description */}
                    <p
                        className="max-w-[480px] mb-10 opacity-0 animate-[fadeUp_0.7s_0.2s_ease_forwards]"
                        style={{ fontSize: '16.5px', lineHeight: 1.72, color: '#555' }}
                    >
                        Full stack developer crafting fast, intuitive products — from pixel-perfect UIs
                        to scalable backend systems. Currently exploring the intersection of design and engineering.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-3 flex-wrap mb-12 opacity-0 animate-[fadeUp_0.7s_0.3s_ease_forwards]">
                        <Link
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#111] hover:bg-[#2a2a2a] text-white rounded-[10px] transition-all active:scale-[0.98]"
                            style={{ fontSize: '13.5px', fontWeight: 500 }}
                        >
                            View Projects
                            <ArrowRightIcon />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-black/[0.04] text-[#0f0f0f] border border-black/[0.13] rounded-[10px] transition-all active:scale-[0.98]"
                            style={{ fontSize: '13.5px', fontWeight: 500 }}
                        >
                            Get in touch
                        </Link>
                    </div>

                    {/* Stats */}
                    <div className="flex gap-9 pt-8 border-t border-black/[0.08] opacity-0 animate-[fadeUp_0.7s_0.4s_ease_forwards]">
                        {stats.map(({ num, label }) => (
                            <div key={label} className="flex flex-col gap-1">
                                <span
                                    style={{
                                        fontFamily: "'DM Serif Display', serif",
                                        fontSize: '26px', lineHeight: 1,
                                        color: '#0f0f0f', letterSpacing: '-0.02em',
                                    }}
                                >
                                    {num}
                                </span>
                                <span
                                    style={{
                                        fontFamily: "'DM Mono', monospace",
                                        fontSize: '11.5px', color: '#999',
                                    }}
                                >
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT – Profile Card */}
                <div className="relative opacity-0 animate-[fadeUp_0.7s_0.25s_ease_forwards]">
                    {/* Card shadow */}
                    <div className="absolute inset-3 top-5 bg-black/[0.06] rounded-[22px] blur-2xl z-0" />

                    <div className="relative z-10 bg-white border border-black/[0.1] rounded-[20px] p-8 flex flex-col gap-6">
                        {/* Top accent bar */}
                        <div className="absolute top-0 right-7 w-9 h-1.5 bg-[#111] rounded-b-[4px]" />

                        {/* Card header */}
                        <div className="flex items-center gap-4">
                            <div
                                className="w-[60px] h-[60px] rounded-full border border-black/[0.1] flex-shrink-0 flex items-center justify-center"
                                style={{
                                    background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)',
                                    fontFamily: "'DM Serif Display', serif",
                                    fontSize: '20px', color: '#555',
                                }}
                            >
                                <Image
                                    src="/profile-pic.jpeg"
                                    alt="Rishabh Jain"
                                    width={200}
                                    height={200}
                                    className="rounded-full object-cover"
                                />
                            </div>
                            <div>
                                <div className="font-semibold text-[#0f0f0f] tracking-tight" style={{ fontSize: '16px' }}>
                                    Rishabh Jain
                                </div>
                                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '12.5px', color: '#999', marginTop: '2px' }}>
                                    fullstack.dev
                                </div>
                                <div className="inline-flex items-center gap-1.5 mt-1.5 px-2 py-0.5 rounded-full bg-green-500/[0.07] border border-green-500/20">
                                    <span className="w-[5px] h-[5px] rounded-full bg-green-500" />
                                    <span className="text-[10px] font-medium text-green-600">Open to work</span>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-black/[0.08]" />

                        {/* Stack chips */}
                        <div>
                            <div
                                className="mb-2.5"
                                style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px', color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                            >
                                Stack
                            </div>
                            <div className="flex flex-wrap gap-1.5">
                                {techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-[11px] py-[5px] rounded-[7px] bg-black/[0.04] border border-black/[0.07] transition-all hover:bg-black/[0.07] cursor-default"
                                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11.5px', color: '#555' }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Currently building */}
                        <div className="bg-black/[0.025] border border-black/[0.07] rounded-xl p-4">
                            <div
                                className="mb-1.5"
                                style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px', color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                            >
                                Currently building
                            </div>
                            <div className="font-medium text-[#0f0f0f] tracking-tight" style={{ fontSize: '13.5px' }}>
                                Smart Parking Slot Rental & Availability Platform
                            </div>
                            <div className="mt-1" style={{ fontSize: '12px', color: '#999', lineHeight: 1.5 }}>
                                A web application that allows users to find and rent available parking slots in real-time, with features like slot availability tracking, booking management, and payment integration.
                            </div>
                        </div>

                        {/* Card actions */}
                        <div className="flex gap-2">
                            <a
                                href={process.env.NEXT_PUBLIC_GITHUB_LINK ?? ""}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 border border-black/[0.13] rounded-[9px] text-[#0f0f0f] hover:bg-black/[0.04] transition-all"
                                style={{ fontSize: '12.5px', fontWeight: 500 }}
                            >
                                <GitHubIcon />
                                GitHub
                            </a>
                            <a
                                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}
                                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-[#111] hover:bg-[#2a2a2a] text-white border border-[#111] rounded-[9px] transition-all"
                                style={{ fontSize: '12.5px', fontWeight: 500 }}
                            >
                                <MailIcon />
                                Hire me
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Scroll Hint ── */}
            <div className="absolute bottom-9 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-0 animate-[fadeUp_0.7s_0.6s_ease_forwards]">
                <span
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px', color: '#999', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                >
                    scroll
                </span>
                <div className="w-7 h-7 rounded-full border border-black/[0.13] flex items-center justify-center animate-[bounce_2s_ease-in-out_infinite]">
                    <ArrowDownIcon />
                </div>
            </div>

            {/* ── Keyframes (injected once) ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes float-up {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-8px); }
        }

        @keyframes float-down {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(6px); }
        }
      `}</style>
        </section>
    );
}

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */

function PatternBackground() {
    return (
        <>
            {/* Dot grid */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundColor: '#fafaf8',
                    backgroundImage: `
            radial-gradient(circle at 25% 35%, rgba(0,0,0,0.025) 1px, transparent 1px),
            radial-gradient(circle at 75% 65%, rgba(0,0,0,0.018) 1px, transparent 1px)
          `,
                    backgroundSize: '48px 48px, 48px 48px',
                    backgroundPosition: '0 0, 24px 24px',
                }}
            />
            {/* Fine grid lines */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px)
          `,
                    backgroundSize: '80px 80px',
                }}
            />
            {/* Corner blobs */}
            <div
                className="absolute -top-40 -left-40 z-[1] w-[520px] h-[520px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.025) 0%, transparent 70%)' }}
            />
            <div
                className="absolute -bottom-52 -right-24 z-[1] w-[600px] h-[600px] rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 70%)' }}
            />
            {/* Radial fade from center */}
            <div
                className="absolute inset-0 z-[2] pointer-events-none"
                style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(250,250,248,0.6) 100%)' }}
            />
        </>
    );
}

function Crosshair({ className }: { className: string }) {
    return (
        <div className={`absolute z-[2] w-5 h-5 pointer-events-none ${className}`}>
            <div className="absolute left-1/2 top-0 w-px h-full bg-black/[0.15]" />
            <div className="absolute top-1/2 left-0 h-px w-full bg-black/[0.15]" />
        </div>
    );
}

function FloatingBadge({
    children,
    className,
    delay,
    dir,
}: {
    children: React.ReactNode;
    className?: string;
    delay: string;
    dir: 'up' | 'down';
}) {
    const animation = dir === 'up'
        ? `float-up 6s ${delay} ease-in-out infinite`
        : `float-down 8s ${delay} ease-in-out infinite`;

    return (
        <div
            className={`absolute z-[3] pointer-events-none hidden lg:block ${className ?? ''}`}
            style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '10.5px',
                color: 'rgba(0,0,0,0.28)',
                letterSpacing: '0.02em',
                animation,
            }}
        >
            {children}
        </div>
    );
}