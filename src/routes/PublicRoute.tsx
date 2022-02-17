import React from "react";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children }: { children: any }) => {
  const isAuthenticated = true;
  return isAuthenticated ? <Navigate to="/" /> : children;
};
