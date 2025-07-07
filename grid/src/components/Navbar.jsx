import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaAddressBook,
  FaArrowLeft,
  FaArrowRight,
  FaBars,
  FaHome,
  FaSearch,
  FaThumbsUp,
} from "react-icons/fa";
import { AiFillCustomerService, AiFillMessage } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { LuLogOut } from "react-icons/lu";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const handleOnClick = () => {
    setShowNavbar((prev) => !prev);
    setIsClick((prev) => !prev);
  };

  
  return (
    <>
      {/* Header */}
      <header className="bg-zinc-950  ">
        <div className="flex justify-between items-center px-2 py-3 sm:px-10">
          <div className="font-bold text-3xl text-red-500">
            Loo
            <span className="font-medium bg-red-500 rounded-3xl text-white">
              py
            </span>
          </div>

          {/* searchbar */}
          <form className="flex" id="search-form" name="search-form">
            <input
              id="search"
              name="search"
              type="search"
              className="bg-zinc-700 px-2 py-0.5 text-white outline-0 focus:ring-1 focus:ring-red-500 sm:w-[300px] md:w-[400px]"
            />
            <button className="bg-red-500 cursor-pointer py-2 px-3 text-white">
              <FaSearch />
            </button>
          </form>

          {/* Navbar */}
          <button
            onClick={handleOnClick}
            className="bg-zinc-800 p-1 rounded text-white text-2xl cursor-pointer"
          >
            {isClick ? <RxCross1 /> : <FaBars />}
          </button>
        </div>
      </header>

      <div className={`fixed top-[60px] right-0 h-auto p-2 w-[250px] bg-zinc-800 z-40 transform transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-x-0 block" : "translate-x-full"
        }`}>
        {showNavbar ? (
          <div className="flex flex-col">
            <Link
              to="/"
              className="pl-2 py-2  bg-zinc-800 w-full flex items-center gap-2 md:text-xl transition-colors duration-300 hover:text-red-500 cursor-pointer  text-white"
            >
              <FaHome />
              Home
            </Link>
            <Link
              to="/"
              className="pl-2 py-2 bg-zinc-800 w-full flex items-center gap-2 md:text-xl transition-colors duration-300 hover:text-red-500 cursor-pointer  text-white"
            >
              <FaThumbsUp />
              Likes{" "}
            </Link>
            <Link
              to="/"
              className="pl-2 py-2 bg-zinc-800 w-full flex items-center gap-2 md:text-xl transition-colors duration-300 hover:text-red-500 cursor-pointer  text-white"
            >
              <AiFillMessage />
              Comments
            </Link>
            <Link
              to="/"
              className="pl-2 py-2 bg-zinc-800 w-full flex items-center gap-2 md:text-xl transition-colors duration-300 hover:text-red-500 cursor-pointer  text-white"
            >
              <FaAddressBook />
              About
            </Link>
            <Link
              to="/"
              className="pl-2 py-2 bg-zinc-800 w-full flex items-center gap-2 md:text-xl transition-colors duration-300 hover:text-red-500 cursor-pointer  text-white"
            >
              <AiFillCustomerService />
              Contact
            </Link>
            <Link
              to="/"
              className="pl-2 py-2 bg-zinc-800 w-full flex items-center gap-2 md:text-xl transition-colors duration-300 hover:text-red-500 cursor-pointer  text-white"
            >
              <LuLogOut />
              Logout
            </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
}

export default Navbar;
