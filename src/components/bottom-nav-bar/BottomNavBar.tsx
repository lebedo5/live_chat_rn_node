import { Keyboard, View } from 'react-native';
import routes from '../../navigations/routes';
import { useTheme } from '../../hooks/theme';
import React, { useCallback, useEffect, useState } from 'react';
import Animated, {
    Easing,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { useStyle } from './assets/bottom-nav-bar-styles';
import { TabItem } from './components/TabItem';
import { DashboardIcon } from './assets/icons/DashboardIcon';
import { NewFlightIcon } from './assets/icons/NewFlightIcon';
import { MyFlightIcon } from './assets/icons/MyFlightIcon';
import { SupportIcon } from './assets/icons/SupportIcon';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { isAndroid, width } from '../../consts';

export const TAB_WIDTH = 70;
export const TABS_WIDTH = width - (isAndroid ? 10 : 20);

export const BOTTOM_NAV_BAR_HEIGHT = isAndroid ? 80 : 85;
export interface TabProps {
    id: number;
    icon: React.ReactNode | string | any;
    title: string;
    routeName: string;
}

interface BottomNavBarProps {
    state: TabNavigationState<ParamListBase>;
}

const tabs: Array<TabProps> = [
    {
        id: 1,
        icon: <DashboardIcon />,
        title: 'Home',
        // routeName: routes.userFlow.Dashboard,
    },
    {
        id: 2,
        icon: <NewFlightIcon />,
        title: 'New Flight',
        // routeName: routes.userFlow.NewFlight,
    },
    {
        id: 3,
        icon: <MyFlightIcon />,
        title: 'My Flights',
        // routeName: routes.userFlow.MyFlight,
    },
    {
        id: 4,
        icon: <SupportIcon />,
        title: 'Support',
        // routeName: routes.userFlow.Support,
    },
];

export const BottomNavBar = ({ state }: BottomNavBarProps) => {
    const { themeValue } = useTheme();
    const widthShare = useSharedValue(0);
    const styles = useStyle(themeValue);

    const handlePress = useCallback(
        (screenName: string) => {
            const index = tabs.findIndex(el => el.routeName === screenName);
            const SPACE_BETWEEN_TAB = TABS_WIDTH / 4 - TAB_WIDTH;
            widthShare.value = withTiming(
                (TAB_WIDTH + SPACE_BETWEEN_TAB) * index,
                {
                    duration: 150,
                    easing: Easing.bezier(0.17, 0.67, 0.83, 0.67),
                },
            );
        },
        [widthShare.value],
    );

    const [keyboardStatus, setKeyboardStatus] = useState<boolean>();

    useEffect(() => {
        const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
            setKeyboardStatus(true);
        });
        const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
            setKeyboardStatus(false);
        });

        return () => {
            showSubscription.remove();
            hideSubscription.remove();
        };
    }, []);

    return keyboardStatus ? null : (
        <View style={styles.root}>
            <View style={styles.wrap}>
                <Animated.View
                    style={[
                        styles.designElement,
                        {
                            transform: [
                                {
                                    translateX: widthShare,
                                },
                            ],
                        },
                    ]}
                />
                {tabs.map(tab => (
                    <TabItem
                        key={tab.id}
                        tab={tab}
                        state={state}
                        handlePress={handlePress}
                    />
                ))}
            </View>
        </View>
    );
};
