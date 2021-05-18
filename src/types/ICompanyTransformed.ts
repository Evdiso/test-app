import {ICompany} from "./ICompany";

export interface ICompanyTransformed extends ICompany {
    isWinner: boolean;
    min?: number;
    max?: number;
}