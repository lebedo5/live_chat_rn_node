import { ThemeType } from '../../theme';
import { StyleSheet } from 'react-native';
import { width } from '../../consts';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        supportContainer: {
            flexDirection: 'column',
            marginTop: 20,
        },
        supportText: {
            color: theme.secondFontColor,
            fontSize: 14,
        },
        supportDescription: {
            color: theme.secondFontColor,
            fontSize: 13,
        },
        contactUsButton: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.white,
            paddingVertical: 12,
            width: width - 40,
            marginTop: 10,
        },
        contactUsText: {
            color: theme.secondFontColor,
            fontSize: 13,
            fontWeight: 'bold',
            textTransform: 'uppercase',
            paddingLeft: 6,
        },
    });
};
