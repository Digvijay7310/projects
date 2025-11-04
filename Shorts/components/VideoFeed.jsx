import React from "react";
import videos from "../src/videos";
import VideoCard from "./VideoCard";

const VideoFeed = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
        backgroundColor: "#000",
        margin: 0,
        padding: 0,
      }}
    >
      {videos.map((video) => (
        <div
          key={video.id}
          style={{
            height: "100vh",
            width: "100%",
            scrollSnapAlign: "start",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default VideoFeed;
