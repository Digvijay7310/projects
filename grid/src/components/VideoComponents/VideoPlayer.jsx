import React from 'react'

function VideoPlayer() {
  return (
    <div className='hover:shadow-2xl hover:shadow-zinc-700'>
      <div className=' max-w-[900px] '>
        <video
        muted
        loop
        autoPlay
        controls
         src='https://videos.pexels.com/video-files/33068566/14094793_2560_1440_30fps.mp4'
         
         className='w-full h-full md:h-[580px] md:max-w-[900px]'
         />

    </div>
    </div>
  )
}

export default VideoPlayer