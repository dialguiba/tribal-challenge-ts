import { FormikValues } from "formik";
import React from "react";
import "./input.scoped.scss";

interface Props {
  formik?: FormikValues;
  labelText?: string;
  [x: string]: any;
}

export const Input = ({ formik, labelText = "", ...rest }: Props) => {
  return (
    <div className="a-input">
      <label className="a-input__label" htmlFor={rest.id}>
        {labelText}
        <input {...rest} className="a-input__input" />
      </label>
      {formik && <div className="a-input__error">{formik.touched[rest.id] && formik.errors[rest.id]}</div>}
    </div>
  );
};
