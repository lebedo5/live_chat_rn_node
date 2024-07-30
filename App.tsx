/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import { AppNavigator } from './src/navigations/AppNavigator';
import { store } from './src/store/configure-store';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { View } from 'react-native';
import UserAuthService from './src/services/user-auth';
import { setAuthToken } from './src/store/reducers/auth-reducer';
import EncryptedStorage from 'react-native-encrypted-storage';
import { ChatContext } from './src/components/ChatContext';
import socketService from './src/utils/socketService';

enableScreens();
function App(): JSX.Element | null {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        socketService.initializeSocket();
        (async () => {
            const authToken = await UserAuthService.getAuthToken();
            store.dispatch(setAuthToken(authToken));
            setAppIsReady(true);
        })();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <Provider store={store}>
                <SafeAreaProvider>
                    <GestureHandlerRootView style={{ flex: 1 }}>
                        <AppNavigator />
                    </GestureHandlerRootView>
                </SafeAreaProvider>
            </Provider>
        </View>
    );
}

export default App;
