import * as yup from 'yup';

export const validationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .lowercase('Please use a lower case')
        .max(180)
        .required('This field is blank'),
    password: yup
        .string()
        .required('Please fill the mandatory field')
        .label('Password'),
});
