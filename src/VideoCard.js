import React, { useState, useRef } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc, song }) {
  const [isVideoPlaying, setVideoPlaying] = React.useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setVideoPlaying(false);
    } else {
      videoRef.current.play();
      setVideoPlaying(true);
    }
  };

  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://www.instagram.flhr3-2.fna.fbcn.net/v/t50.2886-16/117598442_205338364335864_545695080903278566_n.mp4?_nc_ht="
        alt="IG reel video"
        loop
      ></video>
      <VideoFooter song=" test " />
    </div>
  );
}

export default VideoCard;
