import React from "react";
import video from "../Assets/MBA Chai Wala.mp4";

const IntroVideo = () => {
  return (
    <div className="intro">
      <video src={video} muted autoPlay loop controlsList="nodownload"></video>
      <div></div>
    </div>
  );
};

export default IntroVideo;