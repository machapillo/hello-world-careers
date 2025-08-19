import { Hero } from '@/components/Hero';
import { Mission } from '@/components/Mission';
import { Challenge } from '@/components/Challenge';
import { Team } from '@/components/Team';
import { TechCulture } from '@/components/TechCulture';
import { JoinUs } from '@/components/JoinUs';

export default function Page() {
  return (
    <main>
      <Hero />
      <Mission />
      <Challenge />
      <Team />
      <TechCulture />
      <JoinUs />
    </main>
  );
}
