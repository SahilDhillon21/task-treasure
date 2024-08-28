import * as Yup from "yup";
export const validationSchema = Yup.object().shape({
    brandname: Yup.string().required("Brand name is required").min(3, "Brand name must be at least 2 characters"),
    password2: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Confirm Password is required"),
});