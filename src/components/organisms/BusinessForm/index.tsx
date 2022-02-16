import React, { useEffect, useState } from "react";
import "./create-form.scoped.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "@components/atoms/Button";
import { Input } from "@components/atoms/Input";
import { useMobile } from "@hooks/useMobile";
import { BusinessEntity } from "types/store";

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
}: Props) => {
  const [isMobile] = useMobile();
  const [mobileClass, setMobileClass] = useState<string>();

  useEffect(() => {
    setMobileClass(isMobile ? "--mobile" : "");
  }, [isMobile]);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
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
              Cancel
            </Button>
          )}
          {isMobile && canDeleteInMobile && (
            <Button type="button" onClick={onDelete} backgroundColor="#ffffff" textColor="#E32900" border="solid 1px #E32900">
              Delete Business
            </Button>
          )}
          <Button type="submit">{submitButtonText}</Button>
        </div>
      </form>
    </div>
  );
};
