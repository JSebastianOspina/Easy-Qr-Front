import ICodesRepository from "./codes-repository.interface";
import {Code} from "./models/Code";
import {db, DexieCodesDatabase} from "./db";

export default class IndexDBCodesRepository implements ICodesRepository {
    private db: DexieCodesDatabase;

    constructor() {
        this.db = db
    }

    async create(description: string, url: string): Promise<boolean> {
        try {
            await this.db.codes.add({description, url})
            return true
        } catch (e) {
            return false
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.db.codes.delete(id)
            return true
        } catch (e) {
            return false
        }
    }

    async getAll(): Promise<Code[]> {
        const codes = await this.db.codes.toArray()
        return codes as Code[]
    }

    async search(userParam: string): Promise<Code[]> {
        return await this.db.codes.where('description').startsWith(userParam).toArray() as Code[]
    }

    async update(id: number, description: string, url: string): Promise<boolean> {
        console.log(id,description,url)
        const affectedRows = await this.db.codes.update(id, {
            description,
            url
        })
        return affectedRows >= 1
    }

}