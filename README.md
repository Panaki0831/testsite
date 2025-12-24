# SAMURAI ARCHITECTS コーポレートサイト

AI × 空間デザインで、不動産と建築の未来を創る

## 概要

SAMURAI ARCHITECTS のコーポレートサイトトップページです。
React + TailwindCSS + Framer Motion で構築されたモダンで洗練されたコーポレートサイトです。

## 使用技術

- **React 18** - UIライブラリ
- **Vite** - ビルドツール
- **TailwindCSS** - CSSフレームワーク
- **Framer Motion** - アニメーションライブラリ

## デザインコンセプト

- **カラースキーム**
  - ベース: 白 (#FFFFFF)
  - アクセント: 黒 (#282828)
  - セカンダリ: グレー (#6B6B6B)
  - ボーダー: (#E5E5E5)

- **フォント**: Inter (Google Fonts)

- **テイスト**: モダンで洗練されたコーポレートスタイル

## セクション構成

1. **Header** - ロゴとナビゲーション（スクロール時固定）
2. **Hero** - メインビジュアルとキャッチコピー
3. **Service** - サービス紹介（4つのサービスカード）
4. **Works** - 実績紹介（グリッドギャラリー）
5. **About Us** - 企業概要・ミッション
6. **Contact** - お問い合わせフォーム
7. **Footer** - 会社情報とSNSリンク

## セットアップ

### 必要な環境

- Node.js 18以上

### インストール

```bash
npm install
```

### 開発サーバー起動

```bash
npm run dev
```

開発サーバーは http://localhost:5173 で起動します。

### ビルド

```bash
npm run build
```

### プレビュー

```bash
npm run preview
```

## カスタマイズ

### 画像の追加

現在はプレースホルダー（絵文字）を使用しています。
実際の画像を使用する場合は、以下のコンポーネントを編集してください：

- `src/components/Service.jsx` - サービスアイコン
- `src/components/Works.jsx` - 実績画像

### カラーの変更

`tailwind.config.js` の `theme.extend.colors` を編集してください。

### フォントの変更

`index.html` の Google Fonts リンクと、
`tailwind.config.js` の `theme.extend.fontFamily` を編集してください。

## プロジェクト構造

```
testsite/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # ヘッダーナビゲーション
│   │   ├── Hero.jsx        # ヒーローセクション
│   │   ├── Service.jsx     # サービスセクション
│   │   ├── Works.jsx       # 実績セクション
│   │   ├── About.jsx       # 会社概要セクション
│   │   ├── Contact.jsx     # お問い合わせセクション
│   │   └── Footer.jsx      # フッター
│   ├── App.jsx             # メインアプリケーション
│   ├── main.jsx            # エントリーポイント
│   └── index.css           # グローバルスタイル
├── index.html
├── tailwind.config.js      # Tailwind設定
├── postcss.config.js       # PostCSS設定
└── package.json
```

## 機能

### アニメーション

- フェードイン
- スライドアップ
- ホバーズーム
- スクロールトリガーアニメーション

### レスポンシブ対応

- モバイルファーストデザイン
- ブレークポイント: sm (640px), md (768px), lg (1024px)
- ハンバーガーメニュー（モバイル）

### インタラクション

- スムーススクロール
- ホバーエフェクト
- スクロール時のヘッダー固定

## ライセンス

© 2025 SAMURAI ARCHITECTS. All rights reserved.
