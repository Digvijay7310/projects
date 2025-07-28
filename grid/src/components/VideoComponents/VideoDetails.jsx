import React, { useState } from 'react';
import { LuFlag, LuShare, LuThumbsUp } from 'react-icons/lu';

function VideoDetails() {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(prev => prev + 1);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this video!',
        text: 'Watch this awesome video on Nameloopy.',
        url: window.location.href,
      }).catch((error) => console.log('Error sharing', error));
    } else {
      // fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      alert('Video link copied to clipboard!');
    }
  };

  const handleReport = () => {
    alert('Report feature coming soon.');
  };

  return (
    <div className='flex justify-between items-center ring-1 ring-white mt-3 ml-0.5 p-2 rounded-md bg-zinc-900'>
      <div className='flex items-center w-1/3 gap-3'>
        <img
          src="https://up.yimg.com/ib/th/id/OIP.Kk4i-k-7bOfsgPv0SJtj5AHaHa?pid=Api&rs=1&c=1&qlt=95&w=117&h=117"
          alt="owner"
          className='h-10 w-10 rounded-full'
        />
        <div className="flex flex-col">
          <h2 className='text-lg font-semibold text-white'>FullName</h2>
          <p className='text-xs text-zinc-500'>Username</p>
        </div>
      </div>

      <div className='flex gap-6 w-2/3 text-white items-center justify-end text-xl'>
        <button onClick={handleLike} title='Like' className='flex items-center gap-1 hover:text-red-500 transition'>
          <LuThumbsUp />
          <span className='text-sm'>{likes}</span>
        </button>

        <button onClick={handleShare} title='Share' className='hover:text-blue-400 transition'>
          <LuShare />
        </button>

        <button onClick={handleReport} title='Report' className='hover:text-yellow-400 transition'>
          <LuFlag />
        </button>
      </div>
    </div>
  );
}

export default VideoDetails;
