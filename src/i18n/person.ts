import { TFunction } from "i18next";

export const personStaticData = (t: TFunction) => ({
  title: t("Persons"),
  actions: {
    create: t("Create person"),
    edit: t("Edit person"),
    delete: t("Delete person"),
  },
  responses: {
    created: t("Person created"),
    deleted: t("Person deleted"),
    updated: t("Person updated"),
  },
  fields: {
    personName: t("Person name"),
    role: t("Role"),
    email: t("Email"),
    phone: t("Phone"),
    joinDate: t("Join date"),
    invalidEmail: t("Invalid email address"),
    dateShouldBeInPast: t("Date must be in the past"),
  },
});
