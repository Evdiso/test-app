import React from 'react';
import {useFetchData} from "./hooks/useFetchData";
import {IData} from "./types/IData";
import {useGetWinner} from "./hooks/useGetWinner";
import {ShowWinnerComponent} from "./components/show-winner-component";
import {ShowErrorComponent} from "./components/show-error-component";

function App() {
    const { data, isError, isFetching, failureCount, _fetchData, isFetched }: IData = useFetchData('api/companies');
    const { winner } = useGetWinner(data);
    const btnLabel = isError ? 'Повторить аукцион' : isFetching ? 'Loading...' : 'Начать аукцион';
    return (
        <div className="app">
            <div className={'app-counts'}>
                Оставшиеся попытки: <strong>{5 - failureCount}</strong>
            </div>
            <div className={'app-content'}>
                {isFetched && <ShowWinnerComponent winner={winner} />}
                {isError && <ShowErrorComponent />}
            </div>
            <button disabled={isFetching} onClick={_fetchData}>{btnLabel}</button>
        </div>
    );
}

export default App;