"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="section">
      <div className="container text-center">
        <h2 className="h2 mb-4">エラーが発生しました</h2>
        <p className="p mb-6 text-gray-300">{error?.message || '不明なエラー'}</p>
        <button className="btn" onClick={() => reset()}>再試行する</button>
      </div>
    </div>
  );
}
