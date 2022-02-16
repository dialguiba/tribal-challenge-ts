import { Business } from "pages/Business";
import { Routes, Route } from "react-router-dom";
import { Businesses } from "../pages/Businesses";
/* import { Home } from "../components/pages/Home"; */
import { NotFound } from "../pages/NotFound";
import { Navigate } from "react-router-dom";

export const BusinessDirectoryRoutes = () => {
  return (
    <>
      {/* <div className="routesContainer"> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Navigate to="/overview" />} />
        <Route path="/overview" element={<Businesses />} />
        <Route path="/overview/:id" element={<Business />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
      {/* </div> */}
    </>
  );
};
