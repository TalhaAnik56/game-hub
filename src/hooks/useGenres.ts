import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import APIClient from "../services.ts/api-client";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const apiClient=new APIClient<Genre>("/genres")

const useGenres = () => {
  const query = useQuery<Genre[],Error>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24*60*60*1000, //24 hours
    initialData:genres
  });
  return query;
};

export default useGenres;
