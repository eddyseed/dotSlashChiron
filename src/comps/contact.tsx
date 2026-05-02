'use client';

import { db } from '@/lib/firebase';
import React, { useState } from 'react';
import { contactMethods, contactMeta } from '@/data/certificates.data';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

// ─── Icons ────────────────────────────────────────────────────────────
const icons = {
    mail: () => (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth={2}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-10 7L2 7" />
        </svg>
    ),
    github: () => (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
    ),
    linkedin: () => (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    ),
    twitter: () => (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
    ),
    location: () => (
        <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    ),
};

const ArrowRightIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[12px] h-[12px]" fill="none" stroke="currentColor" strokeWidth={2.5}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

const SendIcon = () => (
    <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill="none" stroke="currentColor" strokeWidth={2}>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
);

// ─── Contact method card ──────────────────────────────────────────────
function ContactCard({ method, index }: { method: typeof contactMethods[0]; index: number }) {
    const IconComp = icons[method.icon];

    return (
        <a
            href={method.id === 'location' ? undefined : method.href}
            target={method.href?.startsWith('http') ? '_blank' : undefined}
            rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            className={`group relative flex items-center gap-4 p-4 bg-white border border-black/[0.08] rounded-[14px]
                  transition-all duration-200 hover:border-black/[0.16] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]
                  opacity-0 animate-[fadeUp_0.5s_ease_forwards]
                  ${method.id === 'location' ? 'cursor-default' : 'cursor-pointer'}`}
            style={{ animationDelay: `${index * 0.07}s` }}
        >
            {/* Icon */}
            <div className="w-10 h-10 rounded-[10px] bg-black/[0.04] border border-black/[0.07] flex items-center justify-center flex-shrink-0
                      group-hover:bg-[#0f0f0f] group-hover:border-[#0f0f0f] group-hover:text-white text-[#555] transition-all duration-200">
                <IconComp />
            </div>

            {/* Text */}
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <span
                    className="text-[#999] uppercase tracking-[0.1em]"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px' }}
                >
                    {method.label}
                </span>
                <span
                    className="font-medium text-[#0f0f0f] truncate"
                    style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13px' }}
                >
                    {method.value}
                </span>
            </div>

            {/* CTA */}
            {method.id !== 'location' && (
                <div
                    className="flex items-center gap-1 text-[#bbb] group-hover:text-[#0f0f0f] transition-colors flex-shrink-0"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}
                >
                    {method.cta}
                    <span className="translate-x-0 group-hover:translate-x-0.5 transition-transform">
                        <ArrowRightIcon />
                    </span>
                </div>
            )}
        </a>
    );

}


// ─── Main Contact section ─────────────────────────────────────────────
export default function Contact() {

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [, setError] = useState<string | null>(null);
    const [charCount, setCharCount] = useState(0);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await addDoc(collection(db, 'messages'), {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                createdAt: serverTimestamp(),
            });

            setStatus('success');
            form.reset();
            setCharCount(0);
        } catch (err) {
            console.error(err);
            setStatus('error');
            setError('Something went wrong. Please try again.');
        }
    }


    return (
        <section
            id="contact"
            className="relative py-28 overflow-hidden"
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
            {/* Radial glow */}
            <div className="absolute inset-0 pointer-events-none z-0"
                style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,0,0,0.03) 0%, transparent 70%)' }} />
            <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none z-[1]"
                style={{ background: 'linear-gradient(to bottom, #fafaf8, transparent)' }} />

            <div className="relative z-10 max-w-[1100px] mx-auto px-8">

                {/* ── Header ── */}
                <div className="mb-16 opacity-0 animate-[fadeUp_0.6s_ease_forwards]">
                    <div
                        className="inline-flex items-center gap-2 mb-5"
                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}
                    >
                        <span className="w-7 h-px bg-[#999]" />
                        Contact
                    </div>

                    <h2
                        style={{
                            fontFamily: "'DM Serif Display', serif",
                            fontSize: 'clamp(38px, 5vw, 60px)',
                            lineHeight: 1.06,
                            letterSpacing: '-0.025em',
                            color: '#0f0f0f',
                        }}
                    >
                        {contactMeta.headline}<br />
                        <em style={{ fontStyle: 'italic', color: '#666' }}>worth remembering.</em>
                    </h2>

                    <p className="mt-4 max-w-[500px] text-[#666]" style={{ fontSize: '15.5px', lineHeight: 1.7 }}>
                        {contactMeta.subline}
                    </p>
                </div>

                {/* ── Two-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 items-start">

                    {/* LEFT — Contact form ── */}
                    <div className="opacity-0 animate-[fadeUp_0.6s_0.1s_ease_forwards]">

                        {/* Availability banner */}
                        <div className="flex items-center gap-3 mb-8 p-4 bg-white border border-black/[0.08] rounded-[12px]">
                            <span className="w-2 h-2 rounded-full bg-green-500 ring-4 ring-green-500/20 flex-shrink-0" />
                            <div>
                                <span className="font-medium text-[#0f0f0f]" style={{ fontSize: '13.5px' }}>
                                    {contactMeta.availabilityLabel}
                                </span>
                                <span className="text-[#999] ml-2" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px' }}>
                                    — {contactMeta.availabilityNote}
                                </span>
                            </div>
                            <div className="ml-auto flex-shrink-0">
                                <span
                                    className="text-[#bbb]"
                                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '10.5px' }}
                                >
                                    {contactMeta.responseTime}
                                </span>
                            </div>
                        </div>

                        {/* Form */}
                        {status === 'success' ? (
                            <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
                                <div className="w-14 h-14 rounded-full bg-green-500/[0.08] border border-green-500/20 flex items-center justify-center text-green-500 text-2xl">
                                    ✓
                                </div>
                                <p
                                    className="font-medium text-[#0f0f0f]"
                                    style={{ fontFamily: "'DM Serif Display', serif", fontSize: '22px' }}
                                >
                                    Message sent!
                                </p>
                                <p className="text-[#999]" style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px' }}>
                                </p>
                                <button onClick={() => setStatus('idle')}
                                    className="mt-2 text-[#555] hover:text-[#0f0f0f] transition-colors"
                                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '11.5px' }}
                                >
                                    Send another →
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">


                                {/* Name + Email row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="name"
                                            className="text-[#999] uppercase tracking-[0.1em]"
                                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px' }}
                                        >
                                            Name *
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            className="w-full px-4 py-3 bg-white border border-black/[0.1] rounded-[10px] text-[#0f0f0f] placeholder-[#ccc]
                                 focus:outline-none focus:border-black/[0.3] focus:ring-2 focus:ring-black/[0.04] transition-all"
                                            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px' }}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label
                                            htmlFor="email"
                                            className="text-[#999] uppercase tracking-[0.1em]"
                                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px' }}
                                        >
                                            Email *
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@email.com"
                                            className="w-full px-4 py-3 bg-white border border-black/[0.1] rounded-[10px] text-[#0f0f0f] placeholder-[#ccc]
                                 focus:outline-none focus:border-black/[0.3] focus:ring-2 focus:ring-black/[0.04] transition-all"
                                            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px' }}
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="flex flex-col gap-1.5">
                                    <label
                                        htmlFor="subject"
                                        className="text-[#999] uppercase tracking-[0.1em]"
                                        style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px' }}
                                    >
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="What's this about?"
                                        className="w-full px-4 py-3 bg-white border border-black/[0.1] rounded-[10px] text-[#0f0f0f] placeholder-[#ccc]
                               focus:outline-none focus:border-black/[0.3] focus:ring-2 focus:ring-black/[0.04] transition-all"
                                        style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px' }}
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-1.5">
                                    <div className="flex items-center justify-between">
                                        <label
                                            htmlFor="message"
                                            className="text-[#999] uppercase tracking-[0.1em]"
                                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '9.5px' }}
                                        >
                                            Message *
                                        </label>
                                        <span
                                            className={charCount > 480 ? 'text-red-400' : 'text-[#ccc]'}
                                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px' }}
                                        >
                                            {charCount}/500
                                        </span>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        maxLength={500}
                                        placeholder="Tell me about your project or just say hi..."
                                        onChange={(e) => setCharCount(e.target.value.length)}
                                        className="w-full px-4 py-3 bg-white border border-black/[0.1] rounded-[10px] text-[#0f0f0f] placeholder-[#ccc] resize-none
                               focus:outline-none focus:border-black/[0.3] focus:ring-2 focus:ring-black/[0.04] transition-all"
                                        style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px', lineHeight: 1.6 }}
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#111] hover:bg-[#2a2a2a] disabled:bg-[#888]
                             text-white rounded-[10px] transition-all active:scale-[0.99]"
                                    style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px', fontWeight: 500 }}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <span
                                                className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send message
                                            <SendIcon />
                                        </>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-red-400 text-center" style={{ fontFamily: "'DM Mono', monospace", fontSize: '11.5px' }}>
                                            Something went wrong. Please try again.
                                        </p>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>

                {/* tGHT — Contact methods ── */}
                    <div className="flex flex-col gap-3 opacity-0 animate-[fadeUp_0.6s_0.2s_ease_forwards]">

                        {/* Decorative label */}
                        <div
                            className="mb-2"
                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', color: '#bbb' }}
                        >
                        </div>

                        {contactMethods.map((m, i) => (
                            <ContactCard key={m.id} method={m} index={i} />
                        ))}

                        {/* Time zone note */}
                        <div
                            className="mt-3 p-4 rounded-[12px] bg-black/[0.03] border border-black/[0.06] text-[#999]"
                            style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', lineHeight: 1.7 }}
                        >
                            LOCATION // INDIA <br />
                            TIMEZONE // GMT +5:30
                        </div>
                    </div>
                </div>
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