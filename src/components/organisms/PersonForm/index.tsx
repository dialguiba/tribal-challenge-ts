import { Button } from "components/atoms/Button";
import { Input } from "components/atoms/Input";
import { useFormik } from "formik";
import { useMobile } from "hooks/useMobile";
import * as Yup from "yup";
import "./person-form.scoped.scss";

interface Props {
  initialValues?: Record<string, string>;
  onSubmit: (values: Record<string, string>) => void;
  title: string;
  onCancel: () => void;
  submitButtonText: string;
  onDelete?: () => any;
  canDeleteInMobile?: boolean;
}

const defaultInitialValues = {
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
}: Props) => {
  const [isMobile] = useMobile();

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      role: Yup.string(),
      email: Yup.string().required("This field is required").email("Invalid email address"),
      phone: Yup.string(),
      join_date: Yup.string(),
    }),
    onSubmit: (values) => onSubmit(values),
  });
  return (
    <div className="o-personForm">
      <h3 className="o-personForm__title">{title}</h3>

      <form onSubmit={formik.handleSubmit}>
        <Input formik={formik} type="text" labelText="Person Name" id="name" {...formik.getFieldProps("name")} />
        <Input formik={formik} type="text" labelText="Role" id="role" {...formik.getFieldProps("role")} />
        <Input formik={formik} type="email" labelText="Email" id="email" {...formik.getFieldProps("email")} />
        <Input formik={formik} type="tel" labelText="Phone" id="phone" {...formik.getFieldProps("phone")} />
        <Input formik={formik} type="date" labelText="Join date" id="join_date" {...formik.getFieldProps("join_date")} />

        <div className="o-personForm__buttons">
          {!isMobile && (
            <Button type="button" onClick={onCancel} backgroundColor="#F8F8F8" textColor="Black">
              Cancel
            </Button>
          )}
          {isMobile && canDeleteInMobile && (
            <Button type="button" onClick={onDelete} backgroundColor="#F8F8F8" textColor="#E32900" border="solid 1px #E32900">
              Delete
            </Button>
          )}
          <Button type="submit">{submitButtonText}</Button>
        </div>
      </form>
    </div>
  );
};
