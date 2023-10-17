import { Box, Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

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
        <ExpandableText>
          {game?.description_raw!}
        </ExpandableText>
      </Box>
    </>
  );
};

export default GameDetailsPage;
