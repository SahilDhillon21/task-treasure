import * as Yup from "yup";
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required").min(3, "Username must be at least 3 characters"),
    email: Yup.string().matches(emailRegex, "Invalid email format").required("Email is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
    password2: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
  });