import React from 'react'
import VideoFeed from '../components/VideoFeed'

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100%'
    }} >
      <VideoFeed />
    </div>
  )
}

export default App