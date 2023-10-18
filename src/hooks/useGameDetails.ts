import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services.ts/api-client";
import { Game } from "./useGames";

const apiClient=new APIClient<Game>("/games")

const useGameDetails = (slug: string) => {
  const query = useQuery<Game,Error>({
    queryKey: ["gameDetails",slug],
    queryFn: () =>
      apiClient.get(slug),
    staleTime: ms("24h"),
  });

  return query;
};

export default useGameDetails;
