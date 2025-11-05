import React, { useState, useEffect } from 'react';


const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const res = fetch('https://example.com/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.log(err));
  }, []);

  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 flex flex-col justify-center items-center h-screen bg-red-100">
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
