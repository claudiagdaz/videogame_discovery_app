import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

export interface Game {
  id: number;
  name: string;
}
//interface declared according to API doc, count and results are required fields.
interface FetchGamesResponse {
  count: number;
  results: Game[];
}
const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setErorr] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("./games")
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        setErorr(err.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
