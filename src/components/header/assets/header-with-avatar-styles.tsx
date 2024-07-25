import { StyleSheet } from 'react-native';
import { ThemeType } from '../../../theme';
import { width } from '../../../consts';

export const useStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        headerContainer: {
            alignItems: 'center',
            paddingTop: 10,
        },
        wrap: {
            width: width - 40,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: 10,
        },
        title: {
            fontSize: 30,
            color: theme.blue,
            fontWeight: '300',
            marginTop: 45,
            marginBottom: 20,
        },
        image: {
            width: 44,
            height: 44,
            borderRadius: 44,
        },
        notificationButton: {
            width: 44,
            alignItems: 'flex-end',
        },
    });
};
