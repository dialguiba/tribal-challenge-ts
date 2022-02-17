import { TFunction } from "i18next";

export const generalStaticData = (t: TFunction) => ({
  title: t("Businesses"),
  actions: {
    create: t("Create"),
    cancel: t("Cancel"),
    update: t("Update"),
    delete: t("Delete"),
    save: t("Save"),
    back: t("Back"),
  },
  confirm: {
    delete: t("Are you sure you want to delete"),
  },
  responses: {
    deleted: t("Deleted"),
  },
  fields: {
    required: t("This field is required"),
  },
});
