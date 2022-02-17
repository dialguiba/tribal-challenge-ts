import { TFunction } from "i18next";
import { businessStaticData } from "../../i18n/business";

export const businesses = (t: TFunction) => {
  const businessTranslator = businessStaticData(t);
  return {
    title: businessTranslator.title,
    actions: {
      create: businessTranslator.actions.create,
      edit: businessTranslator.actions.edit,
      delete: businessTranslator.actions.delete,
    },
    responses: {
      created: businessTranslator.responses.created,
      deleted: businessTranslator.responses.deleted,
    },
  };
};

export const staticData = (t: TFunction) => ({
  businesses: businesses(t),
});
