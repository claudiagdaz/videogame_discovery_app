import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: GameHeadingProps) => {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as='h1' paddingLeft={2} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
