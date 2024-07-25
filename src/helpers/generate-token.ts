import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid } from 'react-native';

// permissions are necessary for correct push notifications sending on iOS devices
const connectToFirebase = async () => {
    messaging()
        .requestPermission()
        .then(authStatus => {
            const enabled =
                authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
                authStatus === messaging.AuthorizationStatus.PROVISIONAL;
            console.log('enabled', enabled);
            if (enabled) {
                messaging().subscribeToTopic('all');
                messaging()
                    .getAPNSToken()
                    .then(async apnsToken => {
                        await messaging().registerDeviceForRemoteMessages();
                        const ress = await messaging().getToken();
                        console.log('ress', ress);
                    });
            }
        })
        .catch(error => {
            console.log('sss', error);
        });
};

export default connectToFirebase;

export const requestNotificationPermission = async (callback: () => void) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
        console.log(granted);
        if (
            granted === PermissionsAndroid.RESULTS.GRANTED ||
            granted === 'never_ask_again'
        ) {
            callback && callback();
        }
    } catch (err) {
        console.warn(err);
    }
};

export const getToken = async () => {
    try {
        const res = await messaging().registerDeviceForRemoteMessages();
        const response = await messaging().getToken();
        console.log('getToken', res, response);
        return response;
    } catch (e) {
        console.error('aaaa', e);
    }

    return null;
};
