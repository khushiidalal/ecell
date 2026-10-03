import { ScheduleItem, SponsorItem, TeamMember } from '@/types';

export const scheduleData: ScheduleItem[] = [
  // Day 1
  {
    id: 's1',
    day: 'Day 1',
    time: '09:30 AM - 11:00 AM',
    title: 'Grand Inauguration & Lamp Lighting',
    description: 'Welcome address by Vice Chancellor NSUT, Patron E-Cell, and Chief Guest keynotes.',
    location: 'Main Auditorium',
    category: 'Ceremony',
  },
  {
    id: 's2',
    day: 'Day 1',
    time: '11:30 AM - 01:30 PM',
    title: 'Ideathon 2026: Round 1 Presentations',
    description: 'Top 30 shortlisted teams present business models before domain expert judges.',
    location: 'Senate Hall',
    category: 'Competition',
  },
  {
    id: 's3',
    day: 'Day 1',
    time: '03:00 PM - 04:30 PM',
    title: 'Fireside Chat: Building Unicorns in Bharat',
    description: 'Anupam Rasayan (Founder, Fintech ScaleUp) in conversation with student entrepreneurs.',
    location: 'Main Auditorium',
    category: 'Keynote',
  },
  {
    id: 's4',
    day: 'Day 1',
    time: '06:00 PM',
    title: 'HackGen 48.0 Kickoff',
    description: 'Release of tracks, mentor onboarding, and start of the 48-hour hackathon timer.',
    location: 'Tech Block 3',
    category: 'Hackathon',
  },

  // Day 2
  {
    id: 's5',
    day: 'Day 2',
    time: '10:00 AM - 01:00 PM',
    title: 'Startup Vault: Live VC Pitching',
    description: 'Shortlisted startups pitch live for equity investment & incubators.',
    location: 'Main Auditorium',
    category: 'Funding Pitch',
  },
  {
    id: 's6',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    title: 'Case Conquest Final Defense',
    description: 'Teams defend corporate turnaround strategies before consulting industry leaders.',
    location: 'Management Block',
    category: 'Competition',
  },
  {
    id: 's7',
    day: 'Day 2',
    time: '05:00 PM - 06:30 PM',
    title: 'VC Panel: Demystifying Seed Capital',
    description: 'Interactive Q&A on valuation, term sheets, and investor red flags.',
    location: 'Seminar Hall 1',
    category: 'Panel',
  },

  // Day 3
  {
    id: 's8',
    day: 'Day 3',
    time: '10:00 AM - 12:00 PM',
    title: 'Market Mavericks Trading Showdown',
    description: 'Final live trading session with dynamic simulated market shocks.',
    location: 'Computer Center 2',
    category: 'Fintech',
  },
  {
    id: 's9',
    day: 'Day 3',
    time: '01:30 PM - 03:30 PM',
    title: 'HackGen 48.0 Expo & Jury Review',
    description: 'Working prototype demos by top 10 hacker teams.',
    location: 'Tech Block Hall',
    category: 'Hackathon',
  },
  {
    id: 's10',
    day: 'Day 3',
    time: '05:00 PM - 07:30 PM',
    title: 'Valedictory & Prize Distribution',
    description: 'Award ceremony featuring ₹12,50,000+ total prize distribution & closing concert.',
    location: 'Open Air Theatre (OAT)',
    category: 'Ceremony',
  },
];

export const sponsorsData: SponsorItem[] = [
  { id: 'sp1', name: 'Peak XV Partners', tier: 'Title Sponsor', logoText: 'PEAK XV' },
  { id: 'sp2', name: 'Google for Startups', tier: 'Powered By', logoText: 'Google Cloud' },
  { id: 'sp3', name: 'Microsoft Founders Hub', tier: 'Powered By', logoText: 'Microsoft' },
  { id: 'sp4', name: 'Unstop', tier: 'Ecosystem Partner', logoText: 'unstop' },
  { id: 'sp5', name: 'AWS Activate', tier: 'Associate Sponsor', logoText: 'aws activate' },
  { id: 'sp6', name: 'Paytm Build', tier: 'Associate Sponsor', logoText: 'Paytm' },
];

export const teamData: TeamMember[] = [
  { id: 't1', name: 'Aarav Gupta', role: 'President, E-Cell NSUT', team: 'Executive Board', image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80' },
  { id: 't2', name: 'Ananya Verma', role: 'Vice President & Convener', team: 'Executive Board', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80' },
  { id: 't3', name: 'Rohan Sharma', role: 'Head of Tech & Innovation', team: 'Events & Tech', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' },
  { id: 't4', name: 'Priya Nair', role: 'Head of Corporate Alliances', team: 'Corporate Relations', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80' },
];
