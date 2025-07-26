import React from 'react'

function VideoPlayer() {
  return (
    <div className='ring-1 ring-yellow-500 max-w-[900px] p-1'>
        <video
        muted
        loop
        autoPlay
        controls
         src='https://videos.pexels.com/video-files/33068566/14094793_2560_1440_30fps.mp4'
         className='w-full h-full rounded-2xl md:max-h-[580px] md:max-w-[900px]'
         />

    </div>
  )
}

export default VideoPlayer