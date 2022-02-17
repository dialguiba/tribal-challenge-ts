import { TFunction } from "i18next";
import { sidebarStaticData } from "@i18n/sidebar";

const bodyData = (t: TFunction) => {
  const sidebarTranslator = sidebarStaticData(t);
  return [
    {
      text: sidebarTranslator.sections.body.overview,
      icon: "squares",
      textColor: "#6b6e74",
      route: "overview",
    },
    {
      text: sidebarTranslator.sections.body.tribalPay,
      icon: "bank",
      textColor: "#6b6e74",
      route: "tribal-pay",
    },
    { text: sidebarTranslator.sections.body.tribalCredit, icon: "credit-card", textColor: "#6b6e74", route: "tribal-credit" },
    {
      text: sidebarTranslator.sections.body.payments,
      icon: "dollar",
      textColor: "#6b6e74",
      route: "payments",
    },
    {
      text: sidebarTranslator.sections.body.notifications,
      icon: "bell",
      textColor: "#6b6e74",
      route: "notifications",
    },
    {
      text: sidebarTranslator.sections.body.users,
      icon: "user",
      textColor: "#6b6e74",
      route: "users",
    },
  ];
};

const footerData = (t: TFunction) => {
  const sidebarTranslator = sidebarStaticData(t);
  return [
    {
      text: sidebarTranslator.sections.footer.legal,
      textColor: "#6b6e74",
    },
    {
      text: sidebarTranslator.sections.footer.faq,
      textColor: "#6b6e74",
    },
    {
      text: sidebarTranslator.sections.footer.support,
      textColor: "#6b6e74",
    },
  ];
};

export const staticData = (t: TFunction) => ({
  body: bodyData(t),
  footer: footerData(t),
});
