import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import routes from './routes';
import LoginScreen from '../screens/Auth/screens/Login/LoginScreen';
import { optionsConfig } from './AppNavigator';

const Stack = createNativeStackNavigator();
const RegistrationNavigator = () => {
    return (
        <Stack.Navigator>
            {/*{hideOnboarding === 'OnboardingScreen' && (*/}
            {/*    <Stack.Screen*/}
            {/*        name={routes.registration.Onboarding}*/}
            {/*        component={OnboardingScreen}*/}
            {/*        options={optionsConfig}*/}
            {/*    />*/}
            {/*)}*/}
            <Stack.Screen
                name={routes.registration.Login}
                component={LoginScreen}
                options={optionsConfig}
            />
            {/*<Stack.Screen*/}
            {/*    name={routes.registration.ResetPassword}*/}
            {/*    component={ResetPasswordScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name={routes.registration.SuccessResetPassword}*/}
            {/*    component={SuccessResetPasswordScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name={routes.registration.TermAndConditions}*/}
            {/*    component={TermAndConditions}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
            {/*<Stack.Screen*/}
            {/*    name={routes.registration.GuestSupport}*/}
            {/*    component={GuestSupportScreen}*/}
            {/*    options={optionsConfig}*/}
            {/*/>*/}
        </Stack.Navigator>
    );
};

export default RegistrationNavigator;
