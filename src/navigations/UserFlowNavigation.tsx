import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import { optionsConfig } from './AppNavigator';
import React from 'react';
import MainTabNavigator from './MainTabNavigation';

const Stack = createNativeStackNavigator();
export const UserFlowNavigation = () => {
    return (
        <Stack.Navigator initialRouteName={routes.MainTabs}>
            <Stack.Screen
                name={routes.MainTabs}
                component={MainTabNavigator}
                options={optionsConfig}
            />
        </Stack.Navigator>
    );
};
