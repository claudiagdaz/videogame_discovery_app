import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/api-client"

export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number
}

interface FetchGenresResponse {
    count: number,
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("")
    useEffect(()=> {
        apiClient.get<FetchGenresResponse>("/genres")
        .then((res) => setGenres(res.data.results))
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError((err as AxiosError).message)
            
        })
    }, [])

    return { genres, error }

}

export default useGenres;