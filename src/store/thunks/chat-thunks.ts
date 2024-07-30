import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '../configure-store';
import {resolveApiCall} from '../../services/api-handlers/api-resolver';
import UserAuthService from '../../services/user-auth';
import { ChatApi } from "../../services/end-points";

export const createChat = createAsyncThunk<
    any,
    {secondId: string},
    ThunkConfig
>('chat/create-chat', async ({ secondId}, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;
    const {chat} = getState();

    const userId = await UserAuthService.getUserID();

    return resolveApiCall(
        thunkAPI,
        chat,
        async () => {
            const { data } = await ChatApi.createChat({
                firstId: userId,
                secondId,
            });
            return data;
        },
        async err => {
            const {response} = err;
        },
    );
});

export const findCurrentUserChats = createAsyncThunk<
    any,
    {firstId: string; secondId: string},
    ThunkConfig
>('chat/find-current-user-chats', async ({firstId, secondId}, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;
    const {chat} = getState();

    const userId = await UserAuthService.getUserID();
    return resolveApiCall(
        thunkAPI,
        chat,
        async () => {
            const {data} = await ChatApi.findCurrentUserChats(userId);
            return data;
        },
        async err => {
            const {response} = err;
        },
    );
});

export const findUserChatMessage = createAsyncThunk<
    any,
    { secondId: string},
    ThunkConfig
>('chat/find-user-chat-message', async ({ secondId}, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;
    const {chat} = getState();
    const userId = await UserAuthService.getUserID();

    return resolveApiCall(
        thunkAPI,
        chat,
        async () => {
            const { data } = await ChatApi.findUserChatMessage({
                firstId: userId,
                secondId,
            });
            return data;
        },
        async err => {
            const {response} = err;
        },
    );
});
