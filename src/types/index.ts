export interface EventItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  prizePool: string; // e.g. "₹2,50,000"
  entryFee: string;  // e.g. "₹299 / Team" or "Free"
  teamSize: string;  // e.g. "2 - 4 Members"
  date: string;
  venue: string;
  iconName: string;
  color: 'cyan' | 'emerald' | 'violet' | 'amber';
}

export interface SpeakerItem {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  image: string;
  topic: string;
  tag: string;
}

export interface ScheduleItem {
  id: string;
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  title: string;
  description: string;
  location: string;
  category: string;
}

export interface SponsorItem {
  id: string;
  name: string;
  tier: 'Title Sponsor' | 'Powered By' | 'Associate Sponsor' | 'Ecosystem Partner';
  logoText: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  team: 'Executive Board' | 'Events & Tech' | 'Corporate Relations' | 'Design & Media';
  image: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  yearOfStudy: string;
  selectedEvent: string;
  teamName?: string;
  agreeTerms: boolean;
}
