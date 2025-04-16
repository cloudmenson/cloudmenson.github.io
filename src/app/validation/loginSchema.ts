import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email format").required("Required field"),
  password: Yup.string()
    .required("Required field")
    .min(8, "Password must be at least 8 characters"),
});
