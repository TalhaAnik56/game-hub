import { useEffect, useState } from "react"
import apiClient, { CanceledError } from "../services.ts/api-client";
import { AxiosRequestConfig } from "axios";


interface FetchResponse<T>{
    count:number;
    results:T[]
}

const useData=<T>(endpoint:string,requestConfig?:AxiosRequestConfig,dep?:any[])=>{
    const [data,setData]=useState<T[]>([])
    const [error,setError]=useState('')
    const [isLoading,setLoading]=useState(false)

    useEffect(()=>{
        const controller=new AbortController()

        setLoading(true)
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal,...requestConfig})
        .then(res=>{
            setData(res.data.results)
            setLoading(false)
        })
        .catch(error=>{
            if (error instanceof CanceledError) return
            setError(error.message)
            setLoading(false)
        })

        return ()=>controller.abort()

    },dep?[...dep]:[])

    return {data,isLoading,error}

}

export default useData