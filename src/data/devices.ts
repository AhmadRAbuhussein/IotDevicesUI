import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./middleware";
import { CreateDeviceModel, SearchDevicesResponseModel } from "src/types/devices";
import { CreateDeviceDataModel, SearchDeviceDataModel } from "src/types/deviceData";

export const DevicesApi = createApi({
    baseQuery: customFetchBase,
    reducerPath: "devices",
    tagTypes: ["devices", "deviceData"],
    endpoints: (builder) => ({
        searchDevices: builder.query<SearchDevicesResponseModel[], void>({
            providesTags: ["devices"],
            query: () => ({
                url: 'devices',
                method: 'GET',
            })
        }),
        createDevice: builder.mutation<void, CreateDeviceModel>({
            invalidatesTags: ["devices"],
            query: (body) => ({
                url: 'devices',
                method: 'POST',
                body: body,
            })
        }),
        searchDeviceData: builder.query<SearchDeviceDataModel[], {deviceId: string}>({
            providesTags: ["devices"],
            query: (params) => ({
                url: `devices/${params.deviceId}/data`,
                method: 'GET',
                params: {id: params.deviceId}
            })
        }),
        createDeviceData: builder.mutation<void, CreateDeviceDataModel>({
            invalidatesTags: ["devices"],
            query: (body) => ({
                url: `devices/${body.deviceId}/data`,
                method: 'POST',
                body: body,
            })
        }),
    })
});

export const
    {
        useCreateDeviceMutation,
        useSearchDevicesQuery,
        useSearchDeviceDataQuery,
        useCreateDeviceDataMutation
    } = DevicesApi;
