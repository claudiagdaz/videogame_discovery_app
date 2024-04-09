import { GameQuery } from '../App';
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


const useGames = (gameQuery: GameQuery) => useData<Game>('/games', 
{ params: 
  {
    genres: gameQuery.genre?.id, 
    parent_platforms: gameQuery.platform?.id,
    ordering: gameQuery.sortParameter,
    search: gameQuery.searchText
  }
}, 
[gameQuery])

export default useGames;