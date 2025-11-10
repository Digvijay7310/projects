import React, { useState, useEffect } from 'react';

const VideoGallery = () => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Digvijay7310/Video-Data/refs/heads/main/videos.json')
      .then(res => res.json())
      .then(data => setVideos(data.data))
      .catch(err => alert("Fetch error:", err));
  }, []);

  const filtered = videos.filter(v =>
    v.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-pink-50 via-yellow-50 to-green-50">
      <h2 className='text-3xl font-semibold tracking-wider mb-6 text-gray-800 font-mono'>Video Search</h2>

      <input
        type="text"
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 p-2 rounded-xl w-full max-w-[800px] focus:outline-none focus:ring-2 focus:ring-pink-300 placeholder-gray-400 mb-6"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.length > 0 ? (
          filtered.map((v) => (
            <div
              key={v.id}
              className="bg-white flex flex-col justify-center items-center shadow-lg rounded-xl p-3 hover:scale-105 transition-transform duration-300"
            >
              <h4 className="font-semibold text-sm sm:text-base mb-2 text-center line-clamp-2">{v.title}</h4>
              <video
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
                className='w-full h-40 md:h-48 rounded-lg object-cover'
                muted
                playsInline
              >
                <source src={v.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-lg">No videos found.</p>
        )}
      </div>
    </div>
  );
};

export default VideoGallery;
