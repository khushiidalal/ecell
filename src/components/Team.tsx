'use client';

import React from 'react';
import { teamData } from '@/data/scheduleData';
import { Users, Linkedin } from 'lucide-react';

export default function Team() {
  return (
    <section id="team" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
            <Users className="w-3.5 h-3.5" />
            <span>STUDENT LEADERSHIP BOARD</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
            Organizing <span className="text-[#00f59b]">Team</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Student leaders from Netaji Subhas University of Technology spearheading E-Summit 2026.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamData.map((member) => (
            <div
              key={member.id}
              className="bg-[#0d0f14] rounded-lg overflow-hidden border border-[#1a1d26] hover:border-slate-600 transition-all group"
            >
              <div className="relative h-60 overflow-hidden bg-[#07080a]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter brightness-95 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-transparent opacity-85"></div>
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#07080a]/90 border border-[#1a1d26] text-[10px] font-mono text-[#00f59b]">
                  {member.team}
                </div>
              </div>

              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-base font-bold text-white group-hover:text-[#00f59b] transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    {member.role}
                  </p>
                </div>
                <a
                  href="#"
                  className="p-2 rounded bg-[#07080a] border border-[#1a1d26] text-slate-400 hover:text-[#00f59b] hover:border-slate-600 transition-all"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
