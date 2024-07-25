import { StyleSheet } from 'react-native';
import { width } from '../../../consts';
import { ThemeType } from '../../../theme';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        buttonWrapper: {
            width: width - 40,
        },
        buttonContainer: {
            backgroundColor: theme.blue,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
        },
        buttonText: {
            fontWeight: '600',
            textAlign: 'center',
            fontSize: 14,
            textTransform: 'uppercase',
            color: theme.white,
        },
    });
};
