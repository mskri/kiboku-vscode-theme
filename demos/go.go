package main

import (
	"database/sql"
	"fmt"
	"net/http"
	"strings"
)

type UserHandler struct {
	db *sql.DB
}

type User struct {
	Id              string `json:"id"`
	DiscordUsername string `json:"discord_username"`
	CreatedAt       string `json:"created_at"`
	UpdatedAt       string `json:"updated_at"`
}

type UserInput struct {
	Id              string `json:"id"`
	DiscordUsername string `json:"discord_username"`
}

func (s *UserHandler) GetUserHandler(c echo.Context) error {
	userId := strings.TrimPrefix(c.Param("id"), "/")

	var user User
	err := s.db.QueryRow("SELECT * FROM \"user\" WHERE id = $1", userId).Scan(&user.Id, &user.DiscordUsername, &user.CreatedAt, &user.UpdatedAt)

	if err != nil {
		fmt.Println(err)
		return echo.NewHTTPError(http.StatusNotFound, "No user found")
	}

	return c.JSON(http.StatusOK, user)
}

func (s *UserHandler) CreateUserHandler(c echo.Context) error {
	userInput := new(UserInput)

	if err := c.Bind(userInput); err != nil {
		return echo.NewHTTPError(http.StatusBadRequest, err.Error()) // invalid req body
	}

	var id string
	err := s.db.QueryRow("INSERT INTO \"user\"(id, discord_username) VALUES($1, $2) RETURNING id", userInput.Id, userInput.DiscordUsername).Scan(&id)

	if err != nil {
		fmt.Println(err)
		return echo.NewHTTPError(http.StatusBadRequest, "Could not create user")
	}

	// return c.JSON(http.StatusOK, map[string]interface{}{
	// 	"userId": id,
	// })
	return c.String(http.StatusOK, "")
}
