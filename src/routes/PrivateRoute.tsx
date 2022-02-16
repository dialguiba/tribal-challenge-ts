import { Navigate } from "react-router-dom";
/* import { AuthContext } from "../auth/authContext"; */

export const PrivateRoute = ({ children }: { children: any }) => {
  /* const { user } = useContext(AuthContext); */
  /* const { pathname, search } = useLocation(); */
  const isAuthenticated = true;

  /* localStorage.setItem("lastPath", pathname + search); */

  return isAuthenticated ? children : <Navigate to="/auth/login" />;
};
