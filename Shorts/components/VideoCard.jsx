import React, { useState } from "react";
import { FaComment, FaHeart, FaShare } from "react-icons/fa";

const VideoCard = ({ video }) => {
  const { title, description, videoUrl, likes, comments, shares } = video;

  const [showDesc, setShowDesc] = useState(false);
  const [showComments, setShowComments] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "450px", // max width like Instagram Reel
        height: "80vh", // take most of the screen height
        aspectRatio: "9 / 16",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#000",
        boxShadow: "0 0 15px rgba(0,0,0,0.6)",
      }}
    >
      {/* Video */}
      <video
        src={videoUrl}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        controls
        loop
        playsInline
      />

      {/* Floating Actions (right side) */}
      <div
        style={{
          position: "absolute",
          right: "15px",
          bottom: "100px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <FaHeart size={28} color="#ff4d4d" />
          <div style={{ fontSize: "0.85rem" }}>{likes}</div>
        </div>

        <div
          style={{ textAlign: "center", cursor: "pointer" }}
          onClick={() => setShowComments(true)}
        >
          <FaComment size={28} color="#fff" />
          <div style={{ fontSize: "0.85rem" }}>{comments.length}</div>
        </div>

        <div style={{ textAlign: "center", cursor: "pointer" }}>
          <FaShare size={28} color="#fff" />
          <div style={{ fontSize: "0.85rem" }}>{shares}</div>
        </div>
      </div>

      {/* Title (toggle description) */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "15px",
          color: "#fff",
          background: "rgba(0,0,0,0.45)",
          padding: "10px 14px",
          borderRadius: "10px",
          cursor: "pointer",
          maxWidth: "80%",
        }}
        onClick={() => setShowDesc(!showDesc)}
      >
        <h4 style={{ margin: 0, fontSize: "1rem", fontWeight: "600" }}>
          {title}
        </h4>
        {showDesc && (
          <p
            style={{
              fontSize: "0.85rem",
              marginTop: "4px",
              lineHeight: "1.2",
              color: "#ddd",
            }}
          >
            {description}
          </p>
        )}
      </div>

      {/* Comments Overlay */}
      {showComments && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.9)",
            color: "#fff",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ margin: 0 }}>Comments</h3>
            <button
              onClick={() => setShowComments(false)}
              style={{
                background: "transparent",
                border: "1px solid #fff",
                color: "#fff",
                padding: "4px 8px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Close ✖
            </button>
          </div>

          <div style={{ flex: 1, overflowY: "auto" }}>
            {comments.map((c) => (
              <div
                key={c.id}
                style={{
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                  marginBottom: "10px",
                  paddingBottom: "8px",
                }}
              >
                <strong>{c.user}</strong>
                <p style={{ margin: "4px 0 0", fontSize: "0.9rem" }}>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoCard;
