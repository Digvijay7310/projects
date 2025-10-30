import React from "react";

const VideoCard = ({ video }) => {
  return (
    <div className="video-item">
      <video
        src={video.url}
        muted
        loop
        controls={false} // shorts-style look
        autoPlay
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />

      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
