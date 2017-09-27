import { Observable } from 'rxjs/Rx';
// import { ResponseHelper } from './response.helper';
import { Data ,Page,Success,Failure} from "app/models/responses.model";

export interface ApiInterface<DataModel>
    extends Data<DataModel>, Page<DataModel>, Success, Failure
 {
    
    get(id: string): Promise<Data<DataModel>>,

    put(id: string, model: DataModel): Promise<Data<DataModel>>,

    post(model: DataModel): Promise<Data<DataModel> | Failure>,

    delete(id: string): Promise<any>,

    search(query: object): Promise<Page<DataModel>>
    
}