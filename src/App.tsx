import { useState } from "react";
import {
  Grid,
  GridItem,
  HStack,
  Show,
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  // const [
  //   selectedGenre,
  //   setSelectedGenre,
  // ] = useState<Genre | null>(null);
  // const [
  //   selectedPlatform,
  //   setSelectedPlatform,
  // ] = useState<Platform | null>(null);

  const [gameQuery, setGameQuery] =
    useState<GameQuery>(
      {} as GameQuery
    );
  return (
    <>
      <div>
        {/* <Button colorScheme="blue">
          Button
        </Button> */}
        <Grid
          // templateAreas={`"nav nav" "aside main"`}
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`, //1024px
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem
              paddingX={5}
              area="aside"
              // bg="gold"
            >
              <GenreList
                selectedGenre={
                  gameQuery.genre
                }
                onSelectGenre={(
                  genre
                ) => {
                  setGameQuery({
                    ...gameQuery,
                    genre: genre,
                  });
                }}
              />
            </GridItem>
          </Show>
          <GridItem
            area="main"
            // bg="dodgerBlue"
          >
            <HStack
              spacing={5}
              paddingLeft={2}
              marginBottom={5}
            >
              <PlatformSelector
                onSelectPlatform={(
                  platform
                ) =>
                  setGameQuery({
                    ...gameQuery,
                    platform: platform,
                  })
                }
                selectedPlatform={
                  gameQuery.platform
                }
              />
              <SortSelector />
            </HStack>
            <GameGrid
              gameQuery={gameQuery}
            />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
