import { Grid, GridItem } from "@chakra-ui/layout";
import { Show } from "@chakra-ui/media-query";

function App() {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area='nav' bg='coral'>
          Nav
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' bg='gold'>
            Aside
          </GridItem>
        </Show>
        <GridItem area='main' bg='dodgerBlue'>
          Main
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
