import useData from "./useData";
import { Game } from "./useGames";



export interface Genre {
    id: number,
    name: string,
    slug: string,
    games_count: number;
    image_background: string;
}


const useGenres = () => useData<Genre>('/genres')


export default useGenres;