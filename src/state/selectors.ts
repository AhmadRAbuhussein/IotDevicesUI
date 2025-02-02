import {RootState} from "./store";

export const getIsLoading = (state: RootState) => state.app?.isLoading;
export const getIsAuthenticated = (state: RootState) => state.user?.isAuthenticated;
export const getHeaderTitle = (state: RootState) => state.app?.headerTitle;
export const getAlert = (state: RootState) => state.app?.alert;
export const getLanguage = (state: RootState) => state.app?.language;
export const getUser = (state: RootState) => state.user;
