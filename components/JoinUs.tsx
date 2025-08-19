export const JoinUs = () => {
  const roles = [
    { title: 'Senior SRE', link: '#', desc: '信頼性設計、観測性、プラットフォーム運用のリード' },
    { title: 'Backend Engineer (Go/Python)', link: '#', desc: '高スループットなデータ処理サービスの設計と実装' },
    { title: 'Product Manager', link: '#', desc: 'ユーザー価値の最大化とロードマップの推進' },
  ];
  return (
    <section id="join" className="section">
      <div className="container">
        <h2 className="h2 mb-6 text-center">さあ、次のページを一緒にめくろう。</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {roles.map((r) => (
            <div key={r.title} className="rounded-xl border border-gray-800 p-6 flex flex-col">
              <div className="font-semibold text-lg">{r.title}</div>
              <div className="text-gray-400 text-sm mt-1 flex-1">{r.desc}</div>
              <div className="mt-4 flex gap-3">
                <a href={r.link} className="btn">話を聞いてみる</a>
                <a href={r.link} className="btn-secondary">今すぐ応募する</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
