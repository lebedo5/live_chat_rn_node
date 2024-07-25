import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { useStyle } from './assets/preloader-style';

export const Preloader = () => {
    const styles = useStyle();
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.root]}>
            <ActivityIndicator size={'large'} />
        </View>
    );
};
