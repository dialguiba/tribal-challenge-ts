import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Businesses from "@pages/Businesses";
import Business from "@pages/Business";
import NotFound from "@pages/NotFound";

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
