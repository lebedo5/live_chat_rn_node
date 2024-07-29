import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '../configure-store';
import {resolveApiCall} from '../../services/api-handlers/api-resolver';
import ChatApi from '../../services/end-points/chat-api';
import UserAuthService from '../../services/user-auth';

export const createChat = createAsyncThunk<
  any,
  {firstId: string; secondId: string},
  ThunkConfig
>('chat/create-chat', async ({firstId, secondId}, thunkAPI) => {
  const {dispatch, getState} = thunkAPI;
  const {chat} = getState();

  return resolveApiCall(
    thunkAPI,
    chat,
    async () => {
      const {data} = await ChatApi.createChat({
        firstId,
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
  {firstId: string; secondId: string},
  ThunkConfig
>('chat/find-user-chat-message', async ({firstId, secondId}, thunkAPI) => {
  const {dispatch, getState} = thunkAPI;
  const {chat} = getState();

  return resolveApiCall(
    thunkAPI,
    chat,
    async () => {
      const {data} = await ChatApi.findUserChatMessage({firstId, secondId});
      return data;
    },
    async err => {
      const {response} = err;
    },
  );
});
