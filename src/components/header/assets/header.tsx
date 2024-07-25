import { ThemeType } from '../../../theme';
import { StyleSheet } from 'react-native';
import { width } from '../../../consts';

export const useStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        headerContainer: {
            alignItems: 'center',
        },
        headerWrap: {
            height: 57,
            width: width - 40,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        headerTitle: {
            color: theme.blue,
            fontSize: 15,
            width: '100%',
            textAlign: 'center',
        },
        headerSubTitle: {
            fontSize: 13,
            color: theme.secondFontColor,
            position: 'absolute',
            top: 25,
            width: '100%',
            textAlign: 'center',
        },
        headerTextBlock: {
            alignItems: 'center',
            justifyContent: 'center',
            width: width - 120,
        },
    });
};
