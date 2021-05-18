import {useQuery, useQueryClient} from "react-query";
import {ICompany} from "../types/ICompany";
import {fetchData} from "../api/getData";

export const useFetchData = (url: string) => {
    const queryClient = useQueryClient();
    const { data, failureCount, isError, isFetching, isFetched} = useQuery<ICompany[], "data">("data",
        () => fetchData(url), {
            refetchOnWindowFocus: false,
            enabled: false,
            retry: 4,
            retryDelay: 5000,
        });

    function _fetchData() {
        queryClient.fetchQuery('data');
    }

    return {
        data: data ? data.sort((a: ICompany, b: ICompany) => a.sum - b.sum) : [],
        failureCount,
        isError,
        isFetching,
        isFetched,
        _fetchData
    }
}