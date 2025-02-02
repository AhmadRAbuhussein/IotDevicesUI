import {BaseQueryFn, FetchArgs, fetchBaseQuery, FetchBaseQueryError,} from '@reduxjs/toolkit/query';
import {Mutex} from 'async-mutex';
import {toast} from "react-toastify";


import Cookies from 'js-cookie';
import ENV from "src/env";

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
    baseUrl: ENV.API_BASE_URL,
    prepareHeaders: async (headers) => {
        const token = await Cookies.get('token');
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
            return headers;
        } else {
            headers.set('authorization', `Basic ${token}`);

        }
        return headers;
    },
});


const customFetchBase: BaseQueryFn<
    string | FetchArgs,
    any,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {

    await mutex.waitForUnlock();
    let result = await baseQuery(args, api, extraOptions) as any
    if (result.meta.request.method === 'POST' && result.meta.response.status === 200)
        toast.success('Action successful')
    if (result.meta.response.status === 500)
        toast.error('Something went wrong')
    if (result.meta.response.status >= 400 && result.meta.response.status < 500) {
        const error = Object.values(result.error?.data)
        toast.error(JSON.stringify(error))
    }

    if (result?.error?.data?.status === 401) {

        if (mutex.isLocked()) {
            await mutex.waitForUnlock();
            return baseQuery(args, api, extraOptions);
        }
        const release = await mutex.acquire();
        try {
            // api.dispatch(logout());
        } finally {
            release();
        }
    }
    return result;
};

export default customFetchBase;
