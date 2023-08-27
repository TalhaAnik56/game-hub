import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services.ts/image-url";
import GenreSkeletonList from "./GenreSkeletonList";

interface Props{
  onSelectGenre:(genre:Genre)=>void
}


const GenreList = ({onSelectGenre}:Props) => {
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
              <Button onClick={()=>onSelectGenre(genre)} variant='link'>{genre.name}</Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
