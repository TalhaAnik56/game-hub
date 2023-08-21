import axios,{CanceledError} from "axios";

const apiClient=axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key:"e7415a9ebfc8491fa119544632ea4e76"  
    }
})

export default apiClient
export {CanceledError}