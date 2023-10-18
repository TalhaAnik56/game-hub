import { SimpleGrid,Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import CriticScore from "./CriticScore"
import DefinitionItem from "./DefinitionItem"

interface Props{
    game:Game
}

const GameAttributes = ({game}:Props) => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} marginY={5} as={'dl'}>
    <DefinitionItem term="Platforms">
      {game.parent_platforms?.map(({ platform }) => (
        <Text key={platform.id}>{platform.name}</Text>
      ))}
    </DefinitionItem>

    <DefinitionItem term="Metascore">
      <CriticScore criticScore={game.metacritic} />
    </DefinitionItem>

    <DefinitionItem term="Genres">
      {game.genres?.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </DefinitionItem>

    <DefinitionItem term="Publishers">
      {game.publishers?.map((publisher) => (
        <Text key={publisher.id}>{publisher.name}</Text>
      ))}
    </DefinitionItem>
  </SimpleGrid>
  )
}

export default GameAttributes