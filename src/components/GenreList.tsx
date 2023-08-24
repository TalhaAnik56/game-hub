import {
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services.ts/image-url";
import GenreSkeletonList from "./GenreSkeletonList";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <>
      <SimpleGrid columns={1}>
        {isLoading &&
          skeleton.map((skeleton) => <GenreSkeletonList key={skeleton} />)}
      </SimpleGrid>

      <List>
        {data.map((genre) => (
          <ListItem paddingY="7px" key={genre.id}>
            <HStack>
              <Image
                boxSize="42px"
                borderRadius={5}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
