import { TFunction } from "i18next";

export const sidebarStaticData = (t: TFunction) => ({
  sections: {
    body: {
      overview: t("Overview"),
      tribalPay: t("Tribal pay"),
      tribalCredit: t("Tribal credit"),
      payments: t("Payments"),
      notifications: t("Notifications"),
      users: t("Users"),
    },
    footer: {
      legal: t("Legal"),
      faq: t("FAQ"),
      support: t("Support"),
    },
  },
});
