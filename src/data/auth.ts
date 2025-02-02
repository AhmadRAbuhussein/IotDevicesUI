import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./middleware";
import { SignIn, SignInResponse } from "src/types/signInType";

export const AuthApi = createApi({
    baseQuery: customFetchBase,
    reducerPath: "auth",
    tagTypes: ["auth"],
    endpoints: (builder) => ({
        login: builder.mutation<SignInResponse, SignIn>({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body: body,
            })
        }),
    })
});

export const
    {
        useLoginMutation,
    } = AuthApi;
