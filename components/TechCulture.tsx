"use client";
import { useState } from 'react';

const techs = [
  { name: 'AWS', color: '#FF9900', desc: 'マルチアカウント基盤、EKS、MSK、Timestream などを活用。' },
  { name: 'Kubernetes', color: '#326CE5', desc: 'セルフヒーリングとオートスケールでSLOを維持。' },
  { name: 'Python', color: '#3776AB', desc: 'データ基盤、ETL、機械学習で活用。' },
  { name: 'Go', color: '#00ADD8', desc: '高スループットなサービスのバックエンドに採用。' },
  { name: 'Kafka', color: '#231F20', desc: '大規模ストリーミング処理の中心。' },
];

export const TechCulture = () => {
  const [hover, setHover] = useState<number | null>(null);
  return (
    <section id="tech" className="section">
      <div className="container">
        <h2 className="h2 mb-6 text-center">最高のパフォーマンスは、最高の環境から。</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-gray-800 p-6">
            <div className="font-semibold mb-3">技術スタック</div>
            <div className="relative h-56 overflow-hidden rounded bg-gray-900">
              <div className="absolute inset-0">
                {techs.map((t, i) => (
                  <button
                    key={t.name}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    className="absolute rounded-full px-3 py-1 text-sm font-medium border border-gray-700/60 hover:border-gray-500/80 transition"
                    style={{
                      left: `${10 + (i * 18) % 70}%`,
                      top: `${10 + (i * 23) % 70}%`,
                      backgroundColor: 'rgba(255,255,255,0.04)'
                    }}
                  >
                    <span style={{ color: t.color }}>{t.name}</span>
                    {hover === i && (
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap bg-black/90 border border-gray-700 text-xs text-gray-200 rounded px-3 py-2">
                        {t.desc}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-gray-800 p-6">
            <div className="font-semibold mb-3">開発文化と働き方</div>
            <ul className="space-y-2 text-gray-300 text-sm list-disc pl-5">
              <li>アジャイル/スクラム、徹底したコードレビュー、1on1</li>
              <li>技術勉強会、カンファレンス参加支援、資格支援</li>
              <li>フレックス/リモート、集中ブース・フリーアドレスのオフィス</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
