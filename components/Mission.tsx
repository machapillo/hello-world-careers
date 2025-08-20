"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    <section id="mission" className="section relative overflow-hidden">
      <MissionBackdrop />
      <div className="container relative z-10 text-center">
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

const MissionBackdrop = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {/* deep space gradient with energy pulses */}
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(800px 300px at 15% 30%, rgba(0,195,137,0.22), transparent),\
             radial-gradient(900px 340px at 85% 75%, rgba(0,113,197,0.20), transparent)'
        }}
      />
      {/* animated energy beams */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-1/4 h-0.5 bg-gradient-to-r from-brand-green via-white to-brand-blue"
        initial={{ width: 0, opacity: 0.7 }}
        whileInView={{ width: '76%', opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 top-[45%] h-0.5 bg-gradient-to-r from-brand-blue/70 via-white/70 to-brand-green/70"
        initial={{ width: 0, opacity: 0.5 }}
        whileInView={{ width: '56%', opacity: 0.9 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 2.8, delay: 0.2, ease: 'easeOut' }}
      />
      {/* subtle particle field */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage:
          'radial-gradient(#5eead4 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        backgroundPosition: '0 0, 11px 11px'
      }} />
      {/* vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/60" />
    </div>
  );
};
