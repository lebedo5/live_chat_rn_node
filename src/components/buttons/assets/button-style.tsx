import { ThemeType } from '../../../theme';
import { StyleSheet } from 'react-native';
import { width } from '../../../consts';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        buttonBlock: {
            paddingVertical: 15,
            width: width - 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
        },
        buttonText: {
            textTransform: 'uppercase',
            color: theme.white,
        },
    });
};
