import { Image, SimpleGrid } from "@chakra-ui/react";
import useGameScreenshots from "../hooks/useGameScreenshots";

interface Props {
  id: number;
}

const GameScreenshots = ({ id }: Props) => {
  const { data, isLoading, error } = useGameScreenshots(id);

  if (isLoading) {
    return null;
  }
  if (error) {
    throw error;
  }

  const screenshots = data?.results;

  return screenshots ? (
    <SimpleGrid columns={{ base: 1, lg: 2 }} marginY={5} spacing={2}>
      {screenshots.map((screenshot) => (
        <Image key={screenshot.id} borderRadius={3} src={screenshot.image} />
      ))}
    </SimpleGrid>
  ) : null;
};

export default GameScreenshots;
