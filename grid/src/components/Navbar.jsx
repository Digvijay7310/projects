import React from "react";
import {
  LuCat,
  LuCross,
  LuHouse,
  LuLayoutDashboard,
  LuLogOut,
  LuMenu,
  LuSearch,
  LuThumbsUp,
  LuTrendingUp,
  LuUpload,
  LuUserRound,
  LuVideo,
} from "react-icons/lu";
import {
  FaComment,
  FaUpload,
  FaArrowRight,
} from "react-icons/fa";
import {
  MdOutlineExplore,
  MdOutlineReportOff,
  MdOutlineRoundaboutLeft,
} from "react-icons/md";
import {  NavLink } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = React.useState(false);
  const [search, setSearch] = React.useState(false);
  const [largeScreenMenu, setLargeScreenMenu] = React.useState(false)

  const toggleSearch = () => {
    setSearch((prev) => !prev);
  };

  const toggleMenu = () => {
    setMenu((prev) => !prev);
  };

  const toggleLgMenu = () => {
    setLargeScreenMenu(prev => !prev)
  }

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-between md:justify-evenly items-center md:h-[80px] bg-black text-white px-4 py-2 shadow-md">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/vite.svg" alt="logo" className="h-10 rounded-full" />
          <span className="hidden md:block font-bold text-lg text-red-500">
            MyStream
          </span>
        </div>

        {/* Search */}
        <form className="hidden md:flex items-center bg-zinc-900 ring-1 ring-gray-200 hover:ring-red-500 rounded-4xl px-3 py-1 w-[200px] md:w-[400px]">
          <input
            type="search"
            placeholder="Search videos and creators "
            className="bg-transparent outline-none text-sm text-white ml-2 w-full px-1 py-2"
          />
        </form>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white hover:text-red-400"
            }
          >
            <LuHouse />
          </NavLink>

          <NavLink
            to="/videos/upload"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white hover:text-red-400"
            }
          >
            <LuUpload />
          </NavLink>


          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "text-white hover:text-red-400"
            }
          >
            <LuUserRound />
          </NavLink>

        </div>

        {/* Right Menu */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleSearch}
            className="text-2xl h-[50px] w-[50px]"
          >
            {search ? <LuCross /> : <LuSearch />}{" "}
          </button>
          <NavLink to="/users/profile" className=" scale-125">
            <LuUserRound size={20} />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl flex justify-center items-center  h-[50px] w-[50px]"
          >
            {menu ? <FaArrowRight /> : <LuMenu size={25} />}
          </button>
        </div>

        {/* Big screen menu button */}
        <div className="hidden md:flex md:justify-center md:items-center h-[50px] w-[50px]">
          <button onClick={toggleLgMenu}>{largeScreenMenu ? <FaArrowRight /> : <LuMenu size={25} />} </button>
        </div>
      </header>

      {/* Search icon */}
      {search && (
        <div className="flex justify-center transition-opacity">
          <form className=" fixed top-[60px] flex bg-zinc-800 ring-1 ring-zinc-200 fo rounded-4xl h-[50px] w-[300px]">
            <input
              type="search"
              placeholder="Search videos and creators"
              className="text-white p-2 w-5/6 rounded-l-4xl border-0 outline-0"
            />
            <button className="bg-black flex justify-center items-center p-2 text-white rounded-r-4xl w-1/6">
              <LuSearch size={20} />
            </button>
          </form>
        </div>
      )}

      {/* Mobile Dropdown Menu */}
      {menu && (
        <div className="md:hidden fixed top-[60px] right-0 bg-black text-white w-[200px] shadow-lg rounded-bl-lg p-3 flex flex-col gap-3 z-40">
          <NavLink
            to="/users"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuHouse /> Home
          </NavLink>

          <NavLink
            to="/users/profile"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuUserRound /> Profile
          </NavLink>

          <NavLink
            to="/videos/upload"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <FaUpload /> Upload
          </NavLink>

          <NavLink
            to="/videos/my-likes"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuThumbsUp /> Likes
          </NavLink>

          <NavLink
            to="/videos/my-comments"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <FaComment /> Comments
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <MdOutlineExplore /> Explore
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuCat /> Categories
          </NavLink>

          <NavLink
            to="/videos"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuVideo /> New Videos
          </NavLink>

          <NavLink
            to="/trending"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuTrendingUp /> Trending
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuLayoutDashboard /> Dashboard
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <MdOutlineRoundaboutLeft /> About
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <MdOutlineReportOff /> Report
          </NavLink>

          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 hover:scale-x-100"
                : "text-white flex items-center gap-2 hover:text-red-500"
            }
          >
            <LuLogOut /> Logout
          </NavLink>
        </div>
      )}

      {/* Large Dropdown Menu */}
      {largeScreenMenu && (
        <div className="fixed top-[80px] right-0 bg-black text-white w-[300px] shadow-lg rounded-bl-lg p-3 flex flex-col gap-4 z-40">
      

          <NavLink
            to="/videos/my-likes"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <LuThumbsUp /> Likes
          </NavLink>

          <NavLink
            to="/videos/my-comments"
           className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <FaComment /> Comments
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <MdOutlineExplore /> Explore
          </NavLink>

          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <LuCat /> Categories
          </NavLink>

          <NavLink
            to="/videos"
           className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <LuVideo /> New Videos
          </NavLink>

          <NavLink
            to="/trending"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <LuTrendingUp /> Trending
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <LuLayoutDashboard /> Dashboard
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <MdOutlineRoundaboutLeft /> About
          </NavLink>

          <NavLink
            to="/report"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <MdOutlineReportOff /> Report
          </NavLink>

          <NavLink
            to="/logout"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 font-semibold flex items-center gap-2 text-xl"
                : "text-white flex items-center gap-2 text-xl hover:text-gray-500"
            }
          >
            <LuLogOut /> Logout
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Navbar;
