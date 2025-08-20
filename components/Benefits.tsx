"use client";
import { motion } from 'framer-motion';

const perks = [
  {
    title: 'リモート・フレックス',
    desc: '場所や時間に縛られず、成果に集中できる働き方。',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 7h18M3 13h18M3 17h10" />
      </svg>
    )
  },
  {
    title: '学習支援/カンファレンス',
    desc: '書籍・SaaS・カンファレンス参加を会社がサポート。',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 6l8-3 8 3v12l-8 3-8-3V6z" />
        <path d="M12 9v10" />
      </svg>
    )
  },
  {
    title: 'ハイパフォーマンス環境',
    desc: '最新ノートPC/外部ディスプレイ/必要周辺機器を提供。',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
      </svg>
    )
  },
  {
    title: '副業可/OSS貢献',
    desc: '副業ポリシーの明確化とOSS活動を推奨。',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 3v18M3 12h18" />
      </svg>
    )
  },
  {
    title: '健康/メンタルケア',
    desc: '健康診断・オンライン相談など予防に投資。',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M12 21s-7-4.35-7-10a7 7 0 0114 0c0 5.65-7 10-7 10z" />
      </svg>
    )
  },
  {
    title: '成果連動報酬',
    desc: 'インパクトに応じた透明性ある評価と報酬。',
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6 text-brand-blue" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 17l6-6 4 4 7-7" />
        <path d="M3 21h18" />
      </svg>
    )
  }
];

export const Benefits = () => {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <h2 className="h2 mb-8 text-gradient">Benefits</h2>
        <p className="p mb-10">挑戦し続けるための、しなやかで強い環境を用意しています。</p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.04 }}
              className="card p-5"
            >
              <div className="flex items-start gap-3">
                <div className="shrink-0 rounded-md bg-white/5 ring-1 ring-white/10 p-2">{p.icon}</div>
                <div>
                  <h3 className="font-display text-lg mb-1">{p.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
