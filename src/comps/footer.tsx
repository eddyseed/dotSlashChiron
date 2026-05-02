'use client';

import React from 'react';
import Link from 'next/link';
import { footerColumns, footerMeta } from '@/data/techstack.data';

// ─── Icons ───────────────────────────────────────────────────────────
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
);

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const TwitterIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 7L2 7" />
    </svg>
);

const ArrowUpIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
    </svg>
);

const socialIcons: Record<string, React.ReactNode> = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />,
    'Twitter/X': <TwitterIcon />,
    Email: <MailIcon />,
};

// ─── Footer ──────────────────────────────────────────────────────────
export default function Footer() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <footer
            className="relative border-t border-black/[0.08] overflow-hidden"
            style={{
                fontFamily: "'Instrument Sans', sans-serif",
                backgroundColor: '#0f0f0f',
                backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
                backgroundSize: '80px 80px',
            }}
        >
            {/* Noise grain overlay */}
            <div
                className="absolute inset-0 pointer-events-none z-0 opacity-[0.025]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative z-10 max-w-[1100px] mx-auto px-8">

                {/* ── Top section ── */}
                <div className="pt-16 pb-12 grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">

                    {/* Brand column */}
                    <div className="flex flex-col gap-5">
                        {/* Logo */}
                        <Link href="#home" className="flex items-center gap-2.5 w-fit group">
                            <div className="w-[34px] h-[34px] rounded-[8px] bg-white/[0.07] border border-white/[0.1] flex items-center justify-center
                              font-mono text-[12px] font-medium text-white tracking-tight flex-shrink-0
                              group-hover:bg-white/[0.12] transition-all">
                                RJ
                            </div>
                            <div className="flex flex-col gap-0">
                                <span className="text-[14px] font-medium text-white tracking-tight leading-[1.1]">
                                    Rishabh Jain
                                </span>
                                <span className="text-[9.5px] font-normal text-white/40 tracking-[0.12em] uppercase"
                                    style={{ fontFamily: "'DM Mono', monospace" }}>
                                    Full Stack Dev
                                </span>
                            </div>
                        </Link>

                        {/* Tagline */}
                        <p className="text-white/40 leading-relaxed max-w-[240px]"
                            style={{ fontSize: '13px', lineHeight: 1.65 }}>
                            {footerMeta.tagline}
                        </p>

                        {/* Status badge */}
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/[0.1] border border-green-500/20 w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 ring-2 ring-green-500/25 animate-pulse" />
                            <span className="text-[11px] font-medium text-green-400" style={{ fontFamily: "'DM Mono', monospace" }}>
                                {footerMeta.statusLabel}
                            </span>
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-2 mt-1">
                            {footerColumns
                                .find((col) => col.heading === 'Connect')
                                ?.links.filter((l) => socialIcons[l.label])
                                .map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith('http') ? '_blank' : undefined}
                                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        className="w-8 h-8 rounded-[8px] bg-white/[0.05] border border-white/[0.09] flex items-center justify-center
                               text-white/50 hover:text-white hover:bg-white/[0.1] hover:border-white/[0.18] transition-all"
                                        aria-label={link.label}
                                    >
                                        {socialIcons[link.label]}
                                    </a>
                                ))}
                        </div>
                    </div>

                    {/* Link columns (driven by data) */}
                    {footerColumns.map((col) => (
                        <div key={col.heading} className="flex flex-col gap-4">
                            <span
                                className="text-white/30 uppercase tracking-[0.14em]"
                                style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px' }}
                            >
                                {col.heading}
                            </span>
                            <ul className="flex flex-col gap-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            target={link.href.startsWith('http') ? '_blank' : undefined}
                                            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                            className="text-white/50 hover:text-white transition-colors"
                                            style={{ fontSize: '13px' }}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* ── Divider ── */}
                <div className="h-px bg-white/[0.07]" />

                {/* ── Bottom bar ── */}
                <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-4">
                        <span className="text-white/30" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>
                            {footerMeta.copyright}
                        </span>
                        <span className="hidden sm:block w-px h-3 bg-white/[0.1]" />
                        <span className="hidden sm:block text-white/20" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>
                            Built with {footerMeta.madeWith}
                        </span>
                    </div>

                    {/* Scroll to top */}
                    <button
                        onClick={scrollTop}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-white/[0.04] border border-white/[0.08]
                       text-white/40 hover:text-white hover:bg-white/[0.08] transition-all group"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}
                    >
                        Back to top
                        <span className="group-hover:-translate-y-0.5 transition-transform">
                            <ArrowUpIcon />
                        </span>
                    </button>
                </div>
            </div>

            {/* Large watermark text */}
            <div
                className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden"
                style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontSize: 'clamp(80px, 10vw, 140px)',
                    lineHeight: 1,
                    color: 'rgba(255,255,255,0.025)',
                    letterSpacing: '-0.04em',
                    transform: 'translateY(20%)',
                }}
            >
                rishabh
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');
      `}</style>
        </footer>
    );
}