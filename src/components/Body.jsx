import React from "react";
import "../css/Body.css";
import Header from "./Header";
import SongRow from "./SongRow";
import { useStateValue } from "./StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  return (
    <div className="body">
      <Header spotify={spotify}></Header>

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"></PlayCircleFilledIcon>
          <FavoriteIcon fontSize="large"></FavoriteIcon>
          <MoreHorizIcon></MoreHorizIcon>
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow
            track={item.track}
            key={item.track.external_ids.isrc}
          ></SongRow>
        ))}
      </div>
    </div>
  );
}

export default Body;
