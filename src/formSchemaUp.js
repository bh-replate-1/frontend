import * as yup from 'yup'

const formSchemaUp = yup.object().shape({
    email: yup
    .string()
    .email("Valid Email is required to sign up.")
    .required("Email is required to sign up."),
    phone: yup
    .string()
    .required("Phone Number is required to Sign up."),
    password: yup
    .string()
    .min(8, "Password must be at least 8 characters.")
    .max(20, "Password can not exceed 20 characters.")
    .required('Password is required to Sign up.')

})

export default formSchemaUp