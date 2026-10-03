'use client';

import React from 'react';
import { Mail, MapPin, Phone, Twitter, Linkedin, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#07080a] border-t border-[#1a1d26] py-14 relative z-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Column */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-md bg-[#13161f] border border-[#1a1d26] flex items-center justify-center font-mono font-bold text-xs text-[#00f59b]">
                E
              </div>
              <span className="font-heading font-bold text-sm tracking-tight text-white">
                E-CELL <span className="text-[#00f59b]">NSUT</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Entrepreneurship Cell, Netaji Subhas University of Technology (NSUT), Dwarka, New Delhi.
            </p>
          </div>

          {/* Summit Anchor Links */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Summit Navigation</h4>
            <ul className="space-y-1.5 font-mono text-xs">
              <li><a href="#about" className="hover:text-[#00f59b] transition-colors">About E-Summit</a></li>
              <li><a href="#events" className="hover:text-[#00f59b] transition-colors">Competitions & ₹ Prizes</a></li>
              <li><a href="#speakers" className="hover:text-[#00f59b] transition-colors">Keynote Speakers & VCs</a></li>
              <li><a href="#schedule" className="hover:text-[#00f59b] transition-colors">Summit Schedule</a></li>
              <li><a href="#register" className="hover:text-[#00f59b] transition-colors">Delegate Ticket Pass</a></li>
            </ul>
          </div>

          {/* Campus Location */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Campus Address</h4>
            <div className="space-y-2">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#00f59b] shrink-0 mt-0.5" />
                <span>E-Cell, NSUT IIF Incubation Foundation, Sector 3, Dwarka, New Delhi - 110078</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00f59b] shrink-0" />
                <span>ecell@nsut.ac.in</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00f59b] shrink-0" />
                <span>+91 11 2509 9050</span>
              </p>
            </div>
          </div>

          {/* Connect Handles */}
          <div className="space-y-2.5">
            <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">Connect Handles</h4>
            <p className="text-slate-400">Follow E-Cell NSUT for real-time announcements & results.</p>
            <div className="flex items-center space-x-2 pt-1">
              <a href="https://ecellnsut.in" target="_blank" rel="noreferrer" className="p-2 rounded bg-[#0d0f14] border border-[#1a1d26] text-slate-400 hover:text-[#00f59b] hover:border-slate-600 transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded bg-[#0d0f14] border border-[#1a1d26] text-slate-400 hover:text-[#00f59b] hover:border-slate-600 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded bg-[#0d0f14] border border-[#1a1d26] text-slate-400 hover:text-[#00f59b] hover:border-slate-600 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 rounded bg-[#0d0f14] border border-[#1a1d26] text-slate-400 hover:text-[#00f59b] hover:border-slate-600 transition-all">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-[#1a1d26] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 font-mono text-[11px]">
          <p>&copy; 2026 Entrepreneurship Cell, NSUT New Delhi. All Rights Reserved.</p>
          <p>Architectural Editorial Redesign for E-Summit &apos;26.</p>
        </div>

      </div>
    </footer>
  );
}
