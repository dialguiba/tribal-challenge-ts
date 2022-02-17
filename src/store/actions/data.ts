import { TFunction } from "i18next";
import { businessStaticData } from "@i18n/business";
import { generalStaticData } from "@i18n/general";
import { personStaticData } from "@i18n/person";

const business = (t: TFunction) => {
  const businessTranslator = businessStaticData(t);
  const generalTranslator = generalStaticData(t);
  return {
    create: generalTranslator.actions.create,
    cancel: generalTranslator.actions.cancel,
    createBusiness: businessTranslator.actions.create,
    created: businessTranslator.responses.created,
    edit: businessTranslator.actions.edit,
    update: generalTranslator.actions.update,
    updated: businessTranslator.responses.updated,
    delete: generalTranslator.actions.delete,
    deleted: generalTranslator.responses.deleted,
    businessDeleted: businessTranslator.responses.deleted,
    deleteConfirm: generalTranslator.confirm.delete,
    deleteBusiness: businessTranslator.actions.delete,
    back: generalTranslator.actions.back,
  };
};

const persons = (t: TFunction) => {
  const personsTranslator = personStaticData(t);
  return {
    create: personsTranslator.actions.create,
    created: personsTranslator.responses.created,
    edit: personsTranslator.actions.edit,
    updated: personsTranslator.responses.updated,
    deleted: personsTranslator.responses.deleted,
    fields: {
      personName: personsTranslator.fields.personName,
      role: personsTranslator.fields.role,
      email: personsTranslator.fields.email,
      phone: personsTranslator.fields.phone,
      joinDate: personsTranslator.fields.joinDate,
    },
  };
};

const general = (t: TFunction) => {
  const generalTranslator = generalStaticData(t);
  return {
    create: generalTranslator.actions.create,
    cancel: generalTranslator.actions.cancel,
    delete: generalTranslator.actions.delete,
    deleted: generalTranslator.responses.deleted,
    deleteConfirm: generalTranslator.confirm.delete,
    save: generalTranslator.actions.save,
  };
};

export const staticData = (t: TFunction) => ({
  business: business(t),
  persons: persons(t),
  general: general(t),
});
