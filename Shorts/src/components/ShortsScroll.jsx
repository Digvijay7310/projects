import React, { useRef, useEffect } from "react";
import VideoCard from "./VideoCard";
import videos from "../videos";

const ShortsScroll = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting && entry.intersectionRatio > 0.75) {
            video.play();
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.75 } // 75% visible hone par play kare
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container">
      {videos.map((video, index) => (
        <div
          className="video-item"
          key={video.id}
          ref={(el) => (videoRefs.current[index] = el.querySelector("video"))} // video element ko ref me store
        >
          <VideoCard video={video} />
        </div>
      ))}
    </div>
  );
};

export default ShortsScroll;
