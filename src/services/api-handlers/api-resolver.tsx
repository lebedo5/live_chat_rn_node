import { AxiosError } from 'axios';
import ErrorHandlerService from './error-handler';
import { BaseThunkAPI } from '@reduxjs/toolkit/dist/createAsyncThunk';
import {
    AppDispatch,
    ReducerState,
    StoreState,
} from '../../store/configure-store';
import { Dispatch } from 'redux';
import UserAuthService from '../user-auth';
import { clearToken } from '../../store/reducers/auth-reducer';
import EncryptedStorage from '../encrypted-storage';
import routes from '../../navigations/routes';
import { navigationRef } from '../../helpers/navigation';
import { useDispatch } from 'react-redux';

export interface ResolverApi {
    type: string;
    payload: any;
}

export interface ResolverApiSuccess {
    payload: any;
    sagaPayload: any;
}

export interface ResolverApiFailure {
    error: AxiosError;
}

export interface ResolverActionSuccess extends ResolverApiSuccess {
    type: string;
}

export interface ResolverActionFailure extends ResolverApiFailure {
    type: string;
}

const refreshQueue: Array<CallableFunction> = [];

export function handleError(result: ResolverApiFailure): any {
    if (result.error && result.error.response && result.error.response.status) {
        switch (result.error.response.status) {
            case 401:
                return ErrorHandlerService.handle401Error(result);
            case 404:
                return ErrorHandlerService.handle4xxError(result);
            case 403:
                return ErrorHandlerService.handle403Error(result);
            case 442:
                return ErrorHandlerService.handle442Error(result);
            case 500:
                return ErrorHandlerService.handle5xxError(result);
            default:
                return ErrorHandlerService.handlexxxError(result);
        }
    }

    console.info('handleError', result);
}

export function isPromise(obj: any): boolean {
    return (
        !!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.next === 'function'
    );
}

export const resolveApiCall = async <
    T extends BaseThunkAPI<StoreState, any, Dispatch, any>,
    K extends ReducerState,
>(
    thunkApi: T,
    state: K,
    executor: () => Promise<any>,
    onError?: (err: any) => Promise<any>,
): Promise<any> => {
    const { requestId, rejectWithValue, signal, fulfillWithValue } = thunkApi;
    const { loading, requestIds } = state;
    if (loading !== 'loading' /*|| !requestIds.includes(requestId)*/) {
        return rejectWithValue('running');
    }

    return await new Promise(async (resolve, reject) => {
        try {
            if (!signal.aborted) {
                const result = await executor();

                if (result) {
                    if (result.success <= 0) {
                        throw {
                            response: { data: { message: result.message } },
                        };
                    }
                    resolve(result);
                }
            }
        } catch (error: any) {
            try {
                const refreshToken = await UserAuthService.getRefreshToken();
                if (error.response.status === 401 && refreshToken) {
                    await handleRefresh(async () => {
                        try {
                            resolve(fulfillWithValue(await executor()));
                        } catch (e) {
                            return reject(
                                rejectWithValue(
                                    onError ? await onError(error) : error,
                                ),
                            );
                        }
                    }, thunkApi);
                }
                handleError({ error });
                if (!refreshToken) {
                    reject(
                        rejectWithValue(onError ? await onError(error) : error),
                    );
                }
            } catch (e) {
                refreshQueue.splice(0);
                reject(rejectWithValue(onError ? await onError(error) : error));
                return;
            }

            if (error.response.status !== 401) {
                reject(rejectWithValue(onError ? await onError(error) : error));
                return;
            }
        }
    });
};

export const resolveBuddyBossApiCall = async <
    T extends BaseThunkAPI<StoreState, any, Dispatch, any>,
    K extends ReducerState,
>(
    thunkApi: T,
    state: K,
    executor: () => Promise<any>,
    onError?: (err: any) => Promise<any>,
): Promise<any> => {
    const { requestId, rejectWithValue, signal, fulfillWithValue } = thunkApi;
    const { loading, requestIds } = state;
    if (loading !== 'loading' /*|| !requestIds.includes(requestId)*/) {
        return rejectWithValue('running');
    }

    return await new Promise(async (resolve, reject) => {
        try {
            if (!signal.aborted) {
                resolve(await executor());
            }
        } catch (error: any) {
            console.error(error);
            reject(rejectWithValue(onError ? await onError(error) : error));
        }
    });
};

async function handleRefresh(executor: () => Promise<any>, thunkAPI) {
    const refreshToken = await UserAuthService.getRefreshToken();
    const { dispatch } = thunkAPI;

    if (refreshToken) {
        if (refreshQueue.length === 0) {
            refreshQueue.push(executor);
            try {
                while (refreshQueue.length > 0) {
                    const fn = refreshQueue.shift();
                    fn && (await fn());
                }
            } catch (e) {
                if (e.code === 'invalid_grant') {
                    await UserAuthService.logout();
                    dispatch(clearToken());
                    refreshQueue.splice(0);
                    navigationRef.reset(routes.Registration);
                }
                throw e;
            }
        } else {
            refreshQueue.push(executor);
        }
        return;
    }
}
