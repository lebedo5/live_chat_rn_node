import { AttentionIcon } from '../elements/icons/AttentionIcon';
import { Text } from '../text/Text';
import Animated, {
    Easing,
    useAnimatedStyle,
    withTiming,
} from 'react-native-reanimated';
import React, { FC } from 'react';
import { useStyles } from './assets/error-style';
import { useTheme } from '../../hooks/theme';

type ErrorProps = {
    message?: string;
    isVisible: boolean;
};

export const ErrorBlock: FC<ErrorProps> = ({ message, isVisible }) => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);

    const errorRStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(isVisible ? 1 : 0, {
                duration: 300,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            }),
        };
    }, [isVisible]);

    return (
        <Animated.View
            style={[
                styles.errorBlock,
                errorRStyle,
                {
                    display: isVisible ? 'flex' : 'none',
                },
            ]}>
            <AttentionIcon />
            <Text style={styles.errorText}>{message}</Text>
        </Animated.View>
    );
};
