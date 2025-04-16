import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username cannot exceed 20 characters")
    .required("Required field"),
  email: Yup.string().email("Invalid email format").required("Required field"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/\d/, "Must contain at least one digit")
    .required("Required field"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required field"),
  //   terms: Yup.boolean().oneOf([true], "Потрібно погодитися з умовами"),
});
