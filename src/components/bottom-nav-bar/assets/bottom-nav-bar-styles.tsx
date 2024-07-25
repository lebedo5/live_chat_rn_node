import { StyleSheet } from 'react-native';
import { BOTTOM_NAV_BAR_HEIGHT, TAB_WIDTH } from '../BottomNavBar';
import { ThemeType } from '../../../theme';
import { width } from '../../../consts';

export const useStyle = (theme: ThemeType) => {
    return StyleSheet.create({
        root: {
            height: BOTTOM_NAV_BAR_HEIGHT,
            backgroundColor: 'white',
            alignItems: 'center',
        },
        wrap: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: width - 40,
        },
        designElement: {
            width: TAB_WIDTH,
            height: 2,
            backgroundColor: theme.blue,
            position: 'absolute',
        },
        tabBlock: {
            flexDirection: 'column',
            alignItems: 'center',
            width: TAB_WIDTH,
            marginTop: 10,
        },
        tabText: {
            fontSize: 11,
            marginTop: 8,
        },
    });
};
