"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const values = [
  {
    k: 'Customer Impact',
    title: 'インパクトから考える',
    body: '意思決定の最初に「ユーザーと社会への価値」を置きます。',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    k: 'Transparency',
    title: 'オープンであること',
    body: '前提・数字・失敗も共有。事実で議論し、学習速度を上げます。',
    img: 'https://images.unsplash.com/photo-1531539134687-27f323cb4705?q=80&w=1200&auto=format&fit=crop',
  },
  {
    k: 'Craft',
    title: 'ものづくりへの敬意',
    body: '確かな設計と運用の美しさ。リリース後も磨き続けます。',
    img: 'https://images.unsplash.com/photo-1506818144585-74b29c980d4b?q=80&w=1200&auto=format&fit=crop',
  },
];

export const Values = () => {
  return (
    <section id="values" className="section">
      <div className="container">
        <h2 className="h2 mb-10 text-center">Values & Culture</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.k}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
            >
              <div className="relative h-40 w-full">
                <Image src={v.img} alt={v.k} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 text-brand-green text-xs font-semibold">{v.k}</div>
              </div>
              <div className="p-5">
                <div className="font-semibold text-lg mb-1">{v.title}</div>
                <p className="text-sm text-gray-300">{v.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
