import { normalize } from '../../../../utils/size-normalize';
import { Platform, StyleSheet } from 'react-native';
import { ThemeType } from '../../../../theme';
import { width } from '../../../../consts';

const isAndroid = Platform.OS === 'android';

export const useStyles = (theme: ThemeType) =>
    StyleSheet.create({
        themePoint: {
            width: 33,
            height: 33,
            borderRadius: 50,
            borderStyle: 'solid',
            borderWidth: 2,
            margin: 4,
        },
        themePointActive: {
            borderWidth: 4,
        },
        loginInputBlock: {
            width: '100%',
            flexDirection: 'column',
            zIndex: 100,
        },
        loginLabel: {
            paddingBottom: 10,
        },
        loginLabelText: {
            fontSize: normalize(4.5, 14, 18),
        },
        halfScreen: {
            borderLeftColor: theme.greyBorderColor,
            borderLeftWidth: 1,
        },
        halfScreenError: {
            borderLeftColor: theme.red,
            borderLeftWidth: 2,
        },
        loginInput: {
            fontSize: 14,
            width: width - 40,
            paddingHorizontal: 20,
            color: theme.secondFontColor,
            backgroundColor: theme.white,
            paddingVertical: 11,
        },
        halfInput: {
            fontSize: 14,
            width: (width - 60) / 2,
            paddingVertical: 11,
            paddingHorizontal: 20,
            color: theme.secondFontColor,
            backgroundColor: theme.white,
        },
        loginPlaceholder: {
            position: 'absolute',
            left: 130,
            top: 14,
            fontSize: normalize(4.5, 14, 18),
            zIndex: -1,
        },
        loginPlaceholderError: {},
        errorContainer: {
            zIndex: 100,
            minHeight: 18,
            width: '100%',
            paddingTop: 10,
        },
        errorText: {
            fontWeight: 'bold',
        },
        iconContainer: {
            position: 'absolute',
            right: 15,
            top: isAndroid ? 25 : 19,
        },
        notEditableInputStyle: {
            fontSize: 15,
            paddingTop: 13,
            paddingBottom: 10,
            paddingHorizontal: 15,
            borderWidth: 1,
            opacity: 1,
            color: theme.secondFontColor,
            borderColor: theme.greyBorderColor,
            lineHeight: 24,
        },
    });
