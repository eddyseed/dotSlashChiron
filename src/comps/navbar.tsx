'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Stack', href: '#tech-stack' },
  { name: 'Certs', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-[15px] h-[15px] fill-current">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-white/97 backdrop-blur-lg border-b border-black/[0.07]">
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">

        {/* Logo */}
        <Link href="#home" className="flex items-center gap-2.5 group">
          <div className="w-[30px] h-[30px] rounded-[7px] bg-[#111] flex items-center justify-center font-mono text-[11px] font-medium text-white tracking-tight flex-shrink-0">
            RJ
          </div>
          <div className="flex flex-col gap-0">
            <span className="text-[14px] font-medium text-[#111] tracking-tight leading-[1.1]">
              Rishabh Jain
            </span>
            <span className="text-[9.5px] font-normal text-[#999] tracking-[0.12em] uppercase font-mono leading-[1.1]">
              Full Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[13px] font-normal text-[#666] hover:text-[#111] hover:bg-black/[0.04] px-3.5 py-1.5 rounded-md transition-all duration-150"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-1.5">
          {/* Status */}
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/[0.08] border border-green-500/20 text-[11px] text-green-600 font-medium mr-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 ring-2 ring-green-500/25" />
            Open to work
          </div>

          {/* GitHub */}
          <a href={process.env.NEXT_PUBLIC_GITHUB_LINK || "#"} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-black/10 flex items-center justify-center text-[#555] hover:text-[#111] hover:bg-black/[0.04] hover:border-black/[0.18] transition-all">
            <GitHubIcon />
          </a>

          {/* LinkedIn */}
          <a href={process.env.NEXT_PUBLIC_LINKEDIN_LINK || "#"} target="_blank" rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-black/10 flex items-center justify-center text-[#555] hover:text-[#111] hover:bg-black/[0.04] hover:border-black/[0.18] transition-all">
            <LinkedInIcon />
          </a>

          <div className="w-px h-[18px] bg-black/10 mx-1" />

          {/* Resume */}
          <a href="/resume.pdf" download="Rishabh_Jain_Resume.pdf"
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-[#111] hover:bg-[#333] text-white text-[12.5px] font-medium rounded-lg transition-all active:scale-[0.98]">
            Resume
            <Download size={11} className="opacity-70" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 transition-colors"
          aria-label="Toggle menu">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden border-t border-black/[0.07] bg-white"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                  className="text-[14px] font-normal text-[#666] hover:text-[#111] hover:bg-black/[0.04] px-3 py-2 rounded-md transition-all">
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-black/[0.07] flex flex-col gap-3">
                <a href="/resume.pdf" download="Rishabh_Jain_Resume.pdf"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-2.5 bg-[#111] text-white text-sm font-medium rounded-lg">
                  Download Resume <Download size={13} className="opacity-70" />
                </a>
                <div className="flex justify-center gap-4">
                  <a href="https://github.com/rishabhjain_13" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 border border-black/10 rounded-lg flex items-center justify-center text-[#555]"><GitHubIcon /></a>
                  <a href="https://linkedin.com/in/rishabhjain_13" target="_blank" rel="noopener noreferrer"
                    className="w-9 h-9 border border-black/10 rounded-lg flex items-center justify-center text-[#555]"><LinkedInIcon /></a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}