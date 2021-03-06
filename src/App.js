import React from "react";
import "./App.css";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          className="app__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
          alt="logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard
          channel="agmarTorres"
          avatarSrc="aasd"
          song="Test song- thriller"
          likes={950}
          shares={30}
        />
        <VideoCard
          channel="agmarTorres"
          avatarSrc="aasd"
          song="Test song- thriller"
          likes={950}
          shares={30}
        />
        <VideoCard
          channel="agmarTorres"
          avatarSrc="aasd"
          song="Test song- thriller"
          likes={950}
          shares={30}
        />
        <VideoCard
          channel="agmarTorres"
          avatarSrc="aasd"
          song="Test song- thriller"
          likes={950}
          shares={30}
        />
      </div>
    </div>
  );
}

export default App;
