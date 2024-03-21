import { List, ListItem, Text, UnorderedList, list } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <>
      {error && <Text>{error}</Text>}

      <List>
        <UnorderedList>
          {genres.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </UnorderedList>
      </List>
    </>
  );
};

export default GenreList;
