import React from "react";
import "../css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
        alt="img error"
      />

      <SidebarOption title="Home" Icon={HomeIcon}></SidebarOption>
      <SidebarOption title="Search" Icon={SearchIcon}></SidebarOption>
      <SidebarOption
        title="Your Library"
        Icon={LibraryMusicIcon}
      ></SidebarOption>

      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption
          title={playlist.name}
          key={playlist.name}
        ></SidebarOption>
      ))}
    </div>
  );
}

export default Sidebar;
