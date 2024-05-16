import { useQuery } from "@tanstack/react-query";
import ms from "ms";
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
            staleTime: ms('24h'),
            initialData: {count: genres.length, results: genres}
})

export default useGenres;
