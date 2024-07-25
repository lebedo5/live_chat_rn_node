import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false,
        });
    },
    devTools: process.env.NODE_ENV === 'development',
});

export type StoreState = ReturnType<typeof store.getState>;
export type ReducerState = {
    loading: 'loading' | 'loaded' | 'none';
    requestIds: Record<string, string[]>;
    errors: Record<string, string>;
};
export type AppDispatch = typeof store.dispatch;

export type ThunkConfig = {
    state: StoreState;
    rejectValue: any; // TODO: think about type here
};
