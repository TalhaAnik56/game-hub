import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services.ts/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient=new APIClient<Genre>("/genres")

const useGenres = () => {
  const query = useQuery<FetchResponse<Genre>,Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData:genres
  });
  return query;
};

export default useGenres;
