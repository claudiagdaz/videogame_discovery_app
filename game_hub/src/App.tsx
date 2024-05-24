import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import { HStack } from "@chakra-ui/react";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genreId: number;
  platformId?: number;
  sortParameter: string;
  searchInput: string;
  pageSize: number;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area='nav'>
          <NavBar
            onSearch={(searchInput) =>
              setGameQuery({ ...gameQuery, searchInput })
            }
          />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={5}>
            <GenreList
              //replace genreId with genreId id and store it inside game query
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genreId: genre.id })
              }
              selectedGenreId={gameQuery.genreId}
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <GameHeading gameQuery={gameQuery} />
          <HStack spacing={5} paddingLeft={2} marginBottom={5}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
            />
            <SortSelector
              onSelectSortOrder={(sortParameter) =>
                setGameQuery({ ...gameQuery, sortParameter })
              }
              sortParameter={gameQuery.sortParameter}
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
