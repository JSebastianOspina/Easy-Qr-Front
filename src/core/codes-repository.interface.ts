import {Code} from "./models/Code";

export default interface ICodesRepository {
    update: (id: number, description: string, url: string) => Promise<boolean>
    delete: (id: number) => Promise<boolean>
    search: (userParam: string) => Promise<Code[]>
    getAll: () => Promise<Code[]>
    create: (description: string, url: string) => Promise<boolean>
}
