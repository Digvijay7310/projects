import React, { useState, useEffect } from "react";

const ScrollNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // scroll threshold
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Normal Navbar */}
      <nav
        className={`sticky top-0 z-50 bg-gray-800 text-white shadow-md transition-all duration-300 ${
          scrolled ? "hidden" : "block"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pkx-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold">MyLogo</div>
            <ul className="flex items-center space-x-2">
              <li>
                <a
                  href="#home"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-yellow-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Our Members
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Compact Navbar on Scroll */}
      <nav
        className={`sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ${
          scrolled ? "block" : "hidden"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-4xl  text-white">
          <ul className="flex justify-center space-x-8 h-12 items-center text-gray-800 font-semibold">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-blue-500 transition-colors">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">
                Contact
              </a>
            </li>
             <li>
                <a
                  href="#team"
                  className="hover:text-yellow-400 transition-colors"
                >
                  Our Members
                </a>
              </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default ScrollNavbar;
