import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Code the Future | Omron Social Solutions',
  description: 'エネルギー監視クラウドの採用特設サイト',
  openGraph: {
    title: 'Code the Future | Omron Social Solutions',
    description: 'あなたのコードが、地球の未来を描く。',
    type: 'website'
  },
  twitter: { card: 'summary_large_image' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="dark">
      <body>
        {children}
      </body>
    </html>
  );
}
