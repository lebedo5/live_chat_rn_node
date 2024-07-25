import { ThemeType } from '../../../theme';
import { StyleSheet } from 'react-native';
import { width } from '../../../consts';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        buttonBlock: {
            backgroundColor: theme.white,
            paddingVertical: 15,
            width: width - 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            flexDirection: 'row',
        },
        buttonText: {
            textTransform: 'uppercase',
            color: theme.secondFontColor,
            paddingLeft: 4,
        },
    });
};
