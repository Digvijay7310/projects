import React, { useState, useEffect } from "react";
import "./Navbar.css"; // styling alag file me rakho

const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowSticky(true);   // scroll hone par compact navbar dikhaye
      } else {
        setShowSticky(false);  // top par original header dikhaye
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Large Header (jab top par ho) */}
      {!showSticky && (
        <header className="main-header">
          <div className="logo">MyLogo</div>
          <input type="text" placeholder="Search..." />
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>
      )}

      {/* Compact Navbar (jab scroll kare) */}
      {showSticky && (
        <div className="sticky-navbar">
          <div className="logo">MyLogo</div>
          <nav>
            <a href="#home">Home</a>
            <a href="#about">About</a>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
