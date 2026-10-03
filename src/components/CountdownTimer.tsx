'use client';

import React, { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date('November 15, 2026 00:00:00 UTC+5:30').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-2">
      <p className="text-[11px] font-mono tracking-widest text-slate-400 uppercase mb-3 text-center sm:text-left">
        CONCLAVE COMMENCEMENT
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-lg">
        <div className="bg-[#0d0f14] p-3 sm:p-4 rounded-lg border border-[#1a1d26] text-center">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-white block">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="block text-[9px] font-mono uppercase tracking-widest text-[#00f59b] mt-1">Days</span>
        </div>
        <div className="bg-[#0d0f14] p-3 sm:p-4 rounded-lg border border-[#1a1d26] text-center">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-white block">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="block text-[9px] font-mono uppercase tracking-widest text-[#00f59b] mt-1">Hours</span>
        </div>
        <div className="bg-[#0d0f14] p-3 sm:p-4 rounded-lg border border-[#1a1d26] text-center">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-white block">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="block text-[9px] font-mono uppercase tracking-widest text-[#00f59b] mt-1">Mins</span>
        </div>
        <div className="bg-[#0d0f14] p-3 sm:p-4 rounded-lg border border-[#1a1d26] text-center">
          <span className="font-heading font-bold text-2xl sm:text-3xl text-white block">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="block text-[9px] font-mono uppercase tracking-widest text-[#00f59b] mt-1">Secs</span>
        </div>
      </div>
    </div>
  );
}
