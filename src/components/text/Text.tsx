import { Text as ReactNativeText, TextProps } from 'react-native';
import { isAndroid } from '../../consts';
import themeValue from '../../theme/default-theme';

interface NewTextProps {
    boldFont?: boolean;
}
export const Text = (props: TextProps & NewTextProps) => {
    const {
        // text,
        children,
        style: styleOverride,
        adjustsFontSizeToFit,
        boldFont = false,
        ...rest
    } = props;

    const styles: any = [
        {
            fontFamily: boldFont
                ? isAndroid
                    ? 'poppins_semibold'
                    : 'Poppins-SemiBold'
                : isAndroid
                ? 'poppins_regular'
                : 'Poppins-Regular',
            color: themeValue.secondFontColor,
            fontSize: 14,
        },
        isAndroid && {
            fontWeight: 500,
        },
        styleOverride,
    ];

    return (
        <ReactNativeText
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            allowFontScaling={false}
            {...rest}
            style={styles}>
            {children}
        </ReactNativeText>
    );
};
