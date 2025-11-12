import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-900 px-4 py-6 text-white">
      <h2 className="text-center font-bold text-2xl mb-4">ImageHub</h2>

      <nav className="flex flex-col justify-center gap-4 mb-6">
        <Link to="/" className="hover:text-orange-400 transition">Home</Link>
        <Link to="/gallery" className="hover:text-orange-400 transition">Gallery</Link>
        <Link to="/about" className="hover:text-orange-400 transition">About</Link>
        <Link to="/contact" className="hover:text-orange-400 transition">Contact</Link>
        <Link to="/register" className="hover:text-orange-400 transition">Register</Link>
      </nav>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <h4 className="text-xl font-bold mb-2 md:mb-0">Get In Touch</h4>
        <input
          type="email"
          placeholder="Enter Email"
          className="bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-600"
        />
        <button
          type="button"
          className="bg-orange-600 rounded text-white text-lg hover:bg-orange-700 transition px-4 py-2"
        >
          Subscribe
        </button>
      </div>

      <p className="text-center text-gray-400 mt-4">&copy; 2025 ImageHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
