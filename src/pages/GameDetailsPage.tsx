import { SimpleGrid, Heading, Spinner, Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  //slug! it means slug will never be null

  if (isLoading) {
    return <Spinner></Spinner>;
  }

  if (error || !game) {
    throw error;
  }

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw!}</ExpandableText>
        <GameAttributes game={game} />
      </Box>

      <Box>
        <GameTrailer id={game.id}></GameTrailer>
        <GameScreenshots id={game.id}></GameScreenshots>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
