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
  required: string[];
  preferred: string[];
  stack: string[];
 };

 const jobs: Job[] = [
  {
    id: 'backend-1',
    title: 'バックエンドエンジニア (Go/Node)',
    team: 'Platform',
    location: '東京 / リモート',
    tags: ['Go', 'Node.js', 'API', 'Kubernetes'],
    description: 'マルチテナントなAPIとイベント駆動基盤の設計・実装。SLOを満たす信頼性向上。',
    required: ['Go または Node.js の実務経験', 'RDB/NoSQL 設計', 'クラウド基盤(GCP/AWS)の利用経験'],
    preferred: ['CQRS/Event Sourcing の知識', 'Kubernetes/EKS/GKE 運用', '英語での技術ドキュメント読解'],
    stack: ['Go', 'Node.js', 'gRPC/REST', 'PostgreSQL', 'Pub/Sub', 'Kubernetes'],
  },
  {
    id: 'sre-1',
    title: 'SRE / インフラ',
    team: 'SRE',
    location: '東京 / リモート',
    tags: ['GCP', 'Terraform', 'Observability'],
    description: '信頼性・コスト・運用性の最適解を継続的に探索。IaCと可観測性の標準化を推進。',
    required: ['クラウド運用経験(GCP/AWS/Azure)', 'Infrastructure as Code (Terraform)', 'SRE プラクティスの理解'],
    preferred: ['Service Level Objective 設計', 'コスト最適化の実績', 'プラットフォームエンジニアリングの知見'],
    stack: ['GCP', 'Terraform', 'Cloud Build', 'Grafana/Loki/Tempo', 'Kubernetes'],
  },
  {
    id: 'ml-1',
    title: 'MLエンジニア (最適制御)',
    team: 'AI/Optimization',
    location: '東京 / リモート',
    tags: ['Python', 'Time-series', 'Optimization'],
    description: '時系列予測・最適化を活用した需要予測と制御。実運用までのMLOps構築。',
    required: ['Python による実装経験', '時系列/統計/最適化いずれかの専門性', 'クラウドでのML実運用経験'],
    preferred: ['Forecasting/Optimization の学会/論文実績', '軽量サービング最適化', 'チームでのMLOps導入'],
    stack: ['Python', 'NumPy/Pandas', 'PyTorch/LightGBM', 'Vertex AI / GCP', 'Docker'],
  },
 ];

 const allTags = Array.from(new Set(jobs.flatMap((j) => j.tags))).sort();

 export const Jobs = () => {
  const [q, setQ] = useState('');
  const [selected, setSelected] = useState<string[]>([]);
  const [openId, setOpenId] = useState<string | null>(null);

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

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {/* main column: filters + list */}
          <div className="md:col-span-2">
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
                <motion.button
                  type="button"
                  key={j.id}
                  onClick={() => setOpenId(j.id)}
                  className="card text-left p-5 shadow-hover"
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
                </motion.button>
              ))}
            </div>

          </div>

          {/* mini-game was moved to /energy-game page */}
        </div>

        {/* Detail Modal */}
        {openId && (
          <JobModal
            job={jobs.find((x) => x.id === openId)!}
            onClose={() => setOpenId(null)}
          />
        )}
      </div>
    </section>
  );
};

type ModalProps = { job: Job; onClose: () => void };
const JobModal = ({ job, onClose }: ModalProps) => {
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <motion.div
        role="dialog"
        aria-modal="true"
        className="absolute inset-x-0 bottom-0 top-10 md:top-16 mx-auto max-w-3xl"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="glass rounded-t-2xl md:rounded-2xl overflow-hidden h-full flex flex-col">
          <div className="p-5 md:p-6 border-b border-white/10 flex items-start justify-between gap-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl">{job.title}</h3>
              <p className="text-sm text-gray-400 mt-1">{job.team} ・ {job.location}</p>
            </div>
            <button onClick={onClose} className="rounded-md px-3 py-1.5 border border-white/20 hover:bg-white/10">閉じる</button>
          </div>

          <div className="overflow-y-auto px-5 md:px-6 py-5 space-y-6">
            <Section title="業務内容">
              <p className="text-sm text-gray-300 leading-relaxed">{job.description}</p>
            </Section>
            <Section title="必須スキル">
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                {job.required.map((x) => (<li key={x}>{x}</li>))}
              </ul>
            </Section>
            <Section title="歓迎スキル">
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-300">
                {job.preferred.map((x) => (<li key={x}>{x}</li>))}
              </ul>
            </Section>
            <Section title="Tech Stack">
              <div className="flex flex-wrap gap-2">
                {job.stack.map((t) => (
                  <span key={t} className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/10">{t}</span>
                ))}
              </div>
            </Section>
          </div>

          {/* Sticky apply bar */}
          <div className="p-4 border-t border-white/10 sticky bottom-0 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/20">
            <div className="flex items-center justify-between gap-3">
              <div className="hidden md:block text-sm text-gray-400">このポジションに応募しますか？</div>
              <div className="flex items-center gap-2">
                <a href="#join" className="btn glass">今すぐ応募</a>
                <button onClick={onClose} className="px-3 py-2 text-sm rounded-md border border-white/15 hover:bg-white/10">後で</button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section>
    <h4 className="font-display text-base mb-2 text-white/90">{title}</h4>
    {children}
  </section>
);
