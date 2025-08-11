import "../src/App.css"
import CreatorProfile from "./components/CreatorProfile"
import Cards from "./components/Cards"
import DialogBox from "./components/DialogBox"
import Navbar from "./components/Navbar"
import WatchVideoPage from "./Pages/WatchVideoPage"
function App() {
 
  return (
    <div>
       <Navbar />
       <CreatorProfile/>
       <WatchVideoPage />
       <Cards/> 
       <DialogBox/>

    </div>
  )
}

export default App