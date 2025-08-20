"use client";
import { motion } from 'framer-motion';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  photo: string;
};

const items: Testimonial[] = [
  {
    name: 'A. Sato',
    role: 'SRE',
    quote: '秒で変わる世界を、信頼で支える。障害対応は減り、挑戦は増えた。',
    photo: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'C. Suzuki',
    role: 'ML Engineer',
    quote: '予測が現実を動かす瞬間がある。私たちは、その瞬間を増やしている。',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'T. Tanaka',
    role: 'Backend Engineer',
    quote: '複雑さは隠し、価値は前に。スケールしても、コードは美しくありたい。',
    photo: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=800&auto=format&fit=crop'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <h2 className="h2 mb-8 text-gradient">Voices</h2>
        <p className="p mb-10">現場のリアルな声。プロダクトと文化が、両輪で回る。</p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="card overflow-hidden"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
              </div>
              <figcaption className="p-5">
                <blockquote className="text-gray-200">“{t.quote}”</blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-9 w-9 rounded-full overflow-hidden">
                    <img src={t.photo} alt={t.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="font-display text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.role}</p>
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
