import { createSlice } from '@reduxjs/toolkit';
import { ReducerState } from '../configure-store';
import { takeOne } from '../../helpers/store';
import { getAllUsers, getUser } from '../thunks/user-thunk';

export interface AuthState extends ReducerState {
    signUpConfirmationStatus: 'pending' | 'success' | 'reject';
    currentUser: undefined,
    users: any[]
}

const initialState: AuthState = {
    errors: {},
    loading: 'none',
    requestIds: {},
    signUpConfirmationStatus: 'pending',
    currentUser: undefined,
    users: []
};

export const slice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getUser.pending, takeOne.pendingActionCase)
            .addCase(getUser.fulfilled, (state, action) => {
                takeOne.fulfilledActionCase(state, action);
                state.currentUser = action.payload;
            })
            .addCase(getUser.rejected, takeOne.rejectedActionCase)
            .addCase(getAllUsers.pending, takeOne.pendingActionCase)
            .addCase(getAllUsers.fulfilled, (state, action) => {
                takeOne.fulfilledActionCase(state, action);
                state.users = action.payload;
            })
            .addCase(getAllUsers.rejected, takeOne.rejectedActionCase)
        // getAllUsers
    },
});

export const {  } = slice.actions;

export default slice.reducer;
