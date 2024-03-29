import {
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer.";

import { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({
  gameQuery,
}: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(gameQuery);

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

  if (error)
    return <Text>{error}</Text>;
  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      spacing={6}
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
  );
};

export default GameGrid;
