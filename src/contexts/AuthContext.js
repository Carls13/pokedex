import React, { useState, createContext } from "react";

export const AuthContext = createContext({
  auth: undefined,
  logIn: () => { },
  logOut: () => { },
});

export const AuthProvider = (props) => {
  const { children } = props;

  const [auth, setAuth] = useState(undefined);

  const logIn = (userData) => {
    console.log({ userData })
    setAuth(userData);
  }

  const logOut = () => {
    setAuth(undefined);
  }

  return (
    <AuthContext.Provider value={{
      auth,
      logIn,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}