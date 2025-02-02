import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Locale} from 'src/types';
import {AlertColor} from '@mui/material'
import Cookies from "js-cookie";
export interface AppState {
  isLoading: boolean
  headerTitle: string
  alert: {
    severity: AlertColor,
    content: string,
    isOpen: boolean
  }
  language: Locale;
}

const initialState: AppState = {
  isLoading: false,
  headerTitle: "",
  alert:{
    severity: 'error',
    content: '',
    isOpen: false
  },
  language: 'en'
}

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading =  action.payload;
        },
        setHeaderTitle: (state, action: PayloadAction<string>) => {
          state.headerTitle =  action.payload;
      },
      setAlert:(state, action: PayloadAction<{
        severity: AlertColor,
        content: string,
        isOpen: boolean
      }>) => {
        state.alert = action.payload;
      },
      setLanguage: (state, action: PayloadAction<Locale>) => {
        state.language = action.payload;
        Cookies.set("lang",action.payload)
      },
    },
})

export const { setIsLoading, setHeaderTitle,setAlert, setLanguage } = appSlice.actions

export default appSlice.reducer
