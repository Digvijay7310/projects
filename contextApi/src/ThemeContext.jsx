// ThemeContext.js
import { createContext, useState } from 'react';

// Create the context
export const ThemeContext = createContext();

// Create a provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  // Toggle between 'light' and 'dark'
  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
