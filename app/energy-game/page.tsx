"use client";
import { Navbar } from '@/components/Navbar';
import EnergyMiniGame from '@/components/EnergyMiniGame';

export default function EnergyGamePage() {
  return (
    <main>
      <Navbar />
      <section className="section">
        <div className="container">
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
