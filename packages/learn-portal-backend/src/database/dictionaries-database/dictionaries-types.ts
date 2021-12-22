export type TDictionary<T> = {
    name: string;
    localizedName: string;
    lastUpdateDate: string;
    records: T[];
};