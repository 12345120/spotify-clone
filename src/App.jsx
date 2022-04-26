import "./App.css";
import Login from "./components/Login";
import Player from "./components/Player";
import { useState, useEffect } from "react";
import { getTokenFromURL } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useStateValue } from "./components/StateProvider";

// this is from wrapper github repo; how did CP know about this?
const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    // assignment of nonexistant property of object gives undefined
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log("USER >>> " + user);

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

    spotify.getUserPlaylists().then((playlists) => {
      console.log("PLAYLISTS >>> ", playlists);
      console.log("USER >>> " + user);

      dispatch({
        type: "SET_PLAYLISTS",
        playlists: playlists,
      });
    });

    spotify.getPlaylist("4GpBODwgLjOwL6JcBunQcr").then((response) => {
      dispatch({
        type: "SET_DISCOVER_WEEKLY",
        discover_weekly: response,
      });
    });
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify}></Player> : <Login></Login>}
    </div>
  );
}

export default App;
