import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy } from "react";

const Businesses = lazy(() => import("../pages/Businesses"));
const Business = lazy(() => import("../pages/Business"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const BusinessDirectoryRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="/overview" element={<Businesses />} />
        <Route path="/overview/:id" element={<Business />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
