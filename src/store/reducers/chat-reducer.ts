import {createSlice} from '@reduxjs/toolkit';
import {ReducerState} from '../configure-store';
import {takeOne} from '../../helpers/store';
import {
  createChat,
  findCurrentUserChats,
  findUserChatMessage,
} from '../thunks/chat-thunks';

export interface AuthState extends ReducerState {
  signUpConfirmationStatus: 'pending' | 'success' | 'reject';
  authToken: string | undefined;
  refreshToken: string | undefined;
  currentUserChats: any[];
  chatMessages: any[];
}

const initialState: AuthState = {
  errors: {},
  loading: 'none',
  requestIds: {},
  signUpConfirmationStatus: 'pending',
  currentUserChats: [],
  chatMessages: [],
};

export const slice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createChat.pending, takeOne.pendingActionCase)
      .addCase(createChat.fulfilled, takeOne.fulfilledActionCase)
      .addCase(createChat.rejected, takeOne.rejectedActionCase)
      .addCase(findCurrentUserChats.pending, takeOne.pendingActionCase)
      .addCase(findCurrentUserChats.fulfilled, (state, action) => {
        takeOne.fulfilledActionCase(state, action);
        state.currentUserChats = action.payload.token;
      })
      .addCase(findCurrentUserChats.rejected, takeOne.rejectedActionCase)
      .addCase(findUserChatMessage.pending, takeOne.pendingActionCase)
      .addCase(findUserChatMessage.fulfilled, (state, action) => {
        takeOne.fulfilledActionCase(state, action);
        state.chatMessages = action.payload;
      })
      .addCase(findUserChatMessage.rejected, takeOne.rejectedActionCase);
  },
});

export const {} = slice.actions;

export default slice.reducer;
