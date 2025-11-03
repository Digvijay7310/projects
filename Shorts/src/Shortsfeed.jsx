import React from "react";
import videos from "../data/videos";
import VideoCard from "../components/VideoCard";
import "../styles/VideoCard.css";

const ShortsFeed = () => {
  return (
    <div className="shorts-feed">
      <h1 className="feed-title">LoopX Shorts</h1>
      <div className="videos-grid">
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default ShortsFeed;
