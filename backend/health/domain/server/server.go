package server

import (
	"github.com/labstack/echo/v4"
)

// Server はAPIサーバーのドメインモデル
type Server struct {
	echo *echo.Echo
	port string
}

// NewServer は新しいServerインスタンスを作成する
func NewServer(echo *echo.Echo, port string) *Server {
	return &Server{
		echo: echo,
		port: port,
	}
}

// Start はサーバーを起動する
func (s *Server) Start() error {
	return s.echo.Start(s.port)
} 