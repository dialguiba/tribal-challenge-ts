import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { BusinessDirectoryRoutes } from "./BusinessDirectoryRoutes";

export const DashboardRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<PublicRoute>Public</PublicRoute>} />
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
