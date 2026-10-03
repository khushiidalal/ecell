'use client';

import React from 'react';
import { Lightbulb, Rocket, ShieldCheck, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
              <span>// ABOUT THE CONCLAVE</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Fostering India&apos;s Next <br />
              <span className="text-[#00f59b]">Unicorn Founders</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              The Entrepreneurship Cell (E-Cell) of Netaji Subhas University of Technology (NSUT), Dwarka, Delhi is a student-led initiative dedicated to cultivating venture-building capabilities across Indian academic campuses.
            </p>

            <p className="text-slate-400 text-sm leading-relaxed">
              E-Summit 2026 bridges student builders with venture capitalists, tech executives, angel networks, and government startup initiatives like Startup India and Delhi Startup Policy.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#0d0f14] p-4 rounded-lg border border-[#1a1d26] space-y-1">
                <div className="flex items-center space-x-2 text-[#00f59b]">
                  <Lightbulb className="w-4 h-4" />
                  <h4 className="font-heading text-xs font-bold uppercase text-white">Ideate</h4>
                </div>
                <p className="text-xs text-slate-400">Zero-to-one business blueprints.</p>
              </div>

              <div className="bg-[#0d0f14] p-4 rounded-lg border border-[#1a1d26] space-y-1">
                <div className="flex items-center space-x-2 text-[#00f59b]">
                  <Rocket className="w-4 h-4" />
                  <h4 className="font-heading text-xs font-bold uppercase text-white">Incubate</h4>
                </div>
                <p className="text-xs text-slate-400">NSUT IIF incubation support.</p>
              </div>

              <div className="bg-[#0d0f14] p-4 rounded-lg border border-[#1a1d26] space-y-1">
                <div className="flex items-center space-x-2 text-[#00f59b]">
                  <Zap className="w-4 h-4" />
                  <h4 className="font-heading text-xs font-bold uppercase text-white">Accelerate</h4>
                </div>
                <p className="text-xs text-slate-400">48-hour sprints & technical hackathons.</p>
              </div>

              <div className="bg-[#0d0f14] p-4 rounded-lg border border-[#1a1d26] space-y-1">
                <div className="flex items-center space-x-2 text-[#00f59b]">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="font-heading text-xs font-bold uppercase text-white">Invest</h4>
                </div>
                <p className="text-xs text-slate-400">Direct VC pitch & term-sheet access.</p>
              </div>
            </div>

          </div>

          {/* Right Column: Technical Campus Showcase Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-lg overflow-hidden border border-[#1a1d26] bg-[#0d0f14]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
                alt="NSUT E-Cell Team Collaborating"
                className="w-full h-[380px] sm:h-[440px] object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-[#0d0f14]/90 backdrop-blur-md rounded-md border border-[#1a1d26]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono text-[#00f59b] uppercase tracking-wider">NSUT IIF INCUBATION FOUNDATION</p>
                    <h4 className="font-heading text-xs font-bold text-white uppercase mt-0.5">Netaji Subhas University of Technology</h4>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#00f59b]/10 text-[#00f59b] text-[10px] font-mono font-bold border border-[#00f59b]/30">
                    NEW DELHI
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
