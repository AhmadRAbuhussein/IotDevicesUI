import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
import { Tokens } from 'src/types/commonType';
import { UserModel } from 'src/types/devices';

export interface UserState {
    isAuthenticated?: boolean
    accessToken?: string | null
    id?: number;
    email: string;
    role?: string;
}

const initialState: UserState = {
    isAuthenticated: !!Cookies.get('token'),
    accessToken: Cookies.get('token') ?? null,
    email: '',
    id: undefined,
    role: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: UserState, action: PayloadAction<UserModel>) => {
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.role = action.payload.role;
        },
        logout: (state: UserState) => {
            state.email = '';
            state.id = undefined;
            state.role = undefined;
            state.accessToken = null;
            state.isAuthenticated = false;
            Cookies.remove('token');
        },
        setTokens: (state, action: PayloadAction<Tokens>) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
        },
    },
})

export const {  logout, setTokens, setUser } = userSlice.actions

export default userSlice.reducer
