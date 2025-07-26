import React from 'react'
import VideoPlayer from '../components/VideoComponents/VideoPlayer'
import VideoData from '../components/VideoComponents/VideoData'
import Comments from '../components/VideoComponents/Comments'
import SuggestionVideo from '../components/VideoComponents/SuggestionVideo'

function WatchVideoPage() {
  return (
    <div>
        <VideoPlayer />
        <VideoData />
        <Comments />
        <SuggestionVideo />
    </div>
  )
}

export default WatchVideoPage