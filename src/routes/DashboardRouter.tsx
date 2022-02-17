import { Route, Routes } from "react-router-dom";
import { PrivateRoute } from "@routes/PrivateRoute";
import { PublicRoute } from "@routes/PublicRoute";
import { BusinessDirectoryRoutes } from "@routes/BusinessDirectoryRoutes";

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
