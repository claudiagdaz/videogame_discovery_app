import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Platform>("/platforms/lists/parents")

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
  // queryFn: () => apiClient
  // .get<FetchResponse<Platform>>("/platforms/lists/parents")
  // .then((res) => res.data),
  queryFn: apiClient.getAll,
  staleTime: 24 * 60 * 60 * 1000, //24hrs,
  initialData: {count: platforms.length, results: platforms}
})

export default usePlatforms;