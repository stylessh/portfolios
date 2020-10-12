import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .lowercase()
    .email("Invalid email")
    .max(255, "Max 255 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Too short password")
    .max(36, "Too long password")
    .required("Password is required"),
});
