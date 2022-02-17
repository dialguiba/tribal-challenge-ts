import { Button } from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { useFormik } from "formik";
import { useMobile } from "hooks/useMobile";
import { PersonEntity } from "types/store";
import * as Yup from "yup";
import "./person-form.scoped.scss";
import { useTranslation } from "react-i18next";
import { personStaticData } from "../../../i18n/person";
import { generalStaticData } from "../../../i18n/general";

interface Props {
  initialValues?: PersonEntity;
  onSubmit: (values: PersonEntity) => void;
  title: string;
  onCancel: () => void;
  submitButtonText: string;
  onDelete?: () => any;
  canDeleteInMobile?: boolean;
  cancelButtonText?: string;
  deleteButtonText?: string;
}

const defaultInitialValues = {
  id: "",
  name: "",
  role: "",
  email: "",
  phone: "",
  join_date: "",
};

export const PersonForm = ({
  initialValues = defaultInitialValues,
  onSubmit,
  title,
  onCancel,
  submitButtonText,
  onDelete,
  canDeleteInMobile = false,
  cancelButtonText = "Cancel",
  deleteButtonText = "Delete",
}: Props) => {
  const [isMobile] = useMobile();
  const { t } = useTranslation(["translation"]);

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required(generalStaticData(t).fields.required),
      role: Yup.string(),
      email: Yup.string().required(generalStaticData(t).fields.required).email(personStaticData(t).fields.invalidEmail),
      phone: Yup.string(),
      join_date: Yup.date().when((joinDate, schema) => joinDate && schema.max(new Date(), personStaticData(t).fields.dateShouldBeInPast)),
    }),
    onSubmit: (values) => onSubmit(values),
  });
  return (
    <div className="o-personForm">
      <h3 className="o-personForm__title">{title}</h3>

      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="text" labelText={personStaticData(t).fields.personName} id="name" {...formik.getFieldProps("name")} />
        <Input formik={formik} type="text" labelText={personStaticData(t).fields.role} id="role" {...formik.getFieldProps("role")} />
        <Input formik={formik} type="email" labelText={personStaticData(t).fields.email} id="email" {...formik.getFieldProps("email")} />
        <Input formik={formik} type="tel" labelText={personStaticData(t).fields.phone} id="phone" {...formik.getFieldProps("phone")} />
        <Input formik={formik} type="date" labelText={personStaticData(t).fields.joinDate} id="join_date" {...formik.getFieldProps("join_date")} />

        <div className="o-personForm__buttons">
          {!isMobile && (
            <Button type="button" onClick={onCancel} backgroundColor="#F8F8F8" textColor="Black">
              {cancelButtonText}
            </Button>
          )}
          {isMobile && canDeleteInMobile && (
            <Button type="button" onClick={onDelete} backgroundColor="#F8F8F8" textColor="#E32900" border="solid 1px #E32900">
              {deleteButtonText}
            </Button>
          )}
          <Button type="submit">{submitButtonText}</Button>
        </div>
      </form>
    </div>
  );
};
