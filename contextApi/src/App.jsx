// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

export default function App() {
  return (
    <ThemeProvider>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center'
      }}>
        <h1>React Context Example</h1>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
