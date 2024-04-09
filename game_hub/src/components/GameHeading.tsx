import { Heading } from "@chakra-ui/react";

interface GameHeadingProps {
  genre: string | undefined;
  platform: string | undefined;
}

const GameHeading = ({ genre, platform }: GameHeadingProps) => {
  return (
    <Heading as='h1' paddingLeft={2} marginY={5}>
      {platform} {genre} Games
    </Heading>
  );
};

export default GameHeading;
