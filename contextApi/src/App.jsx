// App.js
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { UserProvider } from './context/UserContext';
import Login from './Login';

export default function App() {
  return (
    <UserProvider>
    <ThemeProvider>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        alignItems: 'center',
        width: "100%"
      }}>
        <h1>React Context Example</h1>
        <Login />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
    </UserProvider>
  );
}
