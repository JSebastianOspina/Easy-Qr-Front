import axios, {AxiosDefaults, AxiosInstance, CreateAxiosDefaults} from "axios";

export default class AxiosAdapter {
    public axios: AxiosInstance

    constructor(domain?: string) {
        this.axios = axios.create(this.getAxiosConfig(domain))
    }

    static getInstance = (domain?: string): AxiosInstance => {
        const instance = new AxiosAdapter(domain)
        return instance.axios
    }

    getAxiosConfig = (domain: string | undefined): CreateAxiosDefaults => {
        return {
            baseURL: domain || 'https://7d12-130-250-228-37.ngrok-free.app',
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }

}