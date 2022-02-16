import { useMobile } from "hooks/useMobile";
import React, { useEffect, useState } from "react";
import "./crud.scoped.scss";

interface Props {
  children: any;
}

export const Crud = ({ children }: Props) => {
  const [isMobile] = useMobile();
  const [crudClasses, setCrudClasses] = useState("t-crud");
  useEffect(() => {
    const dashboardInitClasses = ["t-crud"];
    if (isMobile) {
      dashboardInitClasses.push("--mobile");
    }
    setCrudClasses(dashboardInitClasses.join(" "));
  }, [isMobile]);
  return <div className={crudClasses}>{children}</div>;
};
