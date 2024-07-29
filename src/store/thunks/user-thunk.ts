// getUser

import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '../configure-store';
import { resolveApiCall } from '../../services/api-handlers/api-resolver';
import { AuthApi, UserApi } from '../../services/end-points';
import UserAuthService from '../../services/user-auth';

export const getUser = createAsyncThunk<any, undefined, ThunkConfig>(
    'user/get-user',
    async (payload, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { user } = getState();

        const userId = await UserAuthService.getUserID()
        return resolveApiCall(
            thunkAPI,
            user,
            async () => {
                const { data } = await UserApi.getUser({ userId })
                return data
            },
            async err => {
                const { response } = err;
            },
        );
    },
);

// getAllUsers

export const getAllUsers = createAsyncThunk<any, undefined, ThunkConfig>(
    'user/get-all-user',
    async (payload, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { user } = getState();

        return resolveApiCall(
            thunkAPI,
            user,
            async () => {
                const { data } = await UserApi.getAllUsers()
                return data
            },
            async err => {
                const { response } = err;
            },
        );
    },
);
