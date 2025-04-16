// src/app/validation/auth/registrationSchema.ts
import * as Yup from "yup";

export const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(30, "Name cannot exceed 30 characters")
    .required("Required field"),

  email: Yup.string().email("Invalid email format").required("Required field"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Must contain at least one uppercase letter")
    .matches(/\d/, "Must contain at least one digit")
    .required("Required field"),
});
