"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Case = {
  id: string;
  title: string;
  customer: string;
  summary: string;
  impact: string;
  cover: string;
};

const cases: Case[] = [
  {
    id: 'grid-optimizer',
    title: '再エネの変動吸収アルゴリズム',
    customer: '電力小売 A 社',
    summary: '需要予測×蓄電池制御でインバランスを30%削減',
    impact: 'CO2 年間 12,300t 削減、供給安定性を向上',
    cover: 'images/cases/case-1.svg?v=2'
  },
  {
    id: 'realtime-monitoring',
    title: 'マルチサイトエネルギー監視',
    customer: 'スマートビル運営 B 社',
    summary: 'MQ/ストリーミング基盤で秒単位の監視を実現',
    impact: '異常検知の平均検知時間を87%短縮',
    cover: 'images/cases/case-2.svg?v=2'
  },
  {
    id: 'ops-slo',
    title: 'Kubernetes SLO 可観測性',
    customer: 'SaaS プロバイダ C 社',
    summary: '自動回復/セルフヒーリングで MTTR を削減',
    impact: '障害対応コストを40%圧縮、SLO 達成率+12pt',
    cover: 'images/cases/case-3.svg?v=2'
  }
];

export const CaseStudies = () => {
  const [active, setActive] = useState<Case | null>(null);
  return (
    <section id="cases" className="section">
      <div className="container">
        <h2 className="h2 mb-8 text-gradient">Case Studies</h2>
        <p className="p mb-10">課題→解決→成果を、実例で。</p>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <button key={c.id} onClick={() => setActive(c)} className="card text-left overflow-hidden group">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={c.cover}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/425455/pexels-photo-425455.jpeg?auto=compress&cs=tinysrgb&w=1200'; }}
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-gray-400">{c.customer}</p>
                <h3 className="mt-1 font-display text-lg">{c.title}</h3>
                <p className="text-sm text-gray-300 mt-2">{c.summary}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div className="fixed inset-0 z-50 bg-black/70 backdrop-blur" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <div className="absolute inset-0 grid place-items-center p-6">
              <motion.div className="max-w-2xl w-full card bg-black/60" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={active.cover}
                    alt=""
                    className="h-full w-full object-cover"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.pexels.com/photos/425455/pexels-photo-425455.jpeg?auto=compress&cs=tinysrgb&w=1200'; }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs text-gray-400">{active.customer}</p>
                  <h3 className="mt-1 font-display text-2xl">{active.title}</h3>
                  <p className="mt-3 text-gray-300">{active.summary}</p>
                  <div className="mt-4 p-4 rounded-lg bg-white/5 border border-white/10">
                    <p className="text-sm"><span className="text-brand-green font-medium">Impact: </span>{active.impact}</p>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <button className="btn-secondary" onClick={() => setActive(null)}>閉じる</button>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
