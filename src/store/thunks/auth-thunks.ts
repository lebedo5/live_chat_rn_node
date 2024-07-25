import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../configure-store';
import { resolveApiCall } from '../../services/api-handlers/api-resolver';

export const login = createAsyncThunk<any, undefined, ThunkConfig>(
    'auth/login',
    async (payload, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { auth } = getState();

        return resolveApiCall(
            thunkAPI,
            auth,
            async () => {
                // const result = await authorize({
                //     ...KEYCLOAK_AUTH_CONFIG,
                //     additionalParameters: { prompt: 'login' },
                //     connectionTimeoutSeconds: 5,
                //     iosPrefersEphemeralSession: true,
                // });
                //
                // const { data } = await AuthApi.fetchLongTimeToken({
                //     authToken: result.accessToken,
                // });
                //
                // if (data.access_token) {
                //     await UserAuthService.login({
                //         accessToken: data?.access_token,
                //         refreshToken: data?.refresh_token,
                //         idToken: result?.idToken,
                //     });
                //
                //     dispatch(setAuthToken(data?.access_token));
                //
                //     const fcmToken = await getToken();
                //     navigationRef.navigate(routes.UserFlow);
                //     if (fcmToken) {
                //         await dispatch(
                //             initDevice({
                //                 uniqueId: DeviceInfo.getDeviceId(),
                //                 token: fcmToken,
                //                 os: Platform.OS,
                //             }),
                //         );
                //     }
                // }
                //
                // return data;
            },
            async err => {
                const { response } = err;
            },
        );
    },
);

export const logout = createAsyncThunk<void, void, ThunkConfig>(
    'auth/logout',
    async (payload, thunkAPI) => {
        const { dispatch } = thunkAPI;
        // const token = await UserAuthService.getIdToken();
        // try {
        //     token &&
        //         (await authLogout(KEYCLOAK_AUTH_CONFIG, {
        //             idToken: token,
        //             postLogoutRedirectUrl:
        //                 'magellanjetscustomerapprn://Dashboard',
        //         }));
        // } catch (e) {
        //     console.log(e);
        // }
        //
        // await UserAuthService.logout();
        // dispatch(clearUserInfo());
        // dispatch(clearToken());
        // navigationRef.reset(routes.Registration);
    },
);
