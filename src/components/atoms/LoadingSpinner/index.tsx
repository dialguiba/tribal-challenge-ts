import React, { Suspense } from "react";
import "./loading-spinner.scoped.scss";

interface Props {
  spinnerName?: string;
  fillColor?: string;
  strokeColor?: string;
  strokeOpacity?: string;
  speed?: string;
}

type module = {
  [key: string]: any;
};

export const LoadingSpinner = ({
  spinnerName = "BallTriangle",
  fillColor = "#2dfdbd",
  strokeColor = "#2dfdbd",
  strokeOpacity = ".125",
  speed = ".75",
}: Props) => {
  const Loader = React.lazy(() => import("react-loading-icons").then((module: module) => ({ default: module[spinnerName] })));

  return (
    <Suspense fallback="">
      <div className="a-loadingSpinner">
        <Loader fill={fillColor} stroke={strokeColor} strokeOpacity={strokeOpacity} speed={speed} />
      </div>
    </Suspense>
  );
};
