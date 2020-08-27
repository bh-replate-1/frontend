import * as yup from 'yup'

const formSchemaIn = yup.object().shape({
    email: yup
        .string()
        .email('Valid E-mail is required')
        .required("E-Mail is requried to LogIn."),
    password: yup
        .string()
        .min(6, "Password needs to be at least 6 characters.")
        .required("Password is required to LogIn.")

})
export default formSchemaIn