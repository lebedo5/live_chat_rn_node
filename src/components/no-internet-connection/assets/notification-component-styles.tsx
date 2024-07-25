import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../theme';
import { width } from '../../../consts';

export const useStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        container: {
            backgroundColor: `rgba(0,0,0, 0.7)`,
            zIndex: 99,
            alignItems: 'center',
            justifyContent: 'center',
        },
        modalContainer: {
            backgroundColor: theme.white,
            width: width - 40,
            paddingVertical: 30,
            alignItems: 'center',
            borderRadius: 10,
            zIndex: 99,
            padding: 20,
        },
        notificationText: {
            fontSize: 16,
            marginBottom: 20,
            color: theme.secondFontColor,
            textAlign: 'center',
        },
        buttonBlock: {
            backgroundColor: theme.blue,
            paddingVertical: 8,
            width: width - 150,
            alignItems: 'center',
            borderRadius: 8,
        },
        buttonText: {
            color: theme.white,
            fontSize: 16,
            textTransform: 'uppercase',
        },
    });
};
