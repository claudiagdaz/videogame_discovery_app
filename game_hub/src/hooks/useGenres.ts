import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Genre>('/genre')

export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number;
    image_background: string;
}

const useGenres = () => useQuery({
            queryKey: ["genres"],
            queryFn: apiClient.getAll,
            staleTime: 24 * 60 * 60 * 1000, //24 hrs,
            initialData: {count: genres.length, results: genres}
})

export default useGenres;
