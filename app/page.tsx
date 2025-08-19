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

export default function Page() {
  return (
    <main>
      <Hero />
      <Story />
      <Mission />
      <Challenge />
      <Gallery />
      <Team />
      <Values />
      <Jobs />
      <TechCulture />
      <JoinUs />
    </main>
  );
}
