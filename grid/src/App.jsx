
import { BrowserRouter } from "react-router-dom"
import "../src/App.css"
import Box_animation from './components/Box_animation'
import Navbar from "./components/Navbar"

function App() {
 
  return (
    <div>
     <BrowserRouter>
      <Navbar />

     </BrowserRouter>
    </div>
  )
}

export default App