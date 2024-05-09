import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import apiClient from '../services/apiClient';
import { FetchResponse } from '../services/apiClient';
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
    rating_top: number;
  }

  const useGames = (gameQuery: GameQuery) => 
    useQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: () => apiClient
      .get<FetchResponse<Game>>("/games", {
        params:
          {
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortParameter,
          search: gameQuery.searchInput
        }
      })
      .then(res => res.data)
    })

export default useGames;