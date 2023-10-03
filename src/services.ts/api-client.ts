import axios,{AxiosRequestConfig, CanceledError} from "axios";

interface FetchResponse<T>{
    count:number;
    results:T[]
}

const axiosInstance=axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"e7415a9ebfc8491fa119544632ea4e76"  
    }
})

class APIClient<T>{
    endpoint:string
    constructor(endpoint:string){
        this.endpoint=endpoint
    }

    getAll=(config:AxiosRequestConfig)=>{
        return axiosInstance.get<FetchResponse<T>>(this.endpoint,config).then(res=>res.data.results)
    }

}

export default APIClient
export {CanceledError}