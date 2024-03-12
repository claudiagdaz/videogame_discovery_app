import {useState, useEffect} from 'react';
import apiClient, { CanceledError } from '../services/api-client';
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
  }

  //interface declared according to API doc, count and results are required fields.
export interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false)
  
    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();
         apiClient
        .get<FetchGamesResponse>("./games", {
            signal: controller.signal
        })
        .then((res) => {setGames(res.data.results), setIsLoading(false)})
        .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setIsLoading(false)
        });
        return () => controller.abort()
    }, 
    []);

    return { games, error }
  
}

export default useGames