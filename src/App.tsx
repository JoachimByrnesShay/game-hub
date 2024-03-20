import { useState } from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
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
  sortOrder: string;
  searchText: string;
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
            <NavBar
              onSearch={(searchText) =>
                setGameQuery({
                  ...gameQuery,
                  searchText,
                })
              }
            />
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
            <Flex
              // spacing={5}
              paddingLeft={2}
              marginBottom={5}
            >
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectPlatform={(
                    platform
                  ) =>
                    setGameQuery({
                      ...gameQuery,
                      platform:
                        platform,
                    })
                  }
                  selectedPlatform={
                    gameQuery.platform
                  }
                />
              </Box>
              <SortSelector
                onSelectSortOrder={(
                  sortOrder
                ) =>
                  setGameQuery({
                    ...gameQuery,
                    sortOrder:
                      sortOrder,
                  })
                }
                sortOrder={
                  gameQuery.sortOrder
                }
              />
            </Flex>
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
