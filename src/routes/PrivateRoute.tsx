import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: any }) => {
  const isAuthenticated = true;

  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
