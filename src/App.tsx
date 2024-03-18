import { useState } from "react";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Show,
} from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
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
              <GenreList />
            </GridItem>
          </Show>
          <GridItem
            area="main"
            // bg="dodgerBlue"
          >
            <GameGrid />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
