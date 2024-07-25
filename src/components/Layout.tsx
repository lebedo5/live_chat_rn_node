import React, { PropsWithChildren, useEffect, useMemo, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Edge } from 'react-native-safe-area-context/lib/typescript/src/SafeArea.types';
import {
    BackHandler,
    StatusBar,
    StatusBarStyle,
    useColorScheme,
} from 'react-native';
import themedStyles from './assets/layout-style';
import { useTheme } from '../hooks/theme';
import NetInfo from '@react-native-community/netinfo';
import NotInternetConnection from './no-internet-connection/NotInternetConnection';
import { useFocusEffect } from '@react-navigation/native';

interface Props {
    topSafeArea?: boolean;
    bottomSafeArea?: boolean;
    bgColor?: string;
}

const defaultColor = {};

const Layout: React.FC<PropsWithChildren<Props>> = (
    props: PropsWithChildren<Props>,
) => {
    const {
        topSafeArea = true,
        bottomSafeArea = false,
        bgColor,
    } = { ...defaultColor, ...props };
    const scheme = useColorScheme();
    const { themeValue } = useTheme();
    const styles = themedStyles();
    const [internetNotificationExist, setInternetNotificationExist] =
        useState<boolean>(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setInternetNotificationExist(!state?.isConnected);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    const edgesContent = useMemo(() => {
        var edges: Edge[] = ['right', 'left', 'top', 'bottom'];
        if (!topSafeArea) {
            edges = edges.filter(item => item !== 'top');
        }
        if (!bottomSafeArea) {
            edges = edges.filter(item => item !== 'bottom');
        }
        return edges;
    }, [topSafeArea, bottomSafeArea]);

    let barStyle: StatusBarStyle = 'default';
    switch (scheme) {
        case 'light':
            barStyle = 'dark-content';
            break;
        case 'dark':
            barStyle = 'light-content';
            break;
    }

    return (
        <SafeAreaView
            style={[
                styles.container,
                { backgroundColor: bgColor || themeValue.beige },
            ]}
            edges={edgesContent}>
            <StatusBar
                barStyle={'dark-content'}
                translucent={true}
                backgroundColor={'transparent'}
            />
            {internetNotificationExist && (
                <NotInternetConnection
                    buttonAction={() => setInternetNotificationExist(false)}
                />
            )}
            {props.children}
        </SafeAreaView>
    );
};

export default Layout;
