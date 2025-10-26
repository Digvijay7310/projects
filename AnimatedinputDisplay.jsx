import React, { useState, useEffect } from "react";
import "./App.css";

function AnimatedinputDisplay() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [animate, setAnimate] = useState(false);

  // Animation trigger when text changes
  useEffect(() => {
    if (text.trim() === "") {
      setDisplayText("");
      return;
    }

    setAnimate(true);
    const timeout = setTimeout(() => {
      setDisplayText(text);
      setAnimate(false);
    }, 200);

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <div className="main-container">
      <nav className="navbar">
        <h1 className="logo">✨ React Magenta App</h1>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="content-section">
        <h2>💬 Live Animated Input</h2>
        <p>Type something below and see it appear with a cool effect!</p>

        <input
          type="text"
          placeholder="Type your text here..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="input-box"
        />

        <div className={`output ${animate ? "fade" : ""}`}>
          {displayText || "Start typing..."}
        </div>
      </section>

      <footer className="footer">
        <p>Made with 💖 Magenta & React | © 2025</p>
      </footer>
    </div>
  );
}
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

body {
  margin: 0;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(135deg, #fce4ec, #f8bbd0, #f3e5f5);
  min-height: 100vh;
  color: #333;
}

/* 🌟 Navbar */
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #e20074;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.logo {
  font-weight: 600;
}

.links a {
  color: white;
  margin-left: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
}

.links a:hover {
  opacity: 0.7;
}

/* 🏠 Main Section */
.content-section {
  padding: 60px 20px;
  text-align: center;
}

.input-box {
  margin-top: 20px;
  padding: 12px 20px;
  width: 60%;
  max-width: 400px;
  border: 2px solid #e20074;
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  transition: 0.3s ease;
}

.input-box:focus {
  border-color: #8e24aa;
  box-shadow: 0 0 8px #e20074;
}

/* ✨ Animated Output */
.output {
  margin-top: 30px;
  font-size: 28px;
  color: #e20074;
  font-weight: 600;
  min-height: 40px;
  transition: all 0.4s ease;
}

.fade {
  opacity: 0;
  transform: scale(1.05);
  color: #8e24aa;
}

/* 🦶 Footer */
.footer {
  background: #e20074;
  color: white;
  text-align: center;
  padding: 15px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 14px;
}
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

export default AnimatedinputDisplay;
