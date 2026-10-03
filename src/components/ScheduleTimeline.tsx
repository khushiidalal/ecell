'use client';

import React, { useState } from 'react';
import { scheduleData } from '@/data/scheduleData';
import { Calendar, Clock, MapPin } from 'lucide-react';

export default function ScheduleTimeline() {
  const [activeDay, setActiveDay] = useState<'Day 1' | 'Day 2' | 'Day 3'>('Day 1');

  const days: ('Day 1' | 'Day 2' | 'Day 3')[] = ['Day 1', 'Day 2', 'Day 3'];

  const filteredSchedule = scheduleData.filter((item) => item.day === activeDay);

  return (
    <section id="schedule" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
            <Calendar className="w-3.5 h-3.5" />
            <span>CONCLAVE TIMETABLE</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
            Summit <span className="text-[#00f59b]">Schedule</span>
          </h2>
          <p className="text-slate-400 text-xs font-mono">
            NOV 15 - NOV 17, 2026 &bull; NSUT CAMPUS DWARKA
          </p>
        </div>

        {/* Day Selector Tabs */}
        <div className="flex justify-center gap-2 mb-14">
          {days.map((day, idx) => (
            <button
              key={day}
              onClick={() => setActiveDay(day)}
              className={`px-5 py-2.5 rounded-md font-mono text-xs uppercase tracking-wider transition-all ${
                activeDay === day
                  ? 'bg-[#00f59b] text-[#07080a] font-bold'
                  : 'bg-[#0d0f14] text-slate-400 border border-[#1a1d26] hover:border-slate-600 hover:text-white'
              }`}
            >
              {day} &bull; Nov {15 + idx}
            </button>
          ))}
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l border-[#1a1d26] ml-4 sm:ml-36 space-y-8">
          {filteredSchedule.map((item) => (
            <div key={item.id} className="relative pl-7 group">
              
              {/* Node Dot */}
              <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-[#07080a] border-2 border-[#00f59b] group-hover:bg-[#00f59b] transition-all"></div>
              
              {/* Time Label */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-xs font-mono font-bold text-[#00f59b] tracking-wider uppercase mb-2 sm:mb-0 sm:w-28 sm:text-right flex items-center gap-1 sm:justify-end">
                <Clock className="w-3 h-3 sm:hidden" />
                {item.time}
              </div>

              {/* Card Content */}
              <div className="bg-[#0d0f14] p-5 rounded-lg border border-[#1a1d26] hover:border-slate-600 transition-colors space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2 py-0.5 rounded bg-[#07080a] border border-[#1a1d26] text-[10px] font-mono text-slate-300 uppercase">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#00f59b]" />
                    {item.location}
                  </span>
                </div>

                <h3 className="font-heading text-base font-bold text-white group-hover:text-[#00f59b] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
