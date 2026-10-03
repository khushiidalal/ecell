import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Speakers from '@/components/Speakers';
import EventsGrid from '@/components/EventsGrid';
import ScheduleTimeline from '@/components/ScheduleTimeline';
import Sponsors from '@/components/Sponsors';
import Gallery from '@/components/Gallery';
import Team from '@/components/Team';
import RegistrationSection from '@/components/RegistrationSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-brand-emerald selection:text-slate-950">
      <Navbar />
      <Hero />
      <About />
      <EventsGrid />
      <Speakers />
      <ScheduleTimeline />
      <Sponsors />
      <Gallery />
      <Team />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
