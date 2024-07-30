import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "../configure-store";
import { resolveApiCall } from "../../services/api-handlers/api-resolver";
import { MessageApi } from "../../services/end-points";

export const createMessage = createAsyncThunk<
    any,
    { chatId: string, senderId: string, text: string },
    ThunkConfig
>('message/create-message', async ({ chatId, senderId, text}, thunkAPI) => {
    const { getState } = thunkAPI;
    const { message } = getState();

    return resolveApiCall(
        thunkAPI,
        message,
        async () => {
            const { data } = await MessageApi.createMessage({
                chatId,
                senderId,
                text
            });
            return data;
        },
        async err => {
            const {response} = err;
        },
    );
});

export const getAllMessageFromChat = createAsyncThunk<
    any,
    { chatId: string },
    ThunkConfig
>('message/get-all-message-from-chat', async ({ chatId}, thunkAPI) => {
    const {dispatch, getState} = thunkAPI;
    const { message } = getState();

    return resolveApiCall(
        thunkAPI,
        message,
        async () => {
            const { data } = await MessageApi.getAllMessageFromChat(chatId);
            return data;
        },
        async err => {
            const {response} = err;
        },
    );
});
