import {
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import useGames, {
  Platform,
} from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer.";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = ({
  selectedGenre,
  selectedPlatform,
}: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(
    selectedGenre,
    selectedPlatform
  );

  // const skeletons = Array(6)
  //   .fill(1)
  //   .reduce((accum, val, ix) => {
  //     let addThis;
  //     if (accum.length === 0) {
  //       addThis = 0;
  //     } else addThis = accum[ix - 1];
  //     return [...accum, addThis + 1];
  //   }, []);
  const skeletons = ((n = 6) => {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
  })();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={3}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer
              key={skeleton}
            >
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer
            key={game.id}
          >
            <GameCard
              game={game}
            ></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
