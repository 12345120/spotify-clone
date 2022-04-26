import React from "react";
import "../css/Footer.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png"
          alt=""
        />
        <div className="footer__songInfo">
          <h4>Spotify Main Theme</h4>
          <p>Spotify</p>
        </div>
      </div>

      <div className="footer__center">
        <ShuffleIcon className="footer__green"></ShuffleIcon>
        <SkipPreviousIcon className='footer__icon'></SkipPreviousIcon>
        <SkipNextIcon className='footer__icon'></SkipNextIcon>
        <PlayCircleOutlineIcon className='footer__icon'></PlayCircleOutlineIcon>
        <RepeatIcon className="footer__green"></RepeatIcon>
      </div>

      <div className="footer__right">
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <PlaylistPlayIcon></PlaylistPlayIcon>
          </Grid>
          <Grid item>
            <VolumeDownIcon></VolumeDownIcon>
          </Grid>
          <Grid item xs={4}>
            <Slider></Slider>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
