export interface SearchDevicesResponseModel {
    id: number;
    name: string;
    createdAt: Date;
    data?: any;
}

export interface CreateDeviceModel {
    name: string;
}