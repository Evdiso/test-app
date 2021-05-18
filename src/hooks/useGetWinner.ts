import {ICompany} from "../types/ICompany";
import {useEffect, useState} from "react";
import {ICompanyTransformed} from "../types/ICompanyTransformed";

export const useGetWinner = (data: ICompany[] | []) => {
    const [winner, setWinner] = useState<ICompanyTransformed | null>(null);

    useEffect(() => {
        const random = Math.random() * 100
        const bank = data.map((i: ICompany) => i.sum)
                         .reduce((sum: number, i: number) => sum + i, 0);
        const transformData: ICompanyTransformed[] = data.map((i: ICompany, index: number, array: ICompany[]) => {
            const result: ICompanyTransformed = {...i, isWinner: false};
            if (index === 0) {
                result.min = 0;
                result.max = (i.sum * 100) / bank;
            } else if (index === array.length - 1) {
                result.max = 100;
                result.min = (i.sum * 100) / bank;
            } else {
                result.min = (i.sum * 100) / bank;
                result.max = (array[index + 1].sum * 100) / bank;
            }
            const isWinner = result.min < random && random <= result.max;
            return {...i, isWinner, min: result.min, max: result.max}
        });
        const winner = transformData.find((i: ICompanyTransformed) => i.isWinner);
        setWinner(winner ?? null);
    }, [data])

    return {
        winner
    }
}