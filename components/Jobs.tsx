"use client";
import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

 type Job = {
  id: string;
  title: string;
  team: string;
  location: string;
  tags: string[];
  description: string;
 };

 const jobs: Job[] = [
  {
    id: 'backend-1',
    title: 'バックエンドエンジニア (Go/Node)',
    team: 'Platform',
    location: '東京 / リモート',
    tags: ['Go', 'Node.js', 'API', 'Kubernetes'],
    description: 'マルチテナントなAPIとイベント駆動基盤の設計・実装。SLOを満たす信頼性向上。',
  },
  {
    id: 'sre-1',
    title: 'SRE / インフラ',
    team: 'SRE',
    location: '東京 / リモート',
    tags: ['GCP', 'Terraform', 'Observability'],
    description: '信頼性・コスト・運用性の最適解を継続的に探索。IaCと可観測性の標準化を推進。',
  },
  {
    id: 'ml-1',
    title: 'MLエンジニア (最適制御)',
    team: 'AI/Optimization',
    location: '東京 / リモート',
    tags: ['Python', 'Time-series', 'Optimization'],
    description: '時系列予測・最適化を活用した需要予測と制御。実運用までのMLOps構築。',
  },
 ];

 const allTags = Array.from(new Set(jobs.flatMap((j) => j.tags))).sort();

 export const Jobs = () => {
  const [q, setQ] = useState('');
  const [selected, setSelected] = useState<string[]>([]);

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const textOK = [j.title, j.team, j.location, j.description, ...j.tags].join(' ').toLowerCase().includes(q.toLowerCase());
      const tagsOK = selected.length === 0 || selected.every((t) => j.tags.includes(t));
      return textOK && tagsOK;
    });
  }, [q, selected]);

  const toggle = (t: string) => setSelected((cur) => (cur.includes(t) ? cur.filter((x) => x !== t) : [...cur, t]));

  return (
    <section id="jobs" className="section">
      <div className="container">
        <h2 className="h2 text-center mb-8">Open Positions</h2>
        <div className="glass rounded-xl p-4 md:p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="キーワード検索 (例: Go, SRE, 東京)"
              className="w-full rounded-md bg-black/30 border border-white/15 px-4 py-2 outline-none"
            />
            <div className="flex flex-wrap gap-2">
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => toggle(t)}
                  className={`px-3 py-1 rounded-full text-sm border transition ${
                    selected.includes(t) ? 'bg-brand-green/20 border-brand-green/40' : 'border-white/15 hover:border-white/30'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((j, i) => (
            <motion.a
              key={j.id}
              href="#join"
              className="card block p-5 shadow-hover"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="font-semibold text-lg mb-1">{j.title}</div>
                  <div className="text-sm text-gray-400">{j.team} ・ {j.location}</div>
                </div>
                <div className="hidden md:flex flex-wrap gap-2 justify-end">
                  {j.tags.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/10">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-300 mt-3">{j.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
 };
