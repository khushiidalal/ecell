'use client';

import React from 'react';
import { speakersData } from '@/data/speakersData';
import { Mic, Building } from 'lucide-react';

export default function Speakers() {
  return (
    <section id="speakers" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1a1d26]">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
              <Mic className="w-3.5 h-3.5" />
              <span>KEYNOTE STALWARTS & MENTORS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Speakers & <span className="text-[#00f59b]">VC Investors</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Learn directly from India&apos;s prominent unicorn founders, venture capitalists, and industry stalwarts.
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {speakersData.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-[#0d0f14] rounded-lg overflow-hidden border border-[#1a1d26] hover:border-slate-600 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Speaker Image */}
                <div className="relative h-60 overflow-hidden bg-[#07080a]">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-85"></div>
                  
                  <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded bg-[#07080a]/90 backdrop-blur-md border border-[#1a1d26] text-[10px] font-mono text-[#00f59b]">
                    {speaker.tag}
                  </div>
                </div>

                {/* Speaker Details */}
                <div className="p-5 space-y-2">
                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#00f59b] transition-colors">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-[#00f59b] shrink-0" />
                    <span className="truncate">{speaker.role}, <strong className="text-slate-200">{speaker.company}</strong></span>
                  </p>

                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 pt-1">
                    {speaker.bio}
                  </p>
                </div>
              </div>

              {/* Topic Callout Banner */}
              <div className="p-4 bg-[#07080a] border-t border-[#1a1d26]">
                <span className="text-[9px] font-mono text-[#00f59b] uppercase block">KEYNOTE SESSION TOPIC:</span>
                <p className="text-xs font-medium text-slate-200 mt-0.5 line-clamp-2">
                  &ldquo;{speaker.topic}&rdquo;
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
