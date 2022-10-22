import { AxiosRequestConfig } from "axios"

const config: AxiosRequestConfig = {
    headers:{
        'Access-Control-Allow-Origin': document.location.origin
    }
}

export default config