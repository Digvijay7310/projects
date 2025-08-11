import "../src/App.css"
import CreatorProfile from "./components/CreatorProfile"
import Cards from "./components/Cards"
import DialogBox from "./components/DialogBox"
import Navbar from "./components/Navbar"
import WatchVideoPage from "./Pages/WatchVideoPage"
import LoadingPage from "./Pages/LoadingPage"
import TodoList from "./components/TodoList"
function App() {
 
  return (
    <div>
       {/* <Navbar />
       <CreatorProfile/>
       <WatchVideoPage />
       <Cards/> 
       <DialogBox/>  <LoadingPage /> */}
      <TodoList />

    </div>
  )
}

export default App