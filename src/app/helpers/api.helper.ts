import { Observable } from 'rxjs/Rx';

export interface ApiInterface<DataModel> {
    get(id: string):Promise<DataModel>,
    put(id: string, model: any): Promise<DataModel>,
    post(model: any): Promise<DataModel>,

    delete(id: string), //TODO
    search() //TODO
}