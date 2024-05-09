import axios, {CanceledError, AxiosError, AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '35c3c83734c24f9b9fe9a770f4c6f92b'
    }
})


class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint
    }

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance
        .get<FetchResponse<T>>(this.endpoint, config)
        .then(res => res.data)
    }
}

export default APIClient

export { CanceledError, AxiosError}