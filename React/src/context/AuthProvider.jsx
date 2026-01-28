import React from "react";
import AuthContext from "../context/AuthContext";

const AuthProvider = ({ children }) => {
  const user = {
    id: 1,
    name: "mehatab",
    email: "mehatab661gmail.com",
  };

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
