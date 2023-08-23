import { useEffect, useState } from "react"
import apiClient, { CanceledError } from "../services.ts/api-client";

interface Genre{
    id:number;
    name:string;
    slug:string;
    image_background:string
}

interface FetchGenresResponse{
    count:number;
    results:Genre[]
}

const useGenres=()=>{
    const [genres,setGenres]=useState<Genre[]>([])
    const [error,setError]=useState('')
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        const controller=new AbortController()

        setLoading(true)
        apiClient.get<FetchGenresResponse>('/genres',{signal:controller.signal})
        .then(res=>{
            setGenres(res.data.results)
            setLoading(false)
        })
        .catch(error=>{
            if (error instanceof CanceledError) return
            setError(error.message)
            setLoading(false)
        })

        return ()=>controller.abort()

    },[])

    return {genres,isLoading,error}

}

export default useGenres