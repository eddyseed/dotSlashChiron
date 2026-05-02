'use client';

import React, { useState } from 'react';
import { certificates, type Certificate, type CertLevel } from '@/data/certificates.data';
import Image from 'next/image';

// ─── Level config ────────────────────────────────────────────────────
const levelConfig: Record<CertLevel, { color: string; bg: string; dot: string }> = {
    Professional: { color: '#0f0f0f', bg: 'rgba(15,15,15,0.07)', dot: '#0f0f0f' },
    Associate: { color: '#2563eb', bg: 'rgba(37,99,235,0.08)', dot: '#2563eb' },
    Specialization: { color: '#9333ea', bg: 'rgba(147,51,234,0.08)', dot: '#9333ea' },
    Course: { color: '#d97706', bg: 'rgba(217,119,6,0.08)', dot: '#d97706' },
};

// ─── Icons ───────────────────────────────────────────────────────────
const ExternalIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="currentColor" strokeWidth={2.2}>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const CalendarIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[11px] h-[11px]" fill="none" stroke="currentColor" strokeWidth={2}>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

// ─── Issuer avatar (logo or initials fallback) ────────────────────────
function IssuerAvatar({ cert }: { cert: Certificate }) {
    const [imgErr, setImgErr] = useState(false);
    const initials = cert.issuer.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

    if (cert.issuerLogo && !imgErr) {
        return (
            <div className="w-10 h-10 rounded-[10px] bg-white border border-black/[0.08] flex items-center justify-center p-1.5 flex-shrink-0">
                <Image
                    src={cert.issuerLogo}
                    alt={cert.issuer}
                    height={400}
                    width={800}
                    className="w-full h-full object-contain"
                    onError={() => setImgErr(true)}
                    unoptimized
                />
            </div>
        );
    }

    return (
        <div
            className="w-10 h-10 rounded-[10px] border border-black/[0.08] flex items-center justify-center flex-shrink-0"
            style={{ background: 'linear-gradient(135deg,#e8e8e8,#d0d0d0)', fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#666' }}
        >
            {initials}
        </div>
    );
}

// ─── Single certificate card ──────────────────────────────────────────
function CertCard({ cert, index, featured }: { cert: Certificate; index: number; featured: boolean }) {
    const cfg = levelConfig[cert.level];
    const isExpired = cert.expiry ? new Date(cert.expiry) < new Date() : false;

    return (
        <div
            className={`relative group bg-white border border-black/[0.08] rounded-[16px] p-5 flex flex-col gap-4
                  hover:border-black/[0.16] hover:shadow-[0_6px_28px_rgba(0,0,0,0.07)] transition-all duration-200
                  opacity-0 animate-[fadeUp_0.55s_ease_forwards]
                  ${featured ? 'ring-1 ring-black/[0.06]' : ''}`}
            style={{ animationDelay: `${index * 0.07}s` }}
        >
            {/* Featured ribbon */}
            {cert.featured && (
                <div
                    className="absolute top-0 right-5 flex items-center gap-1 px-2 py-0.5 rounded-b-[6px] bg-[#0f0f0f] text-white"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '9px', letterSpacing: '0.08em' }}
                >
                    ★ FEATURED
                </div>
            )}

            {/* Header row */}
            <div className="flex items-start gap-3">
                <IssuerAvatar cert={cert} />
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                    <span
                        className="font-semibold text-[#0f0f0f] tracking-tight leading-snug"
                        style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px' }}
                    >
                        {cert.title}
                    </span>
                    <span
                        className="text-[#888]"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}
                    >
                        {cert.issuer}
                    </span>
                </div>

                {/* Level badge */}
                <span
                    className="ml-auto flex-shrink-0 px-2 py-0.5 rounded-[5px] text-[10px] font-medium"
                    style={{ fontFamily: "'DM Mono', monospace", color: cfg.color, background: cfg.bg }}
                >
                    {cert.level}
                </span>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/[0.06]" />

            {/* Date + expiry */}
            <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5 text-[#888]" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>
                    <CalendarIcon />
                    Issued {cert.date}
                </div>
                {cert.expiry && (
                    <div
                        className="flex items-center gap-1.5"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: isExpired ? '#ef4444' : '#999' }}
                    >
                        <span className={`w-1.5 h-1.5 rounded-full ${isExpired ? 'bg-red-400' : 'bg-green-400'}`} />
                        {isExpired ? 'Expired' : 'Valid until'} {cert.expiry}
                    </div>
                )}
                {!cert.expiry && (
                    <div className="flex items-center gap-1.5 text-green-600" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        No expiry
                    </div>
                )}
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((s) => (
                    <span
                        key={s}
                        className="px-2 py-0.5 rounded-[5px] bg-black/[0.04] border border-black/[0.06]"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '10.5px', color: '#666' }}
                    >
                        {s}
                    </span>
                ))}
            </div>

            {/* Footer row */}
            <div className="flex items-center justify-between mt-auto pt-1">
                {cert.credentialId && (
                    <span className="text-[#bbb]" style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px' }}>
                        ID: {cert.credentialId}
                    </span>
                )}
                {cert.verifyUrl && (
                    <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto inline-flex items-center gap-1 text-[#555] hover:text-[#0f0f0f] transition-colors group/link"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}
                    >
                        <ShieldIcon />
                        Verify
                        <span className="opacity-0 group-hover/link:opacity-100 transition-opacity"><ExternalIcon /></span>
                    </a>
                )}
            </div>
        </div>
    );
}

// ─── Filter pill ──────────────────────────────────────────────────────
function FilterPill({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className="px-3.5 py-1.5 rounded-[8px] transition-all duration-150 whitespace-nowrap"
            style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '11.5px',
                fontWeight: active ? 500 : 400,
                color: active ? '#0f0f0f' : '#999',
                background: active ? 'white' : 'transparent',
                border: active ? '1px solid rgba(0,0,0,0.1)' : '1px solid transparent',
                boxShadow: active ? '0 1px 4px rgba(0,0,0,0.06)' : 'none',
            }}
        >
            {label}
        </button>
    );
}

// ─── Main Certificates section ────────────────────────────────────────
const ALL = 'All';
const levels: (CertLevel | typeof ALL)[] = [ALL, 'Professional', 'Associate', 'Specialization', 'Course'];

export default function Certificates() {
    const [filter, setFilter] = useState<CertLevel | typeof ALL>(ALL);

    const sorted = [...certificates].sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return 0;
    });

    const visible = filter === ALL ? sorted : sorted.filter((c) => c.level === filter);

    return (
        <section
            id="certificates"
            className="relative py-28 overflow-hidden"
            style={{
                fontFamily: "'Instrument Sans', sans-serif",
                backgroundColor: '#f5f5f3',
                backgroundImage: `radial-gradient(circle at 20% 40%, rgba(0,0,0,0.018) 1px, transparent 1px),
                          radial-gradient(circle at 80% 60%, rgba(0,0,0,0.018) 1px, transparent 1px)`,
                backgroundSize: '52px 52px, 52px 52px',
                backgroundPosition: '0 0, 26px 26px',
            }}
        >
            {/* Edge fades */}
            <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-[1]"
                style={{ background: 'linear-gradient(to bottom, #f5f5f3, transparent)' }} />
            <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-[1]"
                style={{ background: 'linear-gradient(to top, #f5f5f3, transparent)' }} />

            <div className="relative z-10 max-w-[1100px] mx-auto px-8">

                {/* ── Section header ── */}
                <div className="mb-12 opacity-0 animate-[fadeUp_0.6s_ease_forwards]">
                    <div
                        className="inline-flex items-center gap-2 mb-5"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}
                    >
                        <span className="w-7 h-px bg-[#999]" />
                        Certificates
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
                        <h2
                            style={{
                                fontFamily: "'DM Serif Display', serif",
                                fontSize: 'clamp(36px, 4.5vw, 54px)',
                                lineHeight: 1.06,
                                letterSpacing: '-0.025em',
                                color: '#0f0f0f',
                            }}
                        >
                            Credentials &<br />
                            <em style={{ fontStyle: 'italic', color: '#555' }}>proof of work</em>
                        </h2>

                        {/* Count pill */}
                        <div
                            className="px-4 py-2 rounded-[10px] bg-white border border-black/[0.08] flex items-center gap-2 w-fit sm:mb-1"
                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#555' }}
                        >
                            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: '20px', color: '#0f0f0f', lineHeight: 1 }}>
                                {certificates.length}
                            </span>
                            certifications earned
                        </div>
                    </div>
                </div>

                {/* ── Filter pills ── */}
                <div
                    className="flex gap-1 p-1 rounded-[10px] bg-black/[0.04] border border-black/[0.07] w-fit mb-10 flex-wrap
                     opacity-0 animate-[fadeUp_0.6s_0.1s_ease_forwards]"
                >
                    {levels.map((l) => (
                        <FilterPill key={l} label={l} active={filter === l} onClick={() => setFilter(l)} />
                    ))}
                </div>

                {/* ── Grid ── */}
                <div
                    key={filter}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {visible.map((cert, i) => (
                        <CertCard key={cert.id} cert={cert} index={i} featured={!!cert.featured} />
                    ))}
                </div>

                {visible.length === 0 && (
                    <div
                        className="text-center py-20 text-[#ccc]"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '13px' }}
                    >
                    </div>
                )}
            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap');
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}