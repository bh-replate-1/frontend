import * as yup from 'yup'

const formSchemaIn = yup.object().shape({
    username: yup
        .string()
        .required("Username is requried to LogIn."),
    password: yup
        .string()
        .required("Password is required to LogIn.")

})
export default formSchemaIn