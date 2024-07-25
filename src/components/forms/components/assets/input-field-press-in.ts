import { ThemeType } from '../../../../theme';
import { StyleSheet } from 'react-native';
import { isAndroid } from '../../../../consts';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        blockStyles: {
            backgroundColor: theme.white,
            paddingHorizontal: 13,
            paddingVertical: isAndroid ? 0 : 14,
            flexDirection: 'row',
            alignItems: 'center',
        },
        halfScreen: {
            borderLeftColor: theme.greyBorderColor,
            borderLeftWidth: 1,
        },
        halfScreenError: {
            borderLeftColor: theme.red,
            borderLeftWidth: 2,
        },
        borderColor: {
            borderColor: theme.borderColor,
            borderWidth: 1,
        },
        errorBorderColor: {
            borderColor: theme.red,
            borderWidth: 2,
        },
        input: {
            marginLeft: 8,
            width: '90%',
            fontSize: 14,
        },
        iconBlock: { transform: [{ rotate: '-90deg' }] },
    });
};
