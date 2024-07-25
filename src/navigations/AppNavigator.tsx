import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationNavigator from './RegistrationNavigator';
import routes, { RootStackParamList } from './routes';
import { navigationRef } from '../helpers/navigation';
import { useSelector } from 'react-redux';
import { getSelectedAuthToken } from '../store/selectors/auth-selectors';
import { enableScreens } from 'react-native-screens';
import { UserFlowNavigation } from './UserFlowNavigation';
import { EndPointService } from '../services/api-handlers/axios';
import { useDispatch } from '../hooks/dispatch';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const optionsConfig: {} = {
    orientation: 'portrait',
    headerShown: false,
    tabBarHideOnKeyboard: true,
};

enableScreens();
export const AppNavigator = () => {
    const authToken = useSelector(getSelectedAuthToken);
    const dispatch = useDispatch();

    useEffect(() => {
        if (authToken) {
            EndPointService.setAuthorizationToken(authToken);
        }
    }, [authToken, dispatch]);


    return (
        <NavigationContainer ref={navigationRef}>
            <RootStack.Navigator
                screenOptions={{ gestureEnabled: false }}
                initialRouteName={routes.Registration}>
                {authToken ? (
                    <RootStack.Screen
                        options={optionsConfig}
                        name={routes.UserFlow}
                        component={UserFlowNavigation}
                    />
                ) : (
                    <RootStack.Screen
                        options={optionsConfig}
                        name={routes.Registration}
                        component={RegistrationNavigator}
                    />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
};
