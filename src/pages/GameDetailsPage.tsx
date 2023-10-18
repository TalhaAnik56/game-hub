import { Box, Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGameDetails from "../hooks/useGameDetails";
import GameTrailer from "../components/GameTrailer";

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
    <Box>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw!}</ExpandableText>
      <GameAttributes game={game}/>
      <GameTrailer id={game.id}></GameTrailer>
    </Box>
  );
};

export default GameDetailsPage;
