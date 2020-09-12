import React from "react";

import "./VideoHeader.css";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltOutinedIcon from "@material-ui/icons/CameraAltOutlined";

function VideoHeader() {
  return (
    <div className="videoHeader">
      <ArrowBackIosIcon />
      <h3>Reels</h3>
      <CameraAltOutinedIcon />
    </div>
  );
}
export default VideoHeader;
