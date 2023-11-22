import IndexDBCodesRepository from "./indexdb-codes-repository";
import HttpCodesRepository from "./http-codes-repository";
import ICodesRepository from "./codes-repository.interface";

export const codesRepositoryProvider = (): ICodesRepository => {
    return process.env.REACT_APP_ENV === 'local' ? new IndexDBCodesRepository() : new HttpCodesRepository()
};