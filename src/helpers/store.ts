import {
    AsyncThunkFulfilledActionCreator,
    AsyncThunkPendingActionCreator,
    AsyncThunkRejectedActionCreator,
} from '@reduxjs/toolkit/dist/createAsyncThunk';
import { ReducerState, ThunkConfig } from '../store/configure-store';

const getActionType = (type: string) => {
    return type.replace(/\/(fulfilled|rejected|pending)$/, '');
};

const onePendingActionCase = <
    S extends ReducerState,
    A extends ReturnType<AsyncThunkPendingActionCreator<any, ThunkConfig>>,
>(
    state: S,
    action: A,
    callback?: (state: S, action: A) => void,
) => {
    // remove all other request ids from state
    state.requestIds[getActionType(action.type)] = [action.meta.requestId];
    state.loading = 'loading';
    state.errors[getActionType(action.type)] = '';
    callback && callback(state, action);
};

const everyPendingActionCase = <
    S extends ReducerState,
    A extends ReturnType<AsyncThunkPendingActionCreator<any, ThunkConfig>>,
>(
    state: S,
    action: A,
    callback?: (state: S, action: A) => void,
) => {
    // push to existing request ids in state
    state.requestIds[getActionType(action.type)] =
        state.requestIds[getActionType(action.type)] || [];
    state.requestIds[getActionType(action.type)].push(action.meta.requestId);
    state.loading = 'loading';
    state.errors[getActionType(action.type)] = '';
    callback && callback(state, action);
};

const fulfilledActionCase = <
    S extends ReducerState,
    A extends ReturnType<
        AsyncThunkFulfilledActionCreator<any, any, ThunkConfig>
    >,
>(
    state: S,
    action: A,
    callback?: (state: S, action: A) => void,
) => {
    const requestIds = state.requestIds[getActionType(action.type)] || [];
    if (requestIds.includes(action.meta.requestId)) {
        const allRequestIds = Object.values(state.requestIds).reduce(
            (prev, cur) => {
                prev.push(...cur);
                return prev;
            },
            [],
        );

        state.loading = allRequestIds.length > 1 ? state.loading : 'loaded';
        callback && callback(state, action);
    }

    state.requestIds[getActionType(action.type)] = requestIds.filter(
        rid => rid !== action.meta.requestId,
    );
};

const rejectedActionCase = <
    S extends ReducerState,
    A extends ReturnType<AsyncThunkRejectedActionCreator<any, ThunkConfig>>,
>(
    state: S,
    action: A,
    callback?: (state: S, action: A) => void,
) => {
    const requestIds = state.requestIds[getActionType(action.type)] || [];
    if (requestIds.includes(action.meta.requestId)) {
        const allRequestIds = Object.values(state.requestIds).reduce(
            (prev, cur) => {
                prev.push(...cur);
                return prev;
            },
            [],
        );

        state.errors[getActionType(action.type)] =
            action.payload?.message || '';
        state.loading = allRequestIds.length > 1 ? state.loading : 'loaded';
        callback && callback(state, action);
    }

    state.requestIds[getActionType(action.type)] = requestIds.filter(
        rid => rid !== action.meta.requestId,
    );
};

export const takeOne = {
    pendingActionCase: onePendingActionCase,
    fulfilledActionCase,
    rejectedActionCase,
};

export const takeEvery = {
    pendingActionCase: everyPendingActionCase,
    fulfilledActionCase,
    rejectedActionCase,
};

export const takeRelations = (key: string) => ({
    pendingActionCase: (
        state: any,
        action: ReturnType<AsyncThunkPendingActionCreator<any, ThunkConfig>>,
        callback?: () => void,
    ) => onePendingActionCase(state[key], action, callback),
    fulfilledActionCase: (
        state: any,
        action: ReturnType<
            AsyncThunkFulfilledActionCreator<any, any, ThunkConfig>
        >,
        callback?: () => void,
    ) => fulfilledActionCase(state[key], action, callback),
    rejectedActionCase: (
        state: any,
        action: ReturnType<AsyncThunkRejectedActionCreator<any, ThunkConfig>>,
        callback?: () => void,
    ) => rejectedActionCase(state[key], action, callback),
});
