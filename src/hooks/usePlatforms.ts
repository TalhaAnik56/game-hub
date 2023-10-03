import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "./useData";
import { Platform } from "./useGames";
import apiClient from "../services.ts/api-client";
import platforms from "../data/platforms";

const usePlatforms = () => {
  const query = useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: platforms,
  });

  return query;
};

export default usePlatforms;
