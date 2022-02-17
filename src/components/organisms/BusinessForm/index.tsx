import { useEffect, useState } from "react";
import "./create-form.scoped.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@components/atoms/Button";
import { Input } from "@components/atoms/Input";
import { useMobile } from "@hooks/useMobile";
import { BusinessEntity } from "types/store";
import { useTranslation } from "react-i18next";
import { generalStaticData } from "@i18n/general";

interface Props {
  initialValues?: BusinessEntity;
  title?: string;
  onCancel?: () => void;
  submitButtonText?: string;
  handleUpdate?: () => void;
  id?: string;
  currentName?: string;
  onSubmit: (values: BusinessEntity) => void;
  canDeleteInMobile?: boolean;
  onDelete?: () => void;
  cancelButtonText?: string;
  deleteButtonText?: string;
}

const defaultInitialValues = {
  id: "",
  name: "",
};

export const BusinessForm = ({
  initialValues = defaultInitialValues,
  title,
  onCancel,
  submitButtonText,
  onSubmit,
  canDeleteInMobile = false,
  onDelete,
  cancelButtonText = "Cancel",
  deleteButtonText = "Delete",
}: Props) => {
  const [isMobile] = useMobile();
  const [mobileClass, setMobileClass] = useState<string>();
  const { t } = useTranslation(["translation"]);

  useEffect(() => {
    setMobileClass(isMobile ? "--mobile" : "");
  }, [isMobile]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required(generalStaticData(t).fields.required),
    }),
    onSubmit: (values) => onSubmit(values),
  });
  return (
    <div className="o-createForm">
      <h3 className="o-createForm__title">{title}</h3>

      <form className="o-createForm__form" onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="text" id="name" {...formik.getFieldProps("name")} />

        <div className={`o-createForm__buttons ${mobileClass}`}>
          {!isMobile && (
            <Button type="button" onClick={onCancel} backgroundColor="#F8F8F8" textColor="Black">
              {cancelButtonText}
            </Button>
          )}
          {isMobile && canDeleteInMobile && (
            <Button type="button" onClick={onDelete} backgroundColor="#ffffff" textColor="#E32900" border="solid 1px #E32900">
              {deleteButtonText}
            </Button>
          )}
          <Button type="submit">{submitButtonText}</Button>
        </div>
      </form>
    </div>
  );
};
