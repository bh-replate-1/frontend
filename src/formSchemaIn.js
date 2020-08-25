import * as yup from 'yup'

const formSchemaIn = yup.object().shape({
    email: yup
        .string()
        .required("E-Mail is requried to LogIn."),
    password: yup
        .string()
        .required("Password is required to LogIn.")

})
export default formSchemaIn