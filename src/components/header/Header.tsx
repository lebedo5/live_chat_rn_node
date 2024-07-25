import { Pressable, View } from 'react-native';
import { ArrowLeftIcon } from '../elements/icons/ArrowLeftIcon';
import { Text } from '../text/Text';
import React from 'react';
import { useStyle } from './assets/header';
import { useTheme } from '../../hooks/theme';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    title: string;
    onPress?: () => void;
    description?: string;
    rightComponent?: React.ReactNode;
}

export const Header = ({
    title,
    onPress,
    description,
    rightComponent,
}: HeaderProps) => {
    const { themeValue } = useTheme();
    const styles = useStyle(themeValue);
    const navigation = useNavigation<any>();

    const goBack = () => {
        if (onPress) {
            onPress();
        } else {
            navigation.goBack();
        }
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerWrap}>
                <Pressable
                    hitSlop={{
                        top: 10,
                        bottom: 10,
                        left: 10,
                        right: 10,
                    }}
                    onPress={goBack}>
                    <ArrowLeftIcon width={20} height={16} />
                </Pressable>
                <View style={styles.headerTextBlock}>
                    <Text boldFont style={styles.headerTitle}>
                        {title}
                    </Text>
                    <Text style={styles.headerSubTitle}>{description}</Text>
                </View>
                {rightComponent ? (
                    rightComponent
                ) : (
                    <View style={{ width: 20, height: 1 }} />
                )}
            </View>
        </View>
    );
};
