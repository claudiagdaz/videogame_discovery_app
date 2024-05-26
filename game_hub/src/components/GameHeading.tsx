import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { GameQuery } from "../App";
import useFindPlatform from "../hooks/useFindPlatform";
import useFindGenre from "../hooks/useFindGenre";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const genre = useFindGenre(gameQuery.genreId);
  const platform = useFindPlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as='h1' paddingLeft={2} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
