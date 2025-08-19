import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Challenge } from '@/components/Challenge';
import { Team } from '@/components/Team';
import { TechCulture } from '@/components/TechCulture';
import { JoinUs } from '@/components/JoinUs';
import { Gallery } from '@/components/Gallery';

export default function Page() {
  return (
    <main>
      <Hero />
      <Mission />
      <Challenge />
      <Gallery />
      <Team />
      <TechCulture />
      <JoinUs />
    </main>
  );
}
