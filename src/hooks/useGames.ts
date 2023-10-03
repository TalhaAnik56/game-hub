import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FetchResponse } from "../services.ts/api-client";
import { Platform } from "./usePlatforms";



export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) => {
  const modifiedGameQuery={
    genres:gameQuery.genre?.name,
    parent_platforms: gameQuery.platform?.name,
    ordering: gameQuery.sortOrder,
    search: gameQuery.searchText,
  }

  const query = useQuery<Game[],Error>({
    queryKey: ["games",modifiedGameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          }
        })
        .then((res) => res.data.results),
    staleTime: 30 * 1000, //30 seconds
  });

  return query;
};

export default useGames;
