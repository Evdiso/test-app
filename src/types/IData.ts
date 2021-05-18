import {ICompany} from "./ICompany";

export interface IData {
    data: ICompany[];
    isError: boolean;
    isFetching: boolean;
    isFetched: boolean;
    failureCount: number;
    _fetchData: () => void;
}