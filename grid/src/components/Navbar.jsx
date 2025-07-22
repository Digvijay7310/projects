import React from 'react'
import {
  LuCat, LuHouse, LuLayoutDashboard, LuLogOut, LuMenu,
  LuThumbsUp, LuTrendingUp, LuUserCheck, LuUserRound, LuVideo
} from 'react-icons/lu'
import { FaComment, FaSearch, FaUser, FaUpload } from 'react-icons/fa'
import { MdOutlineExplore, MdOutlineReportOff, MdOutlineRoundaboutLeft } from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  const [menu, setMenu] = React.useState(false)

  const toggleMenu = () => {
    setMenu(prev => !prev)
  }

  return (
    <>
      {/* Header */}
      <header className='fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-black text-white px-4 py-2 shadow-md'>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="avatar2.jpg" alt="logo" className="h-10 rounded-full" />
          <span className="hidden md:block font-bold text-lg text-red-500">MyStream</span>
        </div>

        {/* Search */}
        <form className="hidden md:flex items-center bg-zinc-800 ring-1 ring-white rounded-full px-3 py-1 w-[200px] md:w-[400px]">
          <FaSearch className="text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-white ml-2 w-full"
          />
        </form>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-red-500' : 'text-white hover:text-red-400'
          }><LuHouse /></NavLink>

          <NavLink to="/profile" className={({ isActive }) =>
            isActive ? 'text-red-500' : 'text-white hover:text-red-400'
          }><LuUserRound /></NavLink>

          <NavLink to="/upload" className={({ isActive }) =>
            isActive ? 'text-red-500' : 'text-white hover:text-red-400'
          }><FaUpload /></NavLink>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-3">
          <button onClick={toggleMenu} className="md:hidden text-xl">
            <LuMenu />
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menu && (
        <div className="md:hidden fixed top-[60px] right-0 bg-black text-white w-[200px] shadow-lg rounded-bl-lg p-3 flex flex-col gap-3 z-40">
          <NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuHouse /> Home</NavLink>

          <NavLink to="/profile" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuUserRound /> Profile</NavLink>

          <NavLink to="/upload" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><FaUpload /> Upload</NavLink>

          <NavLink to="/likes" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuThumbsUp /> Likes</NavLink>

          <NavLink to="/comments" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><FaComment /> Comments</NavLink>

          <NavLink to="/explore" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><MdOutlineExplore /> Explore</NavLink>

          <NavLink to="/categories" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuCat /> Categories</NavLink>

          <NavLink to="/videos" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuVideo /> New Videos</NavLink>

          <NavLink to="/trending" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuTrendingUp /> Trending</NavLink>

          <NavLink to="/dashboard" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuLayoutDashboard /> Dashboard</NavLink>

          <NavLink to="/about" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><MdOutlineRoundaboutLeft /> About</NavLink>

          <NavLink to="/report" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><MdOutlineReportOff /> Report</NavLink>

          <NavLink to="/logout" className={({ isActive }) =>
            isActive ? 'text-red-500 font-bold flex items-center gap-2' : 'text-white flex items-center gap-2'
          }><LuLogOut /> Logout</NavLink>
        </div>
      )}
    </>
  )
}

export default Navbar
