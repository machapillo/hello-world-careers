import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import EnergyMiniGame from '@/components/EnergyMiniGame';

export const metadata: Metadata = {
  title: 'Energy Game | OSS Energy Careers',
  description: 'スライダーで重みを調整して、エネルギー出力を安定化させるミニゲーム。',
  openGraph: {
    title: 'Energy Game | OSS Energy Careers',
    description: 'センサーとAIの重み付けで出力をコントロールしよう。',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function EnergyGamePage() {
  const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '') as string;
  return (
    <main>
      <Navbar />
      <section className="section">
        <div className="container">
          <div className="mb-6">
            <a href={`${base}/#hero`} className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white">
              <span>←</span>
              <span>ホームへ戻る</span>
            </a>
          </div>
          <h1 className="h2 text-center mb-6">Sensor × AI × Energy</h1>
          <p className="text-center text-gray-300 mb-8">スライダーで重みを調整して、ターゲットラインに出力を近づけてください。</p>
          <div className="max-w-3xl mx-auto">
            <EnergyMiniGame />
          </div>
        </div>
      </section>
    </main>
  );
}
