import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGameDetails(slug!);
  //slug! it means slug will never be null

  if (error) {
    throw error;
  }

  return (
    <>
      {isLoading && <Spinner />}
      <Box>
        <Heading>{game?.name}</Heading>
        <Text>{game?.description_raw}</Text>
      </Box>
    </>
  );
};

export default GameDetailsPage;
