import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';
//interface declared according to the fetch response
//parent_platforms: [{platform: {...}}, {platform:{...}}]
//platform:{id: 1, name: "PC", slug:"pc"}


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


const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => useData<Game>('/games', 
{ params: 
  {
    genres: selectedGenre?.id, 
    parent_platforms: selectedPlatform?.id
  }
}, 
[selectedGenre?.id, selectedPlatform?.id])

export default useGames;