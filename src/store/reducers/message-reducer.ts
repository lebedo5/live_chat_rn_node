import {createSlice} from '@reduxjs/toolkit';
import {login} from '../thunks/auth-thunks';
import {ReducerState} from '../configure-store';
import {takeOne} from '../../helpers/store';
import { createMessage, getAllMessageFromChat } from "../thunks/message-thunks";

export interface AuthState extends ReducerState {
    signUpConfirmationStatus: 'pending' | 'success' | 'reject';
    authToken: string | undefined;
    refreshToken: string | undefined;
    chatMessages: any[];
}

const initialState: AuthState = {
    errors: {},
    loading: 'none',
    requestIds: {},
    signUpConfirmationStatus: 'pending',
    chatMessages: [],
};

export const slice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        clearChatMessage: (state) => {
            state.chatMessages = []
        }
    },
    extraReducers: builder => {
        builder
            .addCase(createMessage.pending, takeOne.pendingActionCase)
            .addCase(createMessage.fulfilled, takeOne.fulfilledActionCase)
            .addCase(
                createMessage.rejected,
                takeOne.rejectedActionCase,
            )
            .addCase(getAllMessageFromChat.pending, takeOne.pendingActionCase)
            .addCase(getAllMessageFromChat.fulfilled, (state, action) => {
                takeOne.fulfilledActionCase(state, action);
                state.chatMessages = action.payload;
            })
            .addCase(
                getAllMessageFromChat.rejected,
                takeOne.rejectedActionCase,
            );
    },
});

export const { clearChatMessage } = slice.actions;

export default slice.reducer;
