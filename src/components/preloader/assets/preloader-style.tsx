import { StyleSheet } from 'react-native';
import themeValue from '../../../theme/default-theme';

export const useStyle = () => {
    return StyleSheet.create({
        root: {
            flex: 1,
            backgroundColor: themeValue.borderColor,
            zIndex: 999,
            elevation: 999,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};
