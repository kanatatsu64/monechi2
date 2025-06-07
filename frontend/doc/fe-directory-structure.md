# FE ディレクトリ構造

このドキュメントでは、フロントエンドプロジェクトの推奨ディレクトリ構造について説明します。

## 目的

機能ごとにコードを整理し、プロジェクトの見通しを良くし、開発効率とメンテナンス性を向上させます。

## 基本構造

```
/src
├── /features
│   ├── /[feature-name]
│   │   ├── /page
│   │   │   └── /component
│   │   ├── /asset
│   │   └── /domain
│   │       ├── /model
│   │       └── /api
│   │           └── query-key.ts
├── /utils (共通要素)
├── .env (環境変数ファイル)
└── App.tsx
```

## 各ディレクトリの説明

- `.env`: 環境変数を定義するファイル（プロジェクトルート）
- `/src`: ソースコードのルートディレクトリ
- `/features`: 各機能のコードを格納するディレクトリ
  - `/[feature-name]`: 個別の機能（例: `user-profile`, `product-list`）のルートディレクトリ
    - `/page`: その機能のページコンポーネネントを格納するディレクトリ
      - `/component`: ページ内で使用されるコンポーネントを格納するディレクトリ
    - `/asset`: その機能固有の静的ファイル（画像、スタイルなど）
    - `/domain`: その機能に関連するビジネスロジック、サービス、型定義を格納するディレクトリ。その下に `/model` (モデル定義) と `/api` (API クライアント) ディレクトリを配置します。
      - `/model`: その機能で使用されるデータの型定義やインターフェースを格納するディレクトリ
      - `/api`: その機能が使用する API クライアントやデータフェッチロジックを格納するディレクトリ
        - `query-key.ts`: Tanstack Query で使用するエンドポイントの URL と invalidate のための key を定義するファイル
      - `/utils`: プロジェクト全体で共通して使用されるコンポーネント、フック、ユーティリティ、型定義などを格納するディレクトリ
- `App.tsx`: アプリケーションのエントリポイント（フレームワークによる）

## ファイルの命名規則

ファイル名は、内容を簡潔かつ明確に表すようにします。以下の規則を推奨します。

- **ファイル名:** 基本的にキャメルケース (`camelCase`) を使用します。
- **`.tsx` ファイル (コンポーネント/ページ):** ファイル名はパスカルケース (`PascalCase`) を使用し、コンポーネント名と一致させます (例: `UserProfile.tsx`, `ProductListItem.tsx`)。ページコンポーネントも同様です。
- **Hooks:** ファイル名は `use` で始まり、キャメルケース (`camelCase`) を使用します (例: `useFetchData.ts`, `useLocalStorage.ts`)。
- **API Hooks:** ファイル名は `use` で始まり、関連する機能やエンティティ名を含み、キャメルケースを使用します (例: `useFetchUserProfile.ts`, `useCreateProduct.ts`)。アクションベース (`useFetch`, `useCreate`, `useUpdate`, `useDelete`) の命名を推奨します。
- **Model (型定義):** ファイル名はキャメルケース (`camelCase`) を使用します (例: `user.ts`, `product.ts`)。ファイル内に定義される型 (interface, type) の名前はパスカルケース (`PascalCase`) を使用します (例: `interface User { ... }`, `type Product = { ... }`)。
- **Utils:** ファイル名はキャメルケース (`camelCase`) を使用します (例: `dateUtils.ts`, `formatter.ts`)。ファイル内に定義される関数や定数の名前はキャメルケース (`camelCase`) を使用します。
- **ディレクトリのエントリポイント:** `index.ts` または `index.tsx` とします。

## ファイルの作成規則

- **Storybook ファイル:** コンポーネントを実装する際は、対応する Storybook ファイルを必ず作成します。Storybook ファイルは、コンポーネントファイルと同じディレクトリに配置し、命名規則は `ComponentName.stories.tsx` とします。

- **Hooks:** コンポーネントごとに作成します。UI 表示に関係のないロジックは、全て対応する Hooks に記述します。Hooks 名は `use<ComponentName>` とします。
- **API Hooks:** 1 つのエンドポイントに対して 1 つ作成し、Tanstack Query を使用して記述します。`api` ディレクトリに `query-key.ts` を作成し、エンドポイントの URL と invalidate のための key を定義します。
- **Page Files:** `page` ディレクトリの下に `<featureName>Page.tsx` ファイルを作成します。Page ファイルが大きくなる場合や、複数のコンポーネントからなる場合は、`page/component` ディレクトリを作成し、その中にサブコンポーネントを定義します。

## 補足

- この構造はあくまで推奨です。プロジェクトの規模や特性に応じて適宜変更してください。
- `/utils` ディレクトリに含めるべきか、特定の機能ディレクトリに含めるべきか判断に迷う場合は、その要素が複数の機能で再利用されるかどうかを基準に判断してください。
