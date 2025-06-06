# FE コーディングスタイル

このドキュメントでは、フロントエンドプロジェクトにおけるコーディングルールについて説明します。

## 目的

コードの可読性、保守性、一貫性を高め、チーム開発を円滑に進めることを目的とします。

## 言語・フレームワーク

- TypeScript
- React (または使用しているフレームワーク)

## 基本原則

- **可読性**: 誰が読んでも理解しやすいコードを書く。
- **保守性**: 将来の変更や機能追加が容易なコードを書く。
- **一貫性**: プロジェクト全体でコーディングスタイルを統一する。
- **DRY (Don't Repeat Yourself)**: 同じようなコードを繰り返さない。
- **KISS (Keep It Simple, Stupid)**: シンプルな実装を心がける。

## コーディングスタイル

### インデント

スペース 2 文字を使用します。

### セミコロン

文末にはセミコロンを付けます。

### クォート

文字列リテラルにはシングルクォート `'` を使用します。ただし、文字列内にシングルクォートが含まれる場合はダブルクォート `"` を使用しても構いません。

### 変数名・関数名

- キャメルケース (`camelCase`) を使用します。
- 意味が明確で、内容を推測しやすい名前を付けます。
- 略語は避け、フルスペルを使用することを推奨します（例: `getUserProfile` ではなく `fetchUserProfile`）。

### コンポーネント名

- パスカルケース (`PascalCase`) を使用します。
- ファイル名とコンポーネント名は一致させます。

### ファイル名

- コンポーネントファイルはパスカルケース (`PascalCase.tsx`) を使用します。
- それ以外のファイル（hooks, utils, services など）はキャメルケース (`camelCase.ts`) を使用します。
- ディレクトリ名はケバブケース (`kebab-case`) を使用することを推奨します。

### コメント

- コードの意図や、なぜそのように実装したのかなど、コードだけでは理解しにくい部分にコメントを記述します。
- JSDoc 形式での型情報の記述を推奨します。

### その他

- ESLint, Prettier などの Linter/Formatter を導入し、自動整形を行うことを強く推奨します。
- 可能であれば、husky や lint-staged などを利用して、コミット時に自動で Lint/Format が実行されるように設定します。

## React (または使用しているフレームワーク) 特有のルール

### コンポーネント

- 関数コンポーネントと Hooks の使用を基本とします。
- コンポーネントは単一の責任を持つように分割します。
- Props の型定義には TypeScript を使用します。
- Props のバケツリレーを避けるため、Context API や状態管理ライブラリの利用を検討します。

### Hooks

- カスタムフックを作成する際は、`use` プレフィックスを付けます。
- フックの内部で状態や副作用を管理します。

### スタイル

- CSS Modules, Styled Components, Emotion などの CSS-in-JS ライブラリ、または Utility First CSS (Tailwind CSS など) の使用を検討します。プロジェクトで統一された方法を採用します。

## コードレビュー

- Pull Request 作成時には、必ずコードレビューを依頼します。
- レビューでは、このコーディングルールに沿っているか、可読性、保守性、パフォーマンスなどを確認します。
