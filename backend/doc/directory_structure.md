# ディレクトリ構成ガイドライン

## 概要

このドキュメントは、Go言語でWebアプリケーションのバックエンドを開発する際のディレクトリ構成のガイドラインを定義します。ドメイン駆動設計（DDD）の考え方に基づき、コンテキスト境界を明確にした構造を採用します。

## 基本構造

```
.
├── {context_name}/           # コンテキスト境界ごとのディレクトリ
│   ├── domain/              # ドメインレイヤー
│   │   └── {aggregate}/     # 集約ごとのディレクトリ
│   │       ├── {model}.go   # ドメインモデル
│   │       └── {model}_test.go
│   ├── feature/             # ユースケースレイヤー
│   │   └── {feature}/       # 機能ごとのディレクトリ
│   │       ├── controller.go
│   │       ├── controller_test.go
│   │       ├── usecase.go
│   │       └── usecase_test.go
│   └── infrastructure/      # インフラストラクチャレイヤー
│       └── repository/      # リポジトリ実装
├── utils/                   # 共通ユーティリティ
│   ├── logger/
│   └── config/
├── main.go
├── go.mod
└── README.md
```

## 命名規則

1. コンテキスト名
   - 小文字のスネークケース
   - 例: `health`, `user`, `auth`

2. 集約名
   - 小文字のスネークケース
   - 例: `user`, `health`, `server`

3. 機能名
   - 小文字のスネークケース
   - 例: `create`, `get`, `check`

## レイヤー構造

### ドメインレイヤー (`domain/`)

- ドメインモデル、値オブジェクト、エンティティを定義
- ビジネスルールとドメインロジックを含む
- 外部依存を持たない
- テストは同じディレクトリに配置

### ユースケースレイヤー (`feature/`)

- アプリケーションのユースケースを実装
- コントローラーとユースケースを分離
- ドメインレイヤーに依存
- テストは同じディレクトリに配置

### インフラストラクチャレイヤー (`infrastructure/`)

- 外部サービスとの連携を実装
- データベースアクセス、外部API呼び出しなど
- ドメインレイヤーとユースケースレイヤーに依存
- テストは同じディレクトリに配置

## テストの配置

- すべてのテストは、テスト対象のコードと同じディレクトリに配置
- テストファイル名は `{target}_test.go` の形式
- 統合テストも同じディレクトリに配置

## インポートパス

- モジュール名を基準とした相対パスを使用
- 例: `github.com/ttanaka/monechi2/backend/health/domain/health`

## 実装例

### ヘルスチェックコンテキスト

```
health/
├── domain/
│   └── health/
│       ├── health.go
│       └── health_test.go
├── feature/
│   └── check/
│       ├── controller.go
│       ├── controller_test.go
│       ├── usecase.go
│       └── usecase_test.go
└── infrastructure/
```

### ユーザーコンテキスト

```
user/
├── domain/
│   └── user/
│       ├── user.go
│       └── user_test.go
├── feature/
│   ├── create/
│   │   ├── controller.go
│   │   ├── controller_test.go
│   │   ├── usecase.go
│   │   └── usecase_test.go
│   └── get/
│       ├── controller.go
│       ├── controller_test.go
│       ├── usecase.go
│       └── usecase_test.go
└── infrastructure/
    └── repository/
        ├── user_repository.go
        └── user_repository_test.go
```

## 注意事項

1. コンテキスト間の依存関係を最小限に保つ
2. 各コンテキストは独立して動作可能であるべき
3. 共通の機能は `utils` ディレクトリに配置
4. テストは常に同じディレクトリに配置
5. インポートパスは明確で一貫性のある命名を使用 