import { useQuery } from "@tanstack/react-query";
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
    staleTime: 24 * 60 * 60 * 1000, //24 hours
    initialData: {results:platforms,count:platforms.length,next:null},
  });

  return query;
};

export default usePlatforms;
