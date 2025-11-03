import React from "react";
import "../styles/VideoCard.css";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <div className="video-wrapper">
        <video src={video.videoUrl} controls muted loop />
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-desc">{video.description}</p>
        <div className="video-stats">
          <span>👍 {video.likes}</span>
          <span>💬 {video.comments}</span>
          <span>🔁 {video.shares}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background-color: #f5f5f5;
}

.feed-title {
  text-align: center;
  margin-top: 20px;
  font-size: 2rem;
  color: #333;
}

.videos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
  padding: 30px;
}

.video-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.video-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.video-wrapper video {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.video-info {
  padding: 15px;
}

.video-title {
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 5px;
}

.video-desc {
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 10px;
}

.video-stats {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: #444;
}
