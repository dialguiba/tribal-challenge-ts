import React from "react";
import { ReactSVG } from "react-svg";
import "./not-found.scoped.scss";

const NotFound = () => {
  return (
    <div className="p-notFound">
      <ReactSVG src="/icons/404.svg" viewBox="5 0 90 100" className="p-notFound__svg" />
    </div>
  );
};

export default NotFound;
