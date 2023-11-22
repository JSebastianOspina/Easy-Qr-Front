import Dexie, {Table} from 'dexie';

export interface Code {
    id?: number;
    description: string;
    url: string;
}

export class DexieCodesDatabase extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    codes!: Table<Code>;

    constructor() {
        super('myDatabase');
        this.version(1).stores({
            codes: '++id,description' // Primary key and indexed props
        });
    }
}

export const db = new DexieCodesDatabase();