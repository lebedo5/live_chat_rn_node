import { lightColors, darkColors } from '@rneui/themed';

export interface DefaultColorProps {
    border: {
        primary: string;
        valid: string;
        notValid: string;
    };
    font: {
        text: string;
        red: string;
    };
    button: {
        bgBlue: string;
    };
}
const mainColor = {
    blue: '#19226D',
    fontColor: '#19226D',
    secondFontColor: '#586775',
    lightGrey: '#B9B8B4',
    lightGrey2: '#EFEDE8',
    lightBlue: '#F4F6FD',
    tinyBlue: '#A9C0E4',
    skyColor: '#D4DFF1',
    notificationBg: '#D4DFF1',
    red: '#790000',
    beige: '#F5F4F0',
    white: '#ffffff',
    lightGreen: '#B8E4A9',
    green: '#98CC28',
    borderColor: 'rgba(25, 34, 109, 0.1)',
    greyBorderColor: '#DCDBD9',
    yellow: '#DAB966',
};

const border = {
    primary: '#2687DB',
    valid: 'green',
    notValid: 'red',
};

const font = {
    text: '#ffffff',
    red: '#e71010',
};

const button = {
    bgBlue: '#2687DB',
};

const fields = {
    placeholder: '#adacac',
};

export default {
    ...{
        button,
        font,
        border,
        fields,
    },
    ...lightColors,
    ...darkColors,
    ...mainColor,
};
