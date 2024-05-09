import axios, {CanceledError, AxiosError} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35c3c83734c24f9b9fe9a770f4c6f92b'
    }
})



export { CanceledError, AxiosError}