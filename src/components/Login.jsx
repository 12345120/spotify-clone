import React from "react";
import "../css/Login.css";
import { loginURL } from "../spotify";

function Login() {

  return (
    <div className="login">
      <img
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="img error"
      />
      <a href={loginURL}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
