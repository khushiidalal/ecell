'use client';

import React from 'react';
import { sponsorsData } from '@/data/scheduleData';
import { Handshake } from 'lucide-react';

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
            <Handshake className="w-3.5 h-3.5" />
            <span>ECOSYSTEM & VENTURE PARTNERS</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Backed By <span className="text-[#00f59b]">Industry Titans</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Supported by leading venture capital funds, cloud providers, and startup accelerators.
          </p>
        </div>

        {/* Matrix of Partners */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sponsorsData.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-[#0d0f14] rounded-lg p-5 border border-[#1a1d26] hover:border-slate-600 transition-all flex flex-col items-center justify-center text-center group"
            >
              <div className="h-10 flex items-center justify-center font-heading font-bold text-base text-slate-200 group-hover:text-[#00f59b] transition-colors tracking-wider uppercase">
                {sponsor.logoText}
              </div>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest mt-2">
                {sponsor.tier}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
