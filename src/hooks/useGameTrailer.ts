import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import APIClient from "../services.ts/api-client";
import { FetchResponse } from "../services.ts/api-client";

interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: {480:string; max:string};
}

const useGameTrailer = (id: number | string) => {
  const apiClient = new APIClient<GameTrailer>(`/games/${id}/movies`);
  const query = useQuery<FetchResponse<GameTrailer>, Error>({
    queryKey: ["gameTrailer", id],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

  return query;
};

export default useGameTrailer;
