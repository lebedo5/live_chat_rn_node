import React, { FC } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { useStyle } from './assets/notification-component-styles';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { useTheme } from '../../hooks/theme';
import { Text } from '../text/Text';

interface NotInternetConnectionProps {
    buttonAction?: () => void;
}

const NotInternetConnection: FC<NotInternetConnectionProps> = ({
    buttonAction,
}: NotInternetConnectionProps) => {
    const { themeValue } = useTheme();
    const styles = useStyle(themeValue);

    return (
        <Animated.View
            exiting={FadeOut}
            entering={FadeIn}
            style={[StyleSheet.absoluteFillObject, styles.container]}>
            <View style={styles.modalContainer}>
                <Text style={styles.notificationText}>
                    It looks like you have an unstable internet connection.
                    Please check your connection and try again.
                </Text>
                <Pressable style={styles.buttonBlock} onPress={buttonAction}>
                    <Text style={styles.buttonText}>ok</Text>
                </Pressable>
            </View>
        </Animated.View>
    );
};

export default NotInternetConnection;
