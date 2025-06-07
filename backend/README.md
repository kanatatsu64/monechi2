# Monechi2 Backend

Monechi2のバックエンドAPIサーバー

## 技術スタック

- Go 1.21
- Echo Framework
- Testify (テスト用)

## プロジェクト構造

```
.
├── cmd/
│   └── api/          # アプリケーションのエントリーポイント
├── contexts/         # コンテキスト境界ごとのディレクトリ
│   ├── health/       # ヘルスチェックコンテキスト
│   │   ├── domain/   # ドメインレイヤー
│   │   │   └── health/
│   │   │       ├── health.go
│   │   │       └── health_test.go
│   │   ├── feature/  # ユースケースレイヤー
│   │   │   └── check/
│   │   │       ├── controller.go
│   │   │       ├── controller_test.go
│   │   │       ├── usecase.go
│   │   │       └── usecase_test.go
│   │   └── infrastructure/  # インフラストラクチャレイヤー
│   └── user/         # ユーザーコンテキスト（予定）
│       ├── domain/
│       ├── feature/
│       └── infrastructure/
└── utils/            # 共通ユーティリティ
    ├── logger/
    └── config/
```

## 開発環境のセットアップ

1. 依存関係のインストール:
```bash
go mod download
```

2. サーバーの起動:
```bash
go run cmd/api/main.go
```

## テストの実行

```bash
# すべてのテストを実行
go test ./...

# 特定のコンテキストのテストを実行
go test ./contexts/health/...
```

## API エンドポイント

- GET /health - ヘルスチェック 