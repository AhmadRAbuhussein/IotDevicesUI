import {combineReducers, configureStore} from '@reduxjs/toolkit'
import UserReducer from './user';
import AppReducer from './app';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AuthApi} from "data/auth";
import { DevicesApi } from 'src/data/devices';


const reducers = combineReducers({
        user: UserReducer,
        app: AppReducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [DevicesApi.reducerPath]: DevicesApi.reducer,
})
;

const Store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            AuthApi.middleware,
            DevicesApi.middleware,
        ]),
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;
