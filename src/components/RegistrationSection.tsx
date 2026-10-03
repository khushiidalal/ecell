'use client';

import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Ticket, AlertCircle, Loader2 } from 'lucide-react';
import { RegistrationFormData } from '@/types';

export default function RegistrationSection() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    phone: '',
    college: '',
    yearOfStudy: '2nd Year',
    selectedEvent: 'Ideathon 2026',
    teamName: '',
    agreeTerms: true,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof RegistrationFormData, string>>>({});
  const [loading, setLoading] = useState(false);
  const [ticketResult, setTicketResult] = useState<{
    ticketId: string;
    fullName: string;
    email: string;
    college: string;
    selectedEvent: string;
    teamName: string;
    timestamp: string;
  } | null>(null);

  const validate = () => {
    const newErrors: Partial<Record<keyof RegistrationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid college or personal email address required.';
    }

    if (!formData.phone.trim() || formData.phone.length < 10) {
      newErrors.phone = 'Valid 10-digit mobile number required.';
    }

    if (!formData.college.trim()) {
      newErrors.college = 'University or Institute name is required.';
    }

    if (!formData.selectedEvent) {
      newErrors.selectedEvent = 'Please select a primary competition or pass.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      // Node.js Backend API Request
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (json.success) {
        setTicketResult(json.data);
      } else {
        alert(json.message || 'Registration failed. Please check details.');
      }
    } catch (err) {
      console.error(err);
      alert('Network error while connecting to server api.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setTicketResult(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      college: '',
      yearOfStudy: '2nd Year',
      selectedEvent: 'Ideathon 2026',
      teamName: '',
      agreeTerms: true,
    });
    setErrors({});
  };

  return (
    <section id="register" className="py-24 relative z-10 bg-[#07080a] border-b border-[#1a1d26]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0d0f14] border border-[#1a1d26] text-xs font-mono text-[#00f59b]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OFFICIAL DELEGATE REGISTRATION</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
            Register For <span className="text-[#00f59b]">E-SUMMIT &apos;26</span>
          </h2>
          <p className="text-slate-400 text-sm">
            Instant digital confirmation ticket pass generated upon Node.js server submission.
          </p>
        </div>

        {/* Technical Form Box */}
        <div className="bg-[#0d0f14] rounded-lg p-7 sm:p-10 border border-[#1a1d26]">
          
          {!ticketResult ? (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              
              {/* Grid 2 Cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-md bg-[#07080a] border text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                      errors.fullName ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#1a1d26] focus:border-[#00f59b]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-rose-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="rahul.sharma@nsut.ac.in"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-md bg-[#07080a] border text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                      errors.email ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#1a1d26] focus:border-[#00f59b]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-rose-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

              </div>

              {/* Grid 2 Cols */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                
                {/* Phone Number */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-md bg-[#07080a] border text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                      errors.phone ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#1a1d26] focus:border-[#00f59b]'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-rose-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                {/* College / Institute */}
                <div>
                  <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    College / University *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NSUT Delhi / DTU / IIT Delhi"
                    value={formData.college}
                    onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                    className={`w-full px-3.5 py-3 rounded-md bg-[#07080a] border text-xs font-mono text-white placeholder-slate-600 focus:outline-none transition-all ${
                      errors.college ? 'border-rose-500 focus:ring-1 focus:ring-rose-500' : 'border-[#1a1d26] focus:border-[#00f59b]'
                    }`}
                  />
                  {errors.college && (
                    <p className="text-rose-400 text-[11px] font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.college}
                    </p>
                  )}
                </div>

              </div>

              {/* Event Select Dropdown */}
              <div>
                <label id="eventSelectLabel" className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Primary Competition / Track Interest *
                </label>
                <select
                  id="eventSelect"
                  value={formData.selectedEvent}
                  onChange={(e) => setFormData({ ...formData, selectedEvent: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-md bg-[#07080a] border border-[#1a1d26] text-xs font-mono text-white focus:outline-none focus:border-[#00f59b] transition-all"
                >
                  <option value="Startup Vault (Shark Tank NSUT)">Startup Vault (Shark Tank NSUT - ₹5.0L Pool)</option>
                  <option value="Ideathon 2026">Ideathon 2026 (B-Plan Challenge - ₹3.0L Pool)</option>
                  <option value="HackGen 48.0">HackGen 48.0 (48-Hr Hackathon - ₹2.5L Pool)</option>
                  <option value="Case Conquest">Case Conquest (Corporate Case Study - ₹1.5L Pool)</option>
                  <option value="Market Mavericks">Market Mavericks (Stock/Crypto Trading - ₹1.0L Pool)</option>
                  <option value="All-Access General Summit Pass">All-Access General Summit Delegate Pass</option>
                </select>
              </div>

              {/* Optional Team Name */}
              <div>
                <label className="block text-[11px] font-mono font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Team Name (If participating in team events)
                </label>
                <input
                  type="text"
                  placeholder="e.g. ApexInnovators"
                  value={formData.teamName}
                  onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                  className="w-full px-3.5 py-3 rounded-md bg-[#07080a] border border-[#1a1d26] text-xs font-mono text-white placeholder-slate-600 focus:outline-none focus:border-[#00f59b] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-md font-mono font-bold text-xs tracking-wider uppercase bg-[#00f59b] text-[#07080a] hover:bg-[#00d989] transition-all flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Processing Node.js Server Request...
                  </>
                ) : (
                  <>
                    Generate Summit Delegate Ticket &rarr;
                  </>
                )}
              </button>

            </form>
          ) : (
            /* Ticket Output Card */
            <div className="text-center py-4 space-y-6 animate-fade-in">
              
              <div className="w-16 h-16 mx-auto rounded-full bg-[#00f59b]/10 border border-[#00f59b]/40 flex items-center justify-center text-[#00f59b]">
                <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h3 className="font-heading text-2xl font-bold text-white uppercase">
                  Registration Confirmed
                </h3>
                <p className="text-slate-300 text-xs font-mono">
                  DELEGATE PASS ISSUED FOR E-SUMMIT &apos;26 NSUT
                </p>
              </div>

              {/* Digital Pass Ticket Box */}
              <div className="p-5 rounded-lg bg-[#07080a] border border-[#00f59b]/50 max-w-md mx-auto text-left space-y-2.5 font-mono text-xs text-slate-300 shadow-xl">
                <div className="flex items-center justify-between border-b border-[#1a1d26] pb-2.5">
                  <div className="flex items-center space-x-2">
                    <Ticket className="w-4 h-4 text-[#00f59b]" />
                    <span className="font-heading text-xs font-bold text-white uppercase">DELEGATE TICKET PASS</span>
                  </div>
                  <span className="text-[10px] text-[#00f59b] font-bold bg-[#00f59b]/10 px-2 py-0.5 rounded border border-[#00f59b]/30">
                    VERIFIED
                  </span>
                </div>

                <div className="space-y-1 text-slate-300">
                  <p><span className="text-slate-500">TICKET_ID:</span> <span className="text-[#00f59b] font-bold">{ticketResult.ticketId}</span></p>
                  <p><span className="text-slate-500">DELEGATE:</span> <span className="text-white font-bold">{ticketResult.fullName}</span></p>
                  <p><span className="text-slate-500">COLLEGE:</span> <span className="text-slate-200">{ticketResult.college}</span></p>
                  <p><span className="text-slate-500">EVENT_TRACK:</span> <span className="text-white">{ticketResult.selectedEvent}</span></p>
                  {ticketResult.teamName !== 'N/A' && (
                    <p><span className="text-slate-500">TEAM_NAME:</span> <span className="text-slate-200">{ticketResult.teamName}</span></p>
                  )}
                  <p><span className="text-slate-500">LOCATION:</span> <span className="text-slate-300">Main Campus Auditorium, NSUT Dwarka</span></p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-5 py-2.5 rounded-md font-mono text-xs font-semibold tracking-wider uppercase bg-[#07080a] border border-[#1a1d26] text-slate-300 hover:text-white hover:border-slate-500 transition-colors"
              >
                Register Another Participant
              </button>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}
