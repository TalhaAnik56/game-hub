import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../store";


const GameHeading = () => {
  const genreId=useGameQueryStore(s=>s.gameQuery.genreId)
  const selectedGenre = useGenre(genreId);

  const platformId=useGameQueryStore(s=>s.gameQuery.platformId)
  const selectedPlatform = usePlatform(platformId);
  
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
