import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

export interface PlatformProps {
    platforms: Platform[];
  }
  
  export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatforms = () => useQuery({
  queryKey: ['platforms'],
  queryFn: () => apiClient
  .get<FetchResponse<Platform>>("/platforms/lists/parents")
  .then((res) => res.data),
  staleTime: 24 * 60 * 60 * 1000, //24hrs,
  initialData: {count: platforms.length, results: platforms}
})
//const usePlatforms = () => useData<Platform>('/platforms/lists/parents')
//const usePlatforms = () => ({ data: platforms, isLoading: false, error: null})
export default usePlatforms;