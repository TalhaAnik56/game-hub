import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const platformName = gameQuery.platform?.name || null;
  const genreName = gameQuery.genre?.name || null;

  const heading = `${platformName ? platformName + " " : ""}${
    genreName ? genreName + " " : ""
  }Games`;

  return (
    <Heading fontSize={"5xl"} paddingBottom={4}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
