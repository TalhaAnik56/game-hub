import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services.ts/api-client";



export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient=new APIClient<Platform>("/platforms/lists/parents")

const usePlatforms = () => {
  const query = useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
  });

  return query;
};

export default usePlatforms;
