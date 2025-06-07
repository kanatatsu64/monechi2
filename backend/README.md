# Monechi2 Backend

Monechi2のバックエンドAPIサーバー

## 技術スタック

- Go 1.21
- Echo Framework
- Testify (テスト用)
- PostgreSQL
- Docker
- Docker Compose

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

## 実行方法

### 前提条件
- Go 1.21以上
- Docker
- Docker Compose

### ローカル環境での実行

1. リポジトリのクローン:
```bash
git clone https://github.com/your-username/monechi2-backend.git
cd monechi2-backend
```

2. 環境変数の設定:
```bash
cp .env.example .env
# .envファイルを必要に応じて編集
```

3. 依存関係のインストール:
```bash
go mod download
```

4. サーバーの起動:
```bash
# 開発環境用
go run cmd/api/main.go

# またはDockerを使用する場合
docker-compose up
```

## テスト方法

### 単体テストの実行
```bash
# すべてのテストを実行
go test ./...

# 特定のコンテキストのテストを実行
go test ./contexts/health/...

# カバレッジレポートの生成
go test ./... -coverprofile=coverage.out
go tool cover -html=coverage.out
```

### テストの実行環境
- テストは`*_test.go`ファイルに記述
- テストデータは`testdata`ディレクトリに配置
- モックは`mocks`ディレクトリに配置

## API エンドポイント

- GET /health - ヘルスチェック 