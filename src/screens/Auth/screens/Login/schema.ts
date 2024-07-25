import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Please fill the mandatory field')
        .email()
        .label('Username'),
    password: yup
        .string()
        .required('Please fill the mandatory field')
        .label('Password'),
});
