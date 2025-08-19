# OSS Energy Recruit Site (Next.js)

コンセプト: 「あなたのコードが、地球の未来を描く。」

## セットアップ
1) Node.js 18+ をインストール
2) 依存関係をインストール
```
npm install
```
3) 開発サーバー起動
```
npm run dev
```
http://localhost:3000 をブラウザで開く。

## 技術
- Next.js (App Router, TypeScript)
- Tailwind CSS (ダークテーマ)
- framer-motion（アニメーション）
- Three.js / React Three Fiber（後日、インタラクティブなダイアグラムや地球表現に拡張予定）

## ディレクトリ
- `app/` ページとレイアウト（`page.tsx`, `layout.tsx`）
- `components/` 各セクション（`Hero`, `Mission`, `Challenge`, `Team`, `TechCulture`, `JoinUs`）
- `app/globals.css` グローバルスタイル

## デプロイ（Vercel 推奨）
1) GitHub リポジトリにプッシュ
2) Vercel に Import → フレームワークは Next.js 自動検出
3) `npm run build` が自動実行され、完了後に公開

## 今後の拡張（案）
- ヒーロー: Three.js で回転する地球とスクロール連動のエネルギーフロー
- チャレンジ: R3F + Drei でインタラクティブなアーキテクチャ図
- チーム: 実写写真の差し替えと動画の最適化、アクセシビリティ向上
- Tech: ロゴを SVG 化し、ツールチップをキーボード操作対応
- Join Us: 職種データを外部 CMS or JSON から取得し更新を容易に
