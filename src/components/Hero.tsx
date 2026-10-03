'use client';

import React from 'react';
import CountdownTimer from './CountdownTimer';
import { IndianRupee, ArrowRight, Trophy, Users, Building2, Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-[#07080a] bg-grid-pattern border-b border-[#1a1d26]">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetric 2-Column Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-16">
          
          {/* Left Main Editorial Title Column */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Status Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-[11px] font-mono text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#00f59b] animate-pulse"></span>
              <span>ENTREPRENEURSHIP CELL &bull; NSUT NEW DELHI</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight uppercase leading-[0.95] text-white">
              E-SUMMIT <span className="text-[#00f59b] font-normal">&apos;26</span>
            </h1>

            <p className="font-heading text-xl sm:text-2xl text-slate-300 tracking-tight font-medium max-w-3xl">
              Igniting Bharat&apos;s Next Generation of Founders & Technical Innovators
            </p>

            <p className="max-w-2xl text-slate-400 text-sm sm:text-base leading-relaxed">
              North India&apos;s flagship collegiate entrepreneurship conclave by E-Cell NSUT. 3 days of high-stakes pitching, business plan challenges, 48-hr hackathons, and VC investor keynotes.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#register"
                className="px-7 py-3.5 rounded-lg font-mono text-xs font-bold tracking-wider uppercase bg-[#00f59b] text-[#07080a] hover:bg-[#00d989] transition-all flex items-center justify-center gap-2 group"
              >
                <span>Register Delegate Pass</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#events"
                className="px-7 py-3.5 rounded-lg font-mono text-xs font-semibold tracking-wider uppercase bg-[#0d0f14] border border-[#1a1d26] text-slate-200 hover:border-slate-600 transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Competitions (₹ Prizes)</span>
              </a>
            </div>

          </div>

          {/* Right Column: Countdown & Rupee Banner */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Rupee Banner Box */}
            <div className="bg-[#0d0f14] p-6 rounded-lg border border-[#1a1d26] space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00f59b] block">TOTAL CONCLAVE POOL</span>
              <div className="flex items-center space-x-2 text-white font-heading text-3xl font-bold">
                <IndianRupee className="w-7 h-7 text-[#00f59b] stroke-[2.5]" />
                <span>12,50,000+</span>
              </div>
              <p className="text-slate-400 text-xs leading-normal">
                Direct cash prize pool, equity-free startup grants, and VC term-sheet opportunities.
              </p>
            </div>

            {/* Countdown Component */}
            <CountdownTimer />

          </div>

        </div>

        {/* Technical Metric Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1a1d26] pt-8 gap-6 text-left">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">PRIZE POOL</span>
            <span className="font-heading font-bold text-xl text-white block">₹12.5 Lakhs</span>
            <span className="text-xs text-slate-400">Cash Prizes & Grants</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">DELEGATES</span>
            <span className="font-heading font-bold text-xl text-white block">4,850+</span>
            <span className="text-xs text-slate-400">Registered Participants</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">INSTITUTIONS</span>
            <span className="font-heading font-bold text-xl text-white block">180+</span>
            <span className="text-xs text-slate-400">Colleges Across India</span>
          </div>

          <div className="space-y-1">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">INVESTORS</span>
            <span className="font-heading font-bold text-xl text-white block">25+ VCs</span>
            <span className="text-xs text-slate-400">Angel Funds & Mentors</span>
          </div>
        </div>

      </div>
    </section>
  );
}
