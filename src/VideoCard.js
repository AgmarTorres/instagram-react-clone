import React, { useState, useRef } from "react";
import "./VideoCard.css";

function VideoCard() {
  const videoRef = useRef(null);
  const [isVideoPlaying, setVideoPlaying] = React.useState(false);

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
      <video
        ref={videoRef}
        onClick={onVideoPress}
        className="videoCard__player"
        src="https://www.instagram.com/p/CFAq350jcXz/"
        alt="IG reel video"
        loop
      ></video>
    </div>
  );
}

export default VideoCard;
