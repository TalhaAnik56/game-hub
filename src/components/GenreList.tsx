import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services.ts/image-url";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {error && <h2>{error}</h2>}
      <List>
        {data.map((genre) => (
          <ListItem paddingY="7px" key={genre.id}>
            <HStack>
              <Image boxSize="42px" borderRadius={5} src={getCroppedImageUrl(genre.image_background)}></Image>
              <Text fontSize='lg'>{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
