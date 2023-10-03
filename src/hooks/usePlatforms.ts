import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiClient, { FetchResponse } from "../services.ts/api-client";
import { Platform } from "./useGames";

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
