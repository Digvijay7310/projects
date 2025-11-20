import React, { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Mock login function
  const login = (email, password) => {
    const loggedInUser = { name: "Demo User", email, password }; // store password
    setUser(loggedInUser);
    return loggedInUser;
  };

  const logout = () => setUser(null);

  return (
    <UserContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
