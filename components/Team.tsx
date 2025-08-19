"use client";
import { useState } from 'react';

type Member = { name: string; role: string; img?: string; video?: string };

const members: Member[] = [
  { name: 'A. Sato', role: 'SRE', img: '/team/sample1.jpg', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { name: 'B. Tanaka', role: 'Backend Eng', img: '/team/sample2.jpg' },
  { name: 'C. Suzuki', role: 'ML Eng', img: '/team/sample3.jpg' },
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
              className="rounded-xl border border-gray-800 p-6 text-left hover:border-gray-600 transition"
              onClick={() => setActive(m)}
            >
              <div className="h-32 w-full bg-gray-800 rounded mb-4 overflow-hidden flex items-center justify-center">
                <span className="text-gray-500 text-sm">{m.img ? 'Photo' : 'No Photo'}</span>
              </div>
              <div className="font-semibold">{m.name}</div>
              <div className="text-gray-400 text-sm">{m.role}</div>
              <div className="text-gray-300 text-xs mt-2">
                最も興奮する瞬間は？「本番で美しく動く瞬間」
              </div>
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="bg-gray-900 border border-gray-700 rounded-lg w-full max-w-2xl p-4" onClick={(e) => e.stopPropagation()}>
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
