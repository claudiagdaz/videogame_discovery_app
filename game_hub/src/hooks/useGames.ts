import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/apiClient';
import { Platform } from './usePlatforms';

//interface declared according to the fetch response
//parent_platforms: [{platform: {...}}, {platform:{...}}]
//platform:{id: 1, name: "PC", slug:"pc"}

const apiClient = new APIClient<Game>('/games')


export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
  }

  

  const useGames = (gameQuery: GameQuery) => 
    useInfiniteQuery<FetchResponse<Game>, Error>({
      queryKey: ["games", gameQuery],
      queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params:
          {
          genres: gameQuery.genre?.id, 
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortParameter,
          search: gameQuery.searchInput,
          page: pageParam,
        }
      }),
      keepPreviousData: true,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.next ? allPages.length + 1: undefined;
      },
      staleTime: 24 * 60 * 60 * 1000 //1day
    })


export default useGames;