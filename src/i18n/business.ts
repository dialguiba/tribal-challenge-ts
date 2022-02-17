import { TFunction } from "i18next";

export const businessStaticData = (t: TFunction) => ({
  title: t("Businesses"),
  actions: {
    create: t("Create business"),
    edit: t("Edit business"),
    delete: t("Delete business"),
  },
  responses: {
    created: t("Business created"),
    deleted: t("Business deleted"),
    updated: t("Business updated"),
  },
  fields: {
    name: t("Name"),
  },
});
