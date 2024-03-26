import useData from './useData';
import { Genre } from './useGenres';
//interface declared according to the fetch response
//parent_platforms: [{platform: {...}}, {platform:{...}}]
//platform:{id: 1, name: "PC", slug:"pc"}
export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    genres: Genre[];
  }

  //interface declared according to API doc, count and results are required fields.
// export interface FetchGamesResponse {
//     count: number;
//     results: Game[];
//   }


const useGames = (selectedGenre: Genre | null) => useData<Game>('/games', { params: {genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames;