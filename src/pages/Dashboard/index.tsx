import "./dashboard-scoped.scss";
import { DashboardRouter } from "@routes/DashboardRouter";
import { useEffect, useState } from "react";
import { Sidebar } from "@components/organisms/Sidebar";
import { HashRouter } from "react-router-dom";
import { useMobile } from "@hooks/useMobile";
import { useTranslation } from "react-i18next";
import { staticData } from "./data";

export const Dashboard = () => {
  const [isMobile] = useMobile();
  const [dashboardClasses, setDashboardClasses] = useState("dashboard");

  const { t } = useTranslation(["translation"]);

  useEffect(() => {
    const dashboardInitClasses = ["dashboard"];
    if (isMobile) {
      dashboardInitClasses.push("--mobile");
    }
    setDashboardClasses(dashboardInitClasses.join(" "));
  }, [isMobile]);

  return (
    <HashRouter>
      <div className={dashboardClasses}>
        {!isMobile && <Sidebar staticData={staticData(t)} />}
        <main style={{ height: "100%" }}>
          <DashboardRouter />
        </main>
      </div>
    </HashRouter>
  );
};
