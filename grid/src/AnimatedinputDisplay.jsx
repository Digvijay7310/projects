import React, { useState, useEffect } from "react";

function AnimatedInputDisplay() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  // Typing animation effect
  useEffect(() => {
    let index = 0;
    let display = "";
    const interval = setInterval(() => {
      display += text[index];
      setDisplayText(display);
      index++;
      if (index >= text.length) clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-200 to-blue-100 font-poppins">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-purple-600 text-white flex justify-between items-center px-10 py-4 shadow-md">
        <h1 className="font-semibold text-xl">✨ React Magenta App</h1>
        <div className="space-x-6">
          <a href="#home" className="hover:opacity-70">Home</a>
          <a href="#features" className="hover:opacity-70">Features</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </div>
      </nav>

      {/* Main Section */}
      <section id="home" className="text-center py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">💬 Live Animated Input</h2>
        <p className="mb-6">Type something below and see it appear with a cool effect!</p>

        <input
          type="text"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-none rounded-lg px-4 py-2 w-2/3 max-w-md focus:outline-none ring-2 ring-purple-600 transition"
        />

        <div className="mt-8 text-2xl font-semibold text-pink-600 min-h-[40px] transition-all duration-300">
          {displayText || "Start typing..."}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-600 text-white text-center py-4 fixed bottom-0 w-full text-sm">
        Made with 💖 Magenta & React | © 2025
      </footer>
    </div>
  );
}

export default AnimatedInputDisplay;
