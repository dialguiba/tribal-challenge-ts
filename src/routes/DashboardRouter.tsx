import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { BusinessDirectoryRoutes } from "./BusinessDirectoryRoutes";

export const DashboardRouter = () => {
  /* const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false); */

  /* useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, checking]); */

  /* if (checking) {
    return <h1>Espere...</h1>;
  } */

  return (
    <Routes>
      <Route
        path="/auth/*"
        element={
          <PublicRoute>
            {/* <AuthRouter /> */}
            Public
          </PublicRoute>
        }
      />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <BusinessDirectoryRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
