import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../configure-store';
import { resolveApiCall } from '../../services/api-handlers/api-resolver';
import { AuthApi } from '../../services/end-points';
import UserAuthService from '../../services/user-auth';
import { clearToken } from '../reducers/auth-reducer';

export const login = createAsyncThunk<any, undefined, ThunkConfig>(
    'auth/login',
    async (payload, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { auth } = getState();

        return resolveApiCall(
            thunkAPI,
            auth,
            async () => {
                const { data } = await AuthApi.login(payload)
                console.log('data', data)
                await UserAuthService.login(data)
                return data
            },
            async err => {
                const { response } = err;
            },
        );
    },
);

export const signup = createAsyncThunk<any, undefined, ThunkConfig>(
    'auth/signup',
    async (payload, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { auth } = getState();
        return resolveApiCall(
            thunkAPI,
            auth,
            async () => {
                const { data } = await AuthApi.signup(payload)
                return data
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
        await UserAuthService.logout();
        dispatch(clearToken());
    },
);
