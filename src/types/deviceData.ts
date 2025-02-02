export interface SearchDeviceDataModel {
    temperature: number;
    humidity: number;
    pressure: number;
    timestamp: Date;
}

export interface CreateDeviceDataModel {
    temperature?: number;
    humidity?: number;
    pressure?: number;
    deviceId?: string;
}