'use client';

import React from 'react';
import { Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
            <Camera className="w-3.5 h-3.5" />
            <span>VISUAL ARCHIVE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            E-Summit <span className="text-[#00f59b]">Memories</span>
          </h2>
          <p className="text-slate-400 text-sm">Keynote sessions, shark-tank pitches, and valedictory moments at NSUT.</p>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[240px]">
          
          <div className="sm:col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-lg bg-[#0d0f14] border border-[#1a1d26] group">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
              alt="E-Summit Main Auditorium Audience"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-85"></div>
            <div className="absolute bottom-5 left-5">
              <span className="text-[10px] font-mono text-[#00f59b] uppercase tracking-widest block">MAIN AUDITORIUM NSUT</span>
              <h3 className="font-heading text-xl font-bold text-white uppercase mt-0.5">Keynote Address & Opening Ceremony</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[#0d0f14] border border-[#1a1d26] group">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
              alt="Hackathon Coding Sprint"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-85"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-mono text-[#00f59b] uppercase tracking-widest block">48-HR HACKATHON</span>
              <h3 className="font-heading text-sm font-bold text-white uppercase">HackGen Arena</h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg bg-[#0d0f14] border border-[#1a1d26] group">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
              alt="Investor Pitching Round"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-85"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-mono text-[#00f59b] uppercase tracking-widest block">SHARK TANK PITCH</span>
              <h3 className="font-heading text-sm font-bold text-white uppercase">Startup Vault</h3>
            </div>
          </div>

          <div className="sm:col-span-2 lg:col-span-1 relative overflow-hidden rounded-lg bg-[#0d0f14] border border-[#1a1d26] group">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
              alt="Valedictory Ceremony Light Show"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-85"></div>
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-mono text-[#00f59b] uppercase tracking-widest block">PRIZE DISTRIBUTION</span>
              <h3 className="font-heading text-sm font-bold text-white uppercase">₹12.5L Valedictory Night</h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
