'use client';

import React, { useState } from 'react';
import { techCategories, type TechItem, type Proficiency } from '@/data/techstack.data';

// ─── Proficiency config ──────────────────────────────────────────────
const proficiencyConfig: Record<Proficiency, { label: string; color: string; bg: string; bar: number }> = {
  Expert:       { label: 'Expert',       color: '#0f0f0f', bg: 'rgba(15,15,15,0.07)',   bar: 100 },
  Advanced:     { label: 'Advanced',     color: '#2563eb', bg: 'rgba(37,99,235,0.08)',  bar: 78 },
  Intermediate: { label: 'Intermediate', color: '#d97706', bg: 'rgba(217,119,6,0.08)', bar: 52 },
  Learning:     { label: 'Learning',     color: '#16a34a', bg: 'rgba(22,163,74,0.08)', bar: 28 },
};

// ─── Mini sparkle icon ───────────────────────────────────────────────
const SparkIcon = () => (
  <svg viewBox="0 0 16 16" className="w-[11px] h-[11px]" fill="currentColor">
    <path d="M8 0 L9.2 6.8 L16 8 L9.2 9.2 L8 16 L6.8 9.2 L0 8 L6.8 6.8Z" />
  </svg>
);

// ─── Single tech card ────────────────────────────────────────────────
function TechCard({ item, index }: { item: TechItem; index: number }) {
  const [hovered, setHovered] = useState(false);
  const cfg = proficiencyConfig[item.proficiency];

  return (
    <div
      className="relative group bg-white border border-black/[0.08] rounded-[14px] p-4 flex flex-col gap-3
                 hover:border-black/[0.16] hover:shadow-[0_4px_24px_rgba(0,0,0,0.07)] transition-all duration-200 cursor-default
                 opacity-0 animate-[fadeUp_0.55s_ease_forwards]"
      style={{ animationDelay: `${index * 0.06}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon + name row */}
      <div className="flex items-center gap-3">
        {/* Icon box */}
        <div className="w-9 h-9 rounded-[9px] bg-black/[0.04] border border-black/[0.07] flex items-center justify-center flex-shrink-0 overflow-hidden">
          <i className={`${item.icon} colored text-[18px]`} />
        </div>

        <div className="flex flex-col gap-0.5 min-w-0">
          <span
            className="font-medium text-[#0f0f0f] tracking-tight truncate"
            style={{ fontFamily: "'Instrument Sans', sans-serif", fontSize: '13.5px' }}
          >
            {item.name}
          </span>
          <span
            className="text-[#999]"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px' }}
          >
            {item.years}yr{item.years !== 1 ? 's' : ''}
          </span>
        </div>

        {/* Proficiency badge — pushes to right */}
        <span
          className="ml-auto px-2 py-0.5 rounded-[5px] text-[10px] font-medium flex-shrink-0"
          style={{
            fontFamily: "'DM Mono', monospace",
            color: cfg.color,
            background: cfg.bg,
            letterSpacing: '0.02em',
          }}
        >
          {cfg.label}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[3px] rounded-full bg-black/[0.06] overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: hovered ? `${cfg.bar}%` : `${cfg.bar * 0.6}%`,
            background: cfg.color === '#0f0f0f' ? '#0f0f0f' : cfg.color,
            opacity: 0.6,
          }}
        />
      </div>

      {/* Hover note */}
      {item.note && (
        <div
          className="text-[#888] transition-all duration-200"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '10.5px',
            lineHeight: 1.5,
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(4px)',
          }}
        >
          {item.note}
        </div>
      )}
    </div>
  );
}

// ─── Category tab button ─────────────────────────────────────────────
function CategoryTab({
  label, active, onClick,
}: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-1.5 rounded-[8px] transition-all duration-150 whitespace-nowrap"
      style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: '12px',
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

// ─── Main TechStack section ──────────────────────────────────────────
export default function TechStack() {
  const [activeId, setActiveId] = useState(techCategories[0].id);
  const active = techCategories.find((c) => c.id === activeId)!;

  return (
    <section
      id="tech-stack"
      className="relative py-28 overflow-hidden"
      style={{
        fontFamily: "'Instrument Sans', sans-serif",
        backgroundColor: '#fafaf8',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }}
    >
      {/* Fade edges */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 20%, rgba(250,250,248,0.55) 100%)' }} />
      <div className="absolute top-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #fafaf8, transparent)' }} />
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #fafaf8, transparent)' }} />

      <div className="relative z-10 max-w-[1100px] mx-auto px-8">

        {/* ── Section header ── */}
        <div
          className="mb-14 opacity-0 animate-[fadeUp_0.6s_ease_forwards]"
        >
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: '11px', letterSpacing: '0.15em', color: '#999', textTransform: 'uppercase' }}
          >
            <span className="w-7 h-px bg-[#999]" />
            Tech Stack
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:gap-0 justify-between">
            <h2
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 'clamp(36px, 4.5vw, 54px)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: '#0f0f0f',
              }}
            >
              Tools I trust<br />
              <em style={{ fontStyle: 'italic', color: '#555' }}>to ship with</em>
            </h2>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 sm:pb-1">
              {(Object.keys(proficiencyConfig) as Proficiency[]).map((p) => (
                <div key={p} className="flex items-center gap-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: proficiencyConfig[p].color }}
                  />
                  <span
                    className="text-[#888]"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: '10px' }}
                  >
                    {p}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Category tabs ── */}
        <div
          className="flex gap-1 p-1 rounded-[12px] bg-black/[0.04] border border-black/[0.07] w-fit mb-10 flex-wrap
                     opacity-0 animate-[fadeUp_0.6s_0.1s_ease_forwards]"
        >
          {techCategories.map((cat) => (
            <CategoryTab
              key={cat.id}
              label={cat.label}
              active={activeId === cat.id}
              onClick={() => setActiveId(cat.id)}
            />
          ))}
        </div>

        {/* ── Category description ── */}
        <div
          key={activeId + '-desc'}
          className="mb-7 opacity-0 animate-[fadeUp_0.4s_ease_forwards]"
          style={{ fontFamily: "'DM Mono', monospace", fontSize: '12px', color: '#999' }}
        >
          {active.description}
        </div>

        {/* ── Cards grid ── */}
        <div
          key={activeId}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
        >
          {active.items.map((item, i) => (
            <TechCard key={item.name} item={item} index={i} />
          ))}

          {/* "Add more" placeholder */}
          <div
            className="bg-transparent border border-dashed border-black/[0.12] rounded-[14px] p-4 flex flex-col items-center justify-center gap-2
                       opacity-0 animate-[fadeUp_0.55s_ease_forwards] cursor-default"
            style={{ animationDelay: `${active.items.length * 0.06}s`, minHeight: '108px' }}
          >
            <SparkIcon />
            <span
              className="text-center text-[#bbb]"
              style={{ fontFamily: "'DM Mono', monospace", fontSize: '10.5px', lineHeight: 1.5 }}
            >
              More coming<br />soon...
            </span>
          </div>
        </div>

        {/* ── Bottom stat strip ── */}
        <div
          className="mt-14 pt-8 border-t border-black/[0.08] flex flex-wrap gap-8
                     opacity-0 animate-[fadeUp_0.6s_0.35s_ease_forwards]"
        >
          {[
            { num: `${techCategories.reduce((a, c) => a + c.items.length, 0)}+`, label: 'Tools mastered' },
            { num: '3+',  label: 'Years building' },
            { num: '5',   label: 'Specialisations' },
          ].map(({ num, label }) => (
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
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '11.5px', color: '#999' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Shared keyframes (only needed if not already in Hero) */}
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