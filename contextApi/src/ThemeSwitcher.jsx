// ThemeSwitcher.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '1rem',
        textAlign: 'center',
        height: '600px',
        width: '600px'
      }}
    >
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
