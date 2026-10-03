'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Events & Prizes', href: '#events' },
    { name: 'Speakers', href: '#speakers' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Team', href: '#team' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
      isScrolled ? 'bg-[#07080a]/90 backdrop-blur-md border-b border-[#1a1d26] py-3.5 shadow-2xl' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - NSUT E-CELL E-SUMMIT */}
        <a href="#hero" className="flex items-center space-x-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#13161f] border border-[#1a1d26] flex items-center justify-center font-mono font-bold text-sm text-[#00f59b] group-hover:border-[#00f59b] transition-colors">
            E
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-bold text-base tracking-tight text-white flex items-center gap-2">
              E-SUMMIT &apos;26 <span className="text-[10px] px-1.5 py-0.2 bg-[#00f59b]/10 text-[#00f59b] font-mono border border-[#00f59b]/30 rounded-sm">NSUT</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">E-CELL NSUT DWARKA</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs uppercase tracking-widest font-mono font-medium text-slate-300 hover:text-[#00f59b] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            className="px-4 py-2 rounded-lg font-mono text-xs font-semibold tracking-wider uppercase bg-[#00f59b] text-[#07080a] hover:bg-[#00d989] transition-all flex items-center gap-1"
          >
            <span>Register Pass</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-slate-300 hover:text-[#00f59b] p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d0f14] border-b border-[#1a1d26] px-6 py-6 space-y-3 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-xs uppercase font-mono tracking-widest text-slate-300 hover:text-[#00f59b] py-2 border-b border-[#1a1d26]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#register"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center px-4 py-3 rounded-lg font-mono text-xs font-semibold tracking-wider uppercase bg-[#00f59b] text-[#07080a] mt-4"
          >
            Register Pass &rarr;
          </a>
        </div>
      )}
    </header>
  );
}
