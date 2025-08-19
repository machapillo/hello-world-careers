export const Challenge = () => {
  return (
    <section id="challenge" className="section">
      <div className="container">
        <h2 className="h2 mb-6 text-center">前例なき領域へ。私たちが挑む技術的頂上。</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card title="リアルタイム時系列基盤">
            ペタバイト級のデータをストリーミング処理し、秒未満で分析可能に。
          </Card>
          <Card title="自己修復クラウドインフラ">
            Kubernetes上での自動復旧とセルフヒーリングでSLOを維持。
          </Card>
          <Card title="需要予測MLモデル">
            高精度な時系列予測で需給の最適化を実現。
          </Card>
        </div>
        <div className="mt-8 rounded-xl border border-gray-800 p-6">
          <p className="p">
            美しくインタラクティブなアーキテクチャ図（後でR3F/Three.jsで実装）
          </p>
        </div>
      </div>
    </section>
  );
};

const Card = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="rounded-xl border border-gray-800 p-6">
    <div className="text-xl font-semibold mb-2">{title}</div>
    <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
  </div>
);
