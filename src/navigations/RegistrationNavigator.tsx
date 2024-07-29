import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import LoginScreen from '../screens/Auth/screens/Login/LoginScreen';
import { optionsConfig } from './AppNavigator';
import SignUpScreen from '../screens/Auth/screens/SignUp';

const Stack = createNativeStackNavigator();
const RegistrationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={routes.registration.SignUp}
                component={SignUpScreen}
                options={optionsConfig}
            />
            <Stack.Screen
                name={routes.registration.Login}
                component={LoginScreen}
                options={optionsConfig}
            />
        </Stack.Navigator>
    );
};

export default RegistrationNavigator;
