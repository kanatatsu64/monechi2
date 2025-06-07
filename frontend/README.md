# プロジェクト概要

このプロジェクトは、以下の技術要素を使用して構築されたフロントエンドアプリケーションです。

- **フレームワーク:** React
- **言語:** TypeScript
- **ビルドツール:** Vite
- **開発機能:** HMR (Hot Module Replacement) による高速な開発体験
- **コード品質:** ESLint によるコード規約の適用
- **コンポーネントカタログ:** Storybook
- **テスト環境:** Jest

## 動作確認方法

プロジェクトをローカルで動作させるには、以下の手順を実行します。

1. 依存関係をインストールします。

```bash
npm install
```

2. 開発サーバーを起動します。

```bash
npm run dev
```

開発サーバーが起動し、ブラウザでアプリケーションを確認できます。

3. プロジェクトをビルドします。

```bash
npm run build
```

`dist` ディレクトリに本番用のビルドが出力されます。

## Storybook の起動

コンポーネントのカタログである Storybook を起動するには、以下の手順を実行します。

1. Storybook 開発サーバーを起動します。

```bash
npm run storybook
```

Storybook が起動し、ブラウザでコンポーネントを確認できます。

2. Storybook をビルドします。

```bash
npm run build-storybook
```

`storybook-static` ディレクトリに静的な Storybook が出力されます。

## テストの実行

プロジェクトのテストを実行するには、以下の手順を実行します。

1. テストを実行します。

```bash
npm test
```

Jest を使用してテストが実行されます。
