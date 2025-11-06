import React, { useState, useEffect, useRef } from 'react';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  const videoRef = useRef(null)

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Digvijay7310/Video-Data/refs/heads/main/videos.json')
      .then(res => res.json())
      .then(data => {
        setVideos(data.data); // your JSON has a "data" array
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-1 flex flex-col justify-center items-center min-h-screen bg-red-100">
      <h2 className='text-2xl tracking-widest mb-4'>Video Search</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full max-w-[800px]"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-1 mt-4">
        {filtered.length > 0 ? (
  filtered.map((v) => (
    <div key={v.id} className="bg-gray-100 flex flex-col justify-center items-center shadow rounded-xl p-1">
      <h4 className="font-medium text-xs sm:text-sm mb-1 text-center line-clamp-1">{v.title}</h4>
      <video
        onMouseOver={(e) => e.currentTarget.play()}
        onMouseLeave={(e) => {
          e.currentTarget.pause();
          e.currentTarget.currentTime = 0;
        }}
        className='w-40 md:w-full h-20 md:h-50 rounded-lg object-contain'
        muted
        playsInline
      >
        <source src={v.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
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
