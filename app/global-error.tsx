"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Global error boundary must include <html> and <body>
  return (
    <html lang="ja" className="dark">
      <body className="section">
        <div className="container text-center">
          <h2 className="h2 mb-4">重大なエラーが発生しました</h2>
          <p className="p mb-6 text-gray-300">{error?.message || 'Unknown error'}</p>
          <button className="btn" onClick={() => reset()}>再読み込み</button>
        </div>
      </body>
    </html>
  );
}
