import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient from "../services/apiClient";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

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
  queryFn: apiClient.getAll,
  staleTime: ms('24h'),
  initialData: platforms
})

export default usePlatforms;