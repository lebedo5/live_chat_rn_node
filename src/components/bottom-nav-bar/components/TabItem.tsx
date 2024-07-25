import { cloneElement, useMemo } from 'react';
import { Pressable } from 'react-native';
import { Text } from '../../text/Text';
import { TabProps } from '../BottomNavBar';
import {
    ParamListBase,
    TabNavigationState,
    useNavigation,
} from '@react-navigation/native';
import { useStyle } from '../assets/bottom-nav-bar-styles';
import { useTheme } from '../../../hooks/theme';

interface TabItemProps {
    tab: TabProps;
    state: TabNavigationState<ParamListBase>;
    handlePress: (val: string) => void;
}

export const TabItem = ({ tab, state, handlePress }: TabItemProps) => {
    const { themeValue } = useTheme();
    const navigation = useNavigation<any>();
    const styles = useStyle(themeValue);

    const isActive = useMemo(() => {
        handlePress(state.routes[state.index].name);
        return state.routes[state.index].name === tab.routeName;
    }, [state]);

    const goToScreen = () => {
        navigation.navigate(tab.routeName);
    };
    return (
        <Pressable
            hitSlop={{
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
            }}
            key={tab.title}
            onPress={goToScreen}
            style={styles.tabBlock}>
            {cloneElement(tab.icon, { active: isActive })}
            <Text
                style={[
                    styles.tabText,
                    {
                        color: isActive
                            ? themeValue.blue
                            : themeValue.secondFontColor,
                    },
                ]}>
                {tab.title}
            </Text>
        </Pressable>
    );
};
