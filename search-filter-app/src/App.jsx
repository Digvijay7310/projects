import React from 'react'
import SearchApp from './components/SearchApp'
import DigitalClock from './components/DigitalClock'
import SearchWithDebounce from './components/SearchWithBounce'
import VideoGallery from './components/VideoGallery'


function App() {
  return (
    <div>
      <VideoGallery />
      <SearchWithDebounce />
      <SearchApp />
      <DigitalClock />
    </div>
  )
}

export default App