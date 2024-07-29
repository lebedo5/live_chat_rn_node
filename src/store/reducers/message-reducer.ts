import {createSlice} from '@reduxjs/toolkit';
import {login} from '../thunks/auth-thunks';
import {ReducerState} from '../configure-store';
import {takeOne} from '../../helpers/store';

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
};

export const slice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(login.pending, takeOne.pendingActionCase)
      .addCase(login.fulfilled, (state, action) => {
        takeOne.fulfilledActionCase(state, action);
        state.authToken = action.payload.token;
      })
      .addCase(login.rejected, takeOne.rejectedActionCase);
  },
});

export const {} = slice.actions;

export default slice.reducer;
