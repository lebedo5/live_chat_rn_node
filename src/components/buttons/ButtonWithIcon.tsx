import { Text } from '../text/Text';
import { Pressable } from 'react-native';
import React from 'react';
import { useTheme } from '../../hooks/theme';
import { useStyles } from './assets/button-with-icon-style';

interface ButtonProps {
    title: string;
    onPress?: () => void;
    containerStyle?: any;
    icon?: React.ReactNode;
}

export const ButtonWithIcon = ({
    title,
    onPress,
    containerStyle,
    icon,
}: ButtonProps) => {
    const { themeValue } = useTheme();
    const styles = useStyles(themeValue);

    return (
        <Pressable
            onPress={onPress}
            style={[styles.buttonBlock, containerStyle]}>
            {icon}
            <Text boldFont style={styles.buttonText}>
                {title}
            </Text>
        </Pressable>
    );
};
