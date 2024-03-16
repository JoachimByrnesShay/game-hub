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
        >
          <GridItem area="nav">
            <NavBar />
          </GridItem>
          <Show above="lg">
            <GridItem
              area="aside"
              // bg="gold"
            >
              Aside
            </GridItem>
          </Show>
          <GridItem
            area="main"
            // bg="dodgerBlue"
          >
            Main
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
