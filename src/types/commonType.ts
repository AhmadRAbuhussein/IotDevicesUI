export type PagedModel<T> = {
    limit: number;
    result: T[];
    offset: number;
    total: number;
};

export type Tokens = {
    accessToken?: string;
};


export type RefreshToken = {
    jwt: string;
};

export type BasePagedSearch = {
    limit?: number;
    offset?: number;
};


export type LookupModel = {
    label: string;
    value: string;
}

export type Locale = "en" | "ar";
