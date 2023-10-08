import {
  Box,
  Flex,
  Grid,
  GridItem,
  Show
} from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GameHeading from "./components/GameHeading";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";


export interface GameQuery {
  genreId?:number; //same thing like this genre: Genre | undefined;
  platformId?: number;
  sortOrder: string | null;
  searchText: string | null;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  // {} as GameQuery means {genreId:undefined,platformId:undefined,sortOrder:null,searchText:null}

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar
            onSearch={(searchText: string) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>

        <Show above="lg">
          <GridItem area="aside" paddingX={6}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId:genre.id })}
              selectedGenreId={gameQuery?.genreId}
            />
          </GridItem>
        </Show>

        <GridItem area="main">
          <Box paddingLeft={5}>
            <GameHeading gameQuery={gameQuery} />
            <Flex paddingBottom={3}>
              <Box marginRight={5}>
                <PlatformSelector
                  onSelectPlatform={(platform) =>
                    setGameQuery({ ...gameQuery, platformId:platform.id })
                  }
                  selectedPlatformId={gameQuery?.platformId}
                />
              </Box>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder: string) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              ></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
