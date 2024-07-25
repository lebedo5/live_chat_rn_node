import { Text } from '../text/Text';
import { Pressable } from 'react-native';
import React from 'react';
import { useStyles } from './assets/button-style';
import { useTheme } from '../../hooks/theme';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    containerStyle?: any;
    disable?: boolean;
}

export const Button = ({
    title,
    onPress,
    containerStyle,
    disable,
}: ButtonProps) => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);

    return (
        <Pressable
            disabled={disable}
            onPress={onPress}
            style={[
                styles.buttonBlock,
                containerStyle,
                {
                    backgroundColor: disable
                        ? themeValue.secondFontColor
                        : themeValue.blue,
                },
            ]}>
            <Text
                boldFont
                style={[styles.buttonText, { opacity: disable ? 0.8 : 1 }]}>
                {title}
            </Text>
        </Pressable>
    );
};
