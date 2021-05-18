import axios from "axios";
import {ICompany} from "../types/ICompany";

export async function fetchData(url: string): Promise<ICompany[]> {
    const { data } = await axios.get(url);
    return data;
}
