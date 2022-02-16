/* import { DashboardRouter } from "@root/src/routes/DashboardRouter"; */
import "./dashboard-scoped.scss";
import { DashboardRouter } from "../../routes/DashboardRouter";
import React, { useEffect, useState } from "react";
import { Sidebar } from "components/organisms/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { useMobile } from "hooks/useMobile";
/* import { t } from "i18next"; */
import { useTranslation } from "react-i18next";
/* import { useTranslation } from "react-i18next"; */
/* Tal vez esto pasa a la app */

export const Dashboard = () => {
  /* const { t } = useTranslation("translation"); */
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
    <BrowserRouter>
      <div className={dashboardClasses}>
        {!isMobile && (
          <Sidebar
            bodyData={[
              {
                text: t("Overview"),
                icon: "squares",
                textColor: "#6b6e74",
                route: "overview",
              },
              {
                text: t("Tribal Pay"),
                icon: "bank",
                textColor: "#6b6e74",
                route: "tribal-pay",
              },
              { text: t("Tribal Credit"), icon: "credit-card", textColor: "#6b6e74", route: "tribal-credit" },
              {
                text: t("Payments"),
                icon: "dollar",
                textColor: "#6b6e74",
                route: "payments",
              },
              {
                text: t("Notifications"),
                icon: "bell",
                textColor: "#6b6e74",
                route: "notifications",
              },
              {
                text: "Users",
                icon: "user",
                textColor: "#6b6e74",
                route: "users",
              },
            ]}
            footerData={[
              {
                text: t("Legal"),
                textColor: "#6b6e74",
              },
              {
                text: t("FAQ"),
                textColor: "#6b6e74",
              },
              {
                text: t("Support"),
                textColor: "#6b6e74",
              },
            ]}
          />
        )}
        <main style={{ height: "100%" }}>
          <DashboardRouter />
        </main>
      </div>
    </BrowserRouter>
  );
};
