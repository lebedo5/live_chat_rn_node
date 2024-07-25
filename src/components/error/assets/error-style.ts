import { ThemeType } from '../../../theme';
import { StyleSheet } from 'react-native';
import { width } from '../../../consts';

export const useStyles = (theme: ThemeType) => {
    return StyleSheet.create({
        errorBlock: {
            backgroundColor: theme.red,
            paddingVertical: 10,
            width: width - 40,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 10,
        },
        errorText: {
            color: theme.white,
            paddingLeft: 4,
            fontWeight: 'bold',
        },
    });
};
