"use client";
import { useEffect, useState } from 'react';

function useCounter(target: number, duration = 1500) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.floor(target * p));
      if (p < 1) requestAnimationFrame(tick);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return value;
}

export const Mission = () => {
  const co2 = useCounter(1203456);
  const energy = useCounter(84567);
  return (
    <section id="mission" className="section">
      <div className="container text-center">
        <h2 className="h2 mb-6">技術で、エネルギーの未来を再発明する。</h2>
        <p className="p max-w-3xl mx-auto mb-10">
          脱炭素社会の実現に向け、私たちはエネルギー監視クラウドで社会インフラを支えています。
          データとAI、回復性の高いクラウドネイティブ技術で、現実世界の課題を解きます。
        </p>
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="rounded-xl border border-gray-800 p-6">
            <div className="text-3xl font-bold text-brand-green">{co2.toLocaleString()} t</div>
            <div className="text-gray-400 mt-1">削減されたCO₂量（累計）</div>
          </div>
          <div className="rounded-xl border border-gray-800 p-6">
            <div className="text-3xl font-bold text-brand-blue">{energy.toLocaleString()} MWh</div>
            <div className="text-gray-400 mt-1">クリーンエネルギー供給量</div>
          </div>
        </div>
      </div>
    </section>
  );
};
