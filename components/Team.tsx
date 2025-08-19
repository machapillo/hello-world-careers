"use client";
import { useState } from 'react';
import Image from 'next/image';

type Member = { name: string; role: string; img?: string; video?: string };

const members: Member[] = [
  { name: 'A. Sato', role: 'SRE', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name: 'B. Tanaka', role: 'Backend Eng', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop' },
  { name: 'C. Suzuki', role: 'ML Eng', img: 'https://images.unsplash.com/photo-1541534401786-2077eed87a82?q=80&w=1200&auto=format&fit=crop' },
];

export const Team = () => {
  const [active, setActive] = useState<Member | null>(null);
  return (
    <section id="team" className="section">
      <div className="container text-center">
        <h2 className="h2 mb-6">未来を語り、コードを書く。そんな日常へようこそ。</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((m) => (
            <button
              key={m.name}
              className="card text-left overflow-hidden group shadow-hover"
              onClick={() => setActive(m)}
            >
              <div className="relative h-44 w-full">
                {m.img ? (
                  <Image src={m.img} alt={m.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <div className="h-full w-full bg-gray-800" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-sm uppercase tracking-wider text-brand-green">{m.role}</div>
                  <div className="font-semibold text-lg">{m.name}</div>
                </div>
              </div>
              <div className="px-4 py-4 text-gray-300 text-sm">
                最も興奮する瞬間は？「本番で美しく動く瞬間」
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="bg-gray-900/90 backdrop-blur-md border border-gray-700 rounded-lg w-full max-w-2xl p-4" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-3">
              <div className="font-semibold">{active.name}</div>
              <button className="btn-secondary" onClick={() => setActive(null)}>閉じる</button>
            </div>
            {active.video ? (
              <div className="aspect-video w-full">
                <iframe className="w-full h-full" src={active.video} title="intro" allowFullScreen />
              </div>
            ) : (
              <p className="p">自己紹介ビデオは準備中です。</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
