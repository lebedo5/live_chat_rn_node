import * as yup from 'yup';

export const signupSchema = yup.object().shape({
    name: yup.string().required('Please enter a password.'),
    email: yup
        .string()
        .email('Please enter a valid email')
        .lowercase('Please use a lower case')
        .max(180)
        .required('This field is blank'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])/,
            `Password should be at least 8 characters and include upper-case, lower-case and number.`,
        )
        .matches(
            /^(?=.*[A-Z])/,
            `Password should be at least 8 characters and include upper-case, lower-case and number.`,
        )
        .matches(
            /^(?=.*[0-9])/,
            `Password should be at least 8 characters and include upper-case, lower-case and number.`,
        )
        .matches(
            /^(?=.*\d)[a-zA-Z0-9_!@#$%^&*-]{8,}$/,
            `Password should be at least 8 characters and include upper-case, lower-case and number.`,
        )
        .min(8, 'Password should be at least 8 characters')
        .max(16, 'Password should be shorter than or equal to 16 characters')
        .required('This field is blank.'),
});
