import React from "react";
import "./VideoFooter.css";
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SendIcon from "@material-ui/icons/Send";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
function VideoFooter({ url, likes, shares, channel, avatarSrc, song }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar src={avatarSrc} />
        <h3>
          {channel} *<Button> Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smoth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter_actionsLeft">
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter_actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon fontSize="large" />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon fontSize="large" />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
