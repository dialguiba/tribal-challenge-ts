import React from "react";
import { Navigate } from "react-router-dom";
/* import { AuthContext } from "../auth/authContext"; */

export const PublicRoute = ({ children }) => {
  /* const { user } = useContext(AuthContext); */
  const isAuthenticated = true;
  return isAuthenticated ? <Navigate to="/" /> : children;
};
