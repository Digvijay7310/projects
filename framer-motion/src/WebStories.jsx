import React, { useRef, useState } from 'react';
import { BiCommentAdd, BiDotsVertical, BiLike, BiShareAlt } from 'react-icons/bi';
import { FaCommentAlt } from "react-icons/fa";

function WebStories() {
  const likes = new Array(10).fill(null);
  const comments = new Array(12).fill(null);

  const [activeSection, setActiveSection] = useState(null);
  const videoRef = useRef(null);

  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
      videoRef.current?.play();
    } else {
      setActiveSection(section);
      videoRef.current?.pause();
    }
  };

  const handleVideoClick = () => {
    if (activeSection) {
      setActiveSection(null);
      videoRef.current?.play();
    }
  };

  return (
    <div className="bg-black min-h-screen flex justify-center items-center">
      <div className="relative w-full max-w-sm aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-lg">
        {/* Video */}
        <video
          ref={videoRef}
          src="/difference.mp4"
          autoPlay
          loop
          muted
          onClick={handleVideoClick}
          className="w-full h-full object-cover cursor-pointer"
        />

        {/* Action Buttons */}
        <div className="absolute top-1/2 right-3 -translate-y-1/2 z-10 flex flex-col gap-5 text-white">
          <button onClick={() => toggleSection('likes')} className="flex flex-col items-center">
            <BiLike size={28} />
            <span className="text-xs mt-1">Like</span>
          </button>
          <button onClick={() => toggleSection('comments')} className="flex flex-col items-center">
            <BiCommentAdd size={28} />
            <span className="text-xs mt-1">Comment</span>
          </button>
          <button className="flex flex-col items-center">
            <BiShareAlt size={28} />
            <span className="text-xs mt-1">Share</span>
          </button>
          <button className="flex flex-col items-center">
            <BiDotsVertical size={28} />
            <span className="text-xs mt-1">More</span>
          </button>
        </div>

        {/* Comments Section */}
        {activeSection === 'comments' && (
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-xl overflow-y-auto z-20 shadow-md">
            <div className="p-3 border-b text-center font-semibold text-sm">Comments</div>
            {comments.map((_, idx) => (
              <div key={idx} className="px-4 py-2 border-b flex gap-3 text-sm">
                <img
                  src={`https://i.pravatar.cc/40?img=${idx + 1}`}
                  alt="avatar"
                  className="h-8 w-8 rounded-full"
                />
                <div>
                  <p className="font-semibold">User {idx + 1}</p>
                  <p className="text-gray-700">This is a sample comment for user {idx + 1}.</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <FaCommentAlt size={12} />
                    <span>Reply</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Likes Section */}
        {activeSection === 'likes' && (
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white rounded-t-xl overflow-y-auto z-20 shadow-md">
            <div className="p-3 border-b text-center font-semibold text-sm">Likes</div>
            {likes.map((_, idx) => (
              <div key={idx} className="px-4 py-2 border-b flex items-center gap-3 text-sm">
                <img
                  src={`https://i.pravatar.cc/40?img=${idx + 11}`}
                  alt="avatar"
                  className="h-8 w-8 rounded-full"
                />
                <p className="font-semibold">User {idx + 1}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WebStories;
