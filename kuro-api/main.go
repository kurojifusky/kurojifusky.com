package main

import (
	"kuro-api/routes"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.ForceConsoleColor()

	r := gin.New()
	r.SetTrustedProxies([]string{"127.0.0.1", "localhost"})

	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "It's me hi, I'm the problem it's me",
		})
	})

	r.GET("/stats", routes.AllStats)
	r.GET("/commissions", routes.GoogSheetCommissionStats)
	r.GET("/stats/wakatime", routes.WakaTimeStats)

	r.Run(":6969")
}
