import React from 'react'
import Home from './pages/Home'
import {ToastContainer} from "react-toastify"

function App() {
  return (
    <div>
      <Home/>
      <ToastContainer style={{
        height: "60px",
        width: "200px",

        
      }} />
    </div>
  )
}

export default App