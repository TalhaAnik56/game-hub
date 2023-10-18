import { Box, Text } from "@chakra-ui/react";
import useGameTrailer from "../hooks/useGameTrailer";

interface Props {
  id: number | string;
}

const GameTrailer = ({ id }: Props) => {
  const { data, isLoading, error } = useGameTrailer(id);

  if (isLoading) {
    return null;
  }

  if (error){
    throw error
  }

  const first = data?.results[0];

  return first ? (
    <video src={first.data.max} poster={first.preview} controls autoPlay={true} />
  ) : null;
};

export default GameTrailer;
