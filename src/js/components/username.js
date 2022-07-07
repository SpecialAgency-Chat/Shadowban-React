import React from "react";

export default function Username({ username = "username" }) {
  return (
    <span id="username-field">
      @
      <span id="username">{username}</span>
    </span>
  )
}