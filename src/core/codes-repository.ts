import axios, {AxiosInstance} from "axios";
import AxiosAdapter from "./axios-adapter";
import {Code} from "./models/Code";

export class CodesRepository {
    private httpAdapter: AxiosInstance;

    constructor(domain?: string) {
        this.httpAdapter = AxiosAdapter.getInstance(domain)
    }

    search = async (userInput: string): Promise<Code[] | []> => {
        const domain = 'https://7d12-130-250-228-37.ngrok-free.app'

        const url = `${domain}/api/codes?filters[user][$eq]=${userInput}`
        const {data: response} = await this.httpAdapter.get<any>(url)
        const codes = response.data as any[]
        return codes.map((code) => {
            return new Code(code.attributes.description, code.attributes.url)
        })
    }

    getAll = async (): Promise<Code[] | []> => {
        const domain = 'https://7d12-130-250-228-37.ngrok-free.app'

        const url = `${domain}/api/codes`
        const {data: response} = await this.httpAdapter.get<any>(url)
        const codes = response.data as any[]
        return codes.map((code) => {
            return new Code(code.attributes.description, code.attributes.url)
        })
    }

    create = async (description:string, url:string): Promise<Code[] | []> => {
        const domain = 'https://7d12-130-250-228-37.ngrok-free.app'

        const targetUrl = `${domain}/api/codes`
        const {data: response} = await this.httpAdapter.get<any>(domain)
        const codes = response.data as any[]
        return codes.map((code) => {
            return new Code(code.attributes.description, code.attributes.url)
        })
    }
}
