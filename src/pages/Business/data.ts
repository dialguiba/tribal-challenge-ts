import { TFunction } from "i18next";
import { businessStaticData } from "../../i18n/business";
import { generalStaticData } from "../../i18n/general";
import { personStaticData } from "../../i18n/person";

export const business = (t: TFunction) => {
  const businessTranslator = businessStaticData(t);
  const generalTranslator = generalStaticData(t);
  return {
    title: businessTranslator.title,
    actions: {
      create: businessTranslator.actions.create,
      edit: businessTranslator.actions.edit,
      delete: businessTranslator.actions.delete,
      back: generalTranslator.actions.back,
    },
    responses: {
      created: businessTranslator.responses.created,
      deleted: businessTranslator.responses.deleted,
    },
  };
};

export const persons = (t: TFunction) => {
  const personsTranslator = personStaticData(t);
  return {
    title: personsTranslator.title,
    actions: {
      create: personsTranslator.actions.create,
    },
  };
};

export const staticData = (t: TFunction) => ({
  business: business(t),
  persons: persons(t),
});
