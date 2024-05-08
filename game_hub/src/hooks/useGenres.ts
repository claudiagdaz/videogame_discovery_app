import useData from "./useData";
import genres from "../data/genres";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number;
    image_background: string;
}

const useGenres = () => useQuery({
            queryKey: ["genres"],
            queryFn: () => apiClient
            .get<FetchResponse<Genre>>( "/genres")
            .then((res) => res.data),
            staleTime: 24 * 60 * 60 * 1000, //24 hrs,
            initialData: {count: genres.length, results: genres}
})
    



//const useGenres = () => useData<Genre>('/genres')
//const useGenres = () => ({ data: genres, isLoading: false, error: null })

export default useGenres;
