import "../src/App.css"
import CreatorProfile from "./components/CreatorProfile"
import Cards from "./components/Cards"
import DialogBox from "./components/DialogBox"
import Navbar from "./components/Navbar"
import WatchVideoPage from "./Pages/WatchVideoPage"
import LoadingPage from "./Pages/LoadingPage"
import TodoList from "./components/TodoList"
import BackgroundColorChanger from "./components/BackgroundColorChanger"
import CounterPage from "./Pages/CounterPage"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import Home from "./Pages/Home"
import {  Routes, Route } from "react-router-dom"
import Resturants from "./Pages/Resturants"
import Orders from "./Pages/Orders"
function App() {
 
  return (
    <div>
       {/* 
       <Navbar />
       <CreatorProfile/>
       <WatchVideoPage />
       <Cards/> 
       <DialogBox/>
        <LoadingPage /> 
       <TodoList /> 
      <BackgroundColorChanger />
      <CounterPage />
      */}
      {/* <UserContextProvider>
        <Login/>
        <Profile />
      </UserContextProvider> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Resturants />} />
        <Route path="/order" element={<Orders />} />
      </Routes>

    </div>
  )
}

export default App