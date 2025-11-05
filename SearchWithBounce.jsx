import React, { useState, useEffect } from "react";

const allTitles = [
  "boy playing football",
  "boy singing",
  "boy dancing",
  "girl dancing",
  "beautiful sunset",
  "nature video",
  "city view",
];

const SearchWithDebounce = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // 🕒 Debounce logic
  useEffect(() => {
    const handler = setTimeout(() => {
      if (query.trim() === "") {
        setSuggestions([]);
        return;
      }
      const filtered = allTitles.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // top 5 suggestions
    }, 400); // 400ms delay

    return () => clearTimeout(handler); // cleanup
  }, [query]);

  return (
    <div style={{ maxWidth: 400, margin: "50px auto", fontFamily: "Poppins" }}>
      <input
        type="text"
        value={query}
        placeholder="Search videos..."
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: "10px",
          fontSize: "1rem",
          borderRadius: "8px",
          border: "2px solid #1e90ff",
        }}
      />

      {/* Suggestion box */}
      {suggestions.length > 0 && (
        <div
          style={{
            background: "white",
            border: "1px solid #ccc",
            borderTop: "none",
            borderRadius: "0 0 8px 8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }}
        >
          {suggestions.map((s, i) => (
            <div
              key={i}
              style={{
                padding: "10px",
                cursor: "pointer",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => {
                setQuery(s);
                setSuggestions([]);
              }}
            >
              🔍 {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchWithDebounce;



import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://example.com/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2>Video Search</h2>
      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filtered.length > 0 ? (
          filtered.map((v, i) => (
            <div key={i} className="bg-white shadow rounded p-2">
              <h4>{v.title}</h4>
              <video width="100%" controls src={v.url}></video>
            </div>
          ))
        ) : (
          <p>No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
