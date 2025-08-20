import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Challenge } from '@/components/Challenge';
import { Team } from '@/components/Team';
import { TechCulture } from '@/components/TechCulture';
import { JoinUs } from '@/components/JoinUs';
import { Gallery } from '@/components/Gallery';
import { Story } from '@/components/Story';
import { Values } from '@/components/Values';
import { Jobs } from '@/components/Jobs';
import { Navbar } from '@/components/Navbar';
import { CaseStudies } from '@/components/CaseStudies';
import { Testimonials } from '@/components/Testimonials';
import { Benefits } from '@/components/Benefits';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Mission />
      <Challenge />
      <CaseStudies />
      <Testimonials />
      <Benefits />
      <Gallery />
      <Team />
      <Values />
      <Jobs />
      <TechCulture />
      <JoinUs />
    </main>
  );
}
