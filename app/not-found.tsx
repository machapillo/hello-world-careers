export default function NotFound() {
  return (
    <div className="section">
      <div className="container text-center">
        <h2 className="h2 mb-4">ページが見つかりません</h2>
        <p className="p mb-6 text-gray-300">お探しのページは存在しないか、移動しました。</p>
        <a href="/" className="btn">トップへ戻る</a>
      </div>
    </div>
  );
}
