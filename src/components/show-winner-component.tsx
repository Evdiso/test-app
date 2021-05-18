import React from "react";
import {ICompanyTransformed} from "../types/ICompanyTransformed";

interface PropTypes {
    winner: ICompanyTransformed | null
}

export const ShowWinnerComponent: React.FC<PropTypes>  = ({ winner }: PropTypes): JSX.Element => {
    return (
        <div className={'winner-wrapper'}>
            <h1>{winner?.name ?? null}</h1>
        </div>
    );
}