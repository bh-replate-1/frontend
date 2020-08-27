import * as yup from 'yup'

const formSchemaUp = yup.object().shape({
    email: yup
    .string()
    .email("Valid Email is required to sign up.")
    .required("Email is required to sign up."),
    phone: yup
    .string()
    .min(11, "Phone needs to be in 15556661234 format.")
    .max(11, "Phone needs to be in 15556661234 format.")
    .required("Phone Number is required to Sign up."),
    password: yup
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(10, "Password can not exceed 10 characters.")
    .required('Password is required to Sign up.')

})

export default formSchemaUp