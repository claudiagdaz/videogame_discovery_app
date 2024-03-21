import { List, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  //component shouldn't be aware of endpoint
  //const { data, error } = useData<Genre>("/genres");
  const { data, error } = useGenres();

  return (
    <>
      {error && <Text>{error}</Text>}

      <List>
        <UnorderedList>
          {data.map((genre) => (
            <ListItem key={genre.id}>{genre.name}</ListItem>
          ))}
        </UnorderedList>
      </List>
    </>
  );
};

export default GenreList;
