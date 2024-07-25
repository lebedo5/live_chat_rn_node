import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../../../theme';
import { isAndroid, width } from '../../../../../consts';

export const useStyles = (themeValue: ThemeType) => {
    return StyleSheet.create({
        rootContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: themeValue.lightBlue,
        },
        title: {
            color: themeValue.blue,
            fontSize: 25,
            textAlign: 'center',
            paddingHorizontal: 20,
            textTransform: 'capitalize',
        },
        descriptionBlock: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            width: width,
            paddingHorizontal: 20,
        },
        descriptionText: {
            fontSize: 14,
            color: themeValue.secondFontColor,
            lineHeight: 22.4,
            textAlign: 'center',
            marginTop: 13,
            marginBottom: 25,
        },
        forgotPasswordText: {
            color: themeValue.blue,
            fontSize: 15,
            textDecorationLine: 'underline',
            marginTop: 10,
        },
        errorBlock: {
            backgroundColor: themeValue.red,
            paddingVertical: 10,
            width: width - 40,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginBottom: 10,
        },
        errorText: {
            color: themeValue.white,
            paddingLeft: 4,
            fontWeight: 'bold',
        },
        subBlock: {
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
            width: '100%',
            justifyContent: 'center',
        },
        linkBlock: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        },
        linkText: {
            textTransform: 'uppercase',
        },
        arrowBlock: { marginLeft: 2, top: isAndroid ? -1.5 : 2 },
        subText: { marginRight: 5 },
        logoBlock: {
            alignItems: 'center',
            width: width - 40,
            position: 'absolute',
            top: 70,
        },
        supportBlock: { position: 'absolute', bottom: 40 },
    });
};
