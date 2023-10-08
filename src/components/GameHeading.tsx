import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatform = usePlatform(gameQuery?.platformId);
  const selectedGenre = useGenre(gameQuery?.genreId);

  const heading = `${selectedPlatform ? selectedPlatform.name + " " : ""}${
    selectedGenre ? selectedGenre.name + " " : ""
  }Games`;

  return (
    <Heading fontSize={"5xl"} paddingBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
