export const authEndpoint = "https://accounts.spotify.com/authorize";

// const redirectURI = "http://localhost:3000/"; // for localhost 
const redirectURI = "https://spotify-clone-1fd71.web.app/"; // for deployment

const clientId = "c531e8b2429a42b08f3ebc19b001e9fb";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "playlist-read-private",
];

export const getTokenFromURL = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      // console.log("getToken INITIAL >>> " + Object.entries(initial));
      return initial;
    }, {});
};

// implicit grant flow; unrefreshable, but the simplest
// https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow
export const loginURL = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
