import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services.ts/api-client";

interface GameDetails {
  id: number;
  name: string;
  slug: string;
  description_raw: string;
}

const apiClient=new APIClient<GameDetails>("/games")

const useGameDetails = (slug: string) => {
  const query = useQuery<GameDetails,Error>({
    queryKey: ["gameDetails",slug],
    queryFn: () =>
      apiClient.get(slug),
    staleTime: ms("24h"),
  });

  return query;
};

export default useGameDetails;
