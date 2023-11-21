import axios, {AxiosInstance} from "axios";
import AxiosAdapter from "./axios-adapter";
import {Code} from "./models/Code";
import {user} from "./auth";

export class CodesRepository {
    private httpAdapter: AxiosInstance;
    private readonly username: null | string;

    constructor(domain?: string) {
        this.httpAdapter = AxiosAdapter.getInstance(domain)
        this.username = user()
    }


    search = async (userParam: string): Promise<Code[] | []> => {
        const url = `/api/codes?filters[description][$containsi]=${userParam}`
        const {data: response} = await this.httpAdapter.get<any>(url)
        const codes = response.data as any[]
        return codes.map((code) => {
            return Code.toObject(code)
        })
    }

    getAll = async (): Promise<Code[] | []> => {
        const url = `/api/codes?filters[user][$eq]=${this.username}`
        const {data: response} = await this.httpAdapter.get<any>(url)

        const codes = response.data as any[]
        return codes.map((code) => {
            return Code.toObject(code)
        })
    }

    create = async (description: string, url: string): Promise<boolean> => {
        const targetUrl = `/api/codes`
        try {
            await this.httpAdapter.post<any>(targetUrl, {
                data: {
                    description,
                    url,
                    user: this.username
                }
            })
            return true
        } catch {
            return false
        }
    }

    update = async (id:number, description: string, url: string): Promise<boolean> => {
        const targetUrl = `/api/codes/${id}`
        try {
            await this.httpAdapter.put<any>(targetUrl, {
                data: {
                    description,
                    url,
                    user: this.username
                }
            })
            return true
        } catch {
            return false
        }
    }

     delete = async (id:number): Promise<boolean> => {
        const targetUrl = `/api/codes/${id}`
        try {
            await this.httpAdapter.delete<any>(targetUrl)
            return true
        } catch {
            return false
        }
    }



}
