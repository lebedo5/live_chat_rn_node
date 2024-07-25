import { StyleSheet } from 'react-native';
import themeValue from '../../theme/default-theme';

export const useStyle = () => {
    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        constructionWorksContainer: {},
        constructionWorks: {
            height: 180,
            width: 220,
        },
        underConstructionText: {
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 20,
            textAlign: 'center',
            color: themeValue.secondFontColor,
        },
    });
};
