"use client";
import { motion } from 'framer-motion';

const items = [
  {
    k: 'Problem',
    title: 'エネルギーは見えると最適化できる',
    body: '分散電源・EV・蓄電の普及で、需要と供給は複雑化。見える化と自動制御が鍵になります。',
  },
  {
    k: 'Solution',
    title: 'センサー×クラウド×AIで最適制御',
    body: '現場からのデータをリアルタイムに収集・解析。需給・コスト・CO2最小化のための制御を自動化します。',
  },
  {
    k: 'Impact',
    title: '事業と地球の両立を加速',
    body: '効率的な運用と脱炭素を同時に実現。企業の競争力と社会価値を高めます。',
  },
];

export const Story = () => {
  return (
    <section id="story" className="section">
      <div className="container">
        <h2 className="h2 mb-10 text-center">Problem → Solution → Impact</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.k}
              className="card p-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="text-brand-green text-xs font-semibold mb-2">{it.k}</div>
              <div className="font-semibold text-xl mb-2">{it.title}</div>
              <p className="text-gray-300 text-sm leading-relaxed">{it.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
