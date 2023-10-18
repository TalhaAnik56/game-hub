import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services.ts/api-client";
import ms from "ms";

interface Screenshot{
    id:number;
    image:string;
    height:number;
    width:number;
}

const useGameScreenshots = (id:number) => {
    const apiClient= new APIClient<Screenshot>(`/games/${id}/screenshots`)
    const query =useQuery<FetchResponse<Screenshot>,Error>({
        queryKey:["screenshots",id],
        queryFn:apiClient.getAll,
        staleTime:ms("24h")
    })

    return query
}

export default useGameScreenshots