package start

import (
	"log"

	"github.com/labstack/echo/v4"
	"github.com/ttanaka/monechi2/backend/health/domain/server"
	"github.com/ttanaka/monechi2/backend/health/feature/check"
)

// Controller はサーバー起動のコントローラー
type Controller struct {
	useCase UseCase
}

// NewController は新しいコントローラーインスタンスを作成する
func NewController(useCase UseCase) *Controller {
	return &Controller{
		useCase: useCase,
	}
}

// Start はサーバーを起動する
func (c *Controller) Start() {
	if err := c.useCase.Execute(); err != nil {
		log.Fatal(err)
	}
}

// Setup はサーバーの設定を行う
func Setup() {
	// Echoのインスタンスを作成
	e := echo.New()

	// ヘルスチェックの依存関係を注入
	healthUseCase := check.NewUseCase()
	healthController := check.NewController(healthUseCase)

	// ルーティングの設定
	e.GET("/health", healthController.Handle)

	// サーバーの作成
	s := server.NewServer(e, ":8080")

	// サーバー起動の依存関係を注入
	startUseCase := NewUseCase(s)
	startController := NewController(startUseCase)

	// サーバーを起動
	startController.Start()
} 