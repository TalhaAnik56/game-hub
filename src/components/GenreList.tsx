import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  SimpleGrid,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services.ts/image-url";
import useGameQueryStore from "../store";
import GenreSkeletonList from "./GenreSkeletonList";


const GenreList = () => {
  const selectedGenreId=useGameQueryStore(s=>s.gameQuery.genreId);
  const setSelectedGenreId=useGameQueryStore(s=>s.setGenreId)
  const { data, isLoading, error } = useGenres();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <>
      <Heading as={"h1"} fontSize={"3xl"} paddingBottom={3}>
        Genres:
      </Heading>
      <SimpleGrid columns={1}>
        {isLoading &&
          skeleton.map((skeleton) => <GenreSkeletonList key={skeleton} />)}
      </SimpleGrid>

      <List>
        {data?.results.map((genre) => (
          <ListItem paddingY="7px" key={genre.id}>
            <HStack>
              <Image
                boxSize="42px"
                objectFit={"cover"}
                borderRadius={5}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                textAlign={"left"}
                whiteSpace={"normal"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize={genre.id === selectedGenreId ? "x-large" : "lg"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
