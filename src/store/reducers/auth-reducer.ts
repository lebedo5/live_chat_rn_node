import { createSlice } from '@reduxjs/toolkit';
import { login, logout } from '../thunks/auth-thunks';
import { ReducerState } from '../configure-store';
import { takeOne } from '../../helpers/store';

export interface AuthState extends ReducerState {
    signUpConfirmationStatus: 'pending' | 'success' | 'reject';
    authToken: string | undefined;
    refreshToken: string | undefined;
}

const initialState: AuthState = {
    errors: {},
    loading: 'none',
    requestIds: {},
    signUpConfirmationStatus: 'pending',
    authToken: undefined,
    refreshToken: undefined,
};

export const slice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.authToken = action.payload;
        },
        clearToken: state => {
            state.authToken = '';
        },
    },
    extraReducers: builder => {
        builder
            .addCase(login.pending, takeOne.pendingActionCase)
            .addCase(login.fulfilled, (state, action) => {
                takeOne.fulfilledActionCase(state, action);
                state.authToken = action.payload.access_token;
            })
            .addCase(login.rejected, takeOne.rejectedActionCase)
            .addCase(logout.pending, takeOne.pendingActionCase)
            .addCase(logout.fulfilled, takeOne.fulfilledActionCase)
            .addCase(logout.rejected, takeOne.rejectedActionCase);
    },
});

export const { setAuthToken, clearToken } = slice.actions;

export default slice.reducer;
