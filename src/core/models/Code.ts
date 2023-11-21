export class Code {
    constructor(public id: number, public description: string, public url: string) {

    }

    static toObject(payload: any) {
        return new Code(payload.id, payload.attributes.description, payload.attributes.url)
    }
}