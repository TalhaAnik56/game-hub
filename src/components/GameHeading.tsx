import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const selectedPlatform = platforms.results.find(
    (platform) => platform.id === gameQuery?.platformId
  );
  const selectedGenre = genres.results.find(
    (genre) => genre.id === gameQuery?.genreId
  );

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
