
import { BrowserRouter } from "react-router-dom"
import "../src/App.css"
import Cards from "./components/Cards"

function App() {
 
  return (
    <div>
     <BrowserRouter>
      {/* <Navbar />
      <Box_animation/> */}
      <Cards/>

     </BrowserRouter>
    </div>
  )
}

export default App