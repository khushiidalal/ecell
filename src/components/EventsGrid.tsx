'use client';

import React, { useState } from 'react';
import { eventsData } from '@/data/eventsData';
import { IndianRupee, Trophy, Calendar, MapPin, Users, ArrowUpRight, TrendingUp, Lightbulb, Code, Briefcase, LineChart } from 'lucide-react';

export default function EventsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Funding & Pitch', 'B-Plan Competition', '48-Hr Hackathon', 'Strategy & Consulting', 'Fintech Simulation'];

  const filteredEvents = selectedCategory === 'All' 
    ? eventsData 
    : eventsData.filter(e => e.category === selectedCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-[#00f59b]" />;
      case 'Lightbulb': return <Lightbulb className="w-5 h-5 text-[#00f59b]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#00f59b]" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-[#ffb703]" />;
      case 'LineChart': return <LineChart className="w-5 h-5 text-[#00f59b]" />;
      default: return <Trophy className="w-5 h-5 text-[#00f59b]" />;
    }
  };

  const handleRegisterClick = (eventTitle: string) => {
    const registerSection = document.getElementById('register');
    const selectEl = document.getElementById('eventSelect') as HTMLSelectElement | null;
    if (selectEl) {
      const matchingOption = Array.from(selectEl.options).find(opt => opt.value.includes(eventTitle) || eventTitle.includes(opt.value));
      if (matchingOption) {
        selectEl.value = matchingOption.value;
      }
    }
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-6 border-b border-[#1a1d26]">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
              <Trophy className="w-3.5 h-3.5" />
              <span>FLAGSHIP COMPETITIONS & ₹ CASH PRIZES</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Summit <span className="text-[#00f59b]">Competitions</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm max-w-md">
            Compete for <strong className="text-white font-semibold">₹12,50,000+ in total cash prizes, startup grants, and direct VC funding rounds</strong>.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-md text-xs font-mono tracking-wider uppercase transition-all ${
                selectedCategory === cat
                  ? 'bg-[#00f59b] text-[#07080a] font-bold'
                  : 'bg-[#0d0f14] text-slate-400 border border-[#1a1d26] hover:border-slate-600 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#0d0f14] rounded-lg p-6 border border-[#1a1d26] hover:border-slate-600 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon & Category Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-md bg-[#07080a] border border-[#1a1d26] flex items-center justify-center">
                    {getIcon(event.iconName)}
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#07080a] border border-[#1a1d26] text-[10px] font-mono text-slate-300 uppercase tracking-wider">
                    {event.category}
                  </span>
                </div>

                {/* Event Title & Description */}
                <h3 className="font-heading text-xl font-bold text-white mb-1.5 group-hover:text-[#00f59b] transition-colors">
                  {event.title}
                </h3>
                <p className="text-xs font-semibold text-slate-300 mb-3">
                  {event.tagline}
                </p>
                <p className="text-slate-400 text-xs leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Technical Meta Specs */}
                <div className="space-y-2 py-3 border-t border-[#1a1d26] text-xs font-mono">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5 text-[#00f59b]" /> Prize Pool:
                    </span>
                    <span className="font-heading font-bold text-sm text-[#00f59b]">
                      {event.prizePool}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Team Size:
                    </span>
                    <span className="text-slate-200">
                      {event.teamSize}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Date:
                    </span>
                    <span className="text-slate-200">
                      {event.date}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" /> Venue:
                    </span>
                    <span className="text-slate-300 truncate max-w-[170px]">
                      {event.venue}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="mt-6 pt-4 border-t border-[#1a1d26] flex items-center justify-between">
                <div>
                  <span className="text-[9px] font-mono text-slate-400 uppercase block">Entry Fee</span>
                  <span className="text-xs font-mono font-bold text-white">{event.entryFee}</span>
                </div>
                <button
                  onClick={() => handleRegisterClick(event.title)}
                  className="px-3.5 py-2 rounded-md font-mono text-xs font-bold text-[#07080a] bg-[#00f59b] hover:bg-[#00d989] transition-all flex items-center gap-1"
                >
                  <span>Register</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
