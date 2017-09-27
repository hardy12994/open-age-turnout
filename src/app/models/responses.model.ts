export interface Data<Model> {
    isSuccess: boolean,
    data: Model
}

export interface Page<Model> {
    isSuccess: boolean,
    items: Array<Model>
}

export interface Success {
    isSuccess: boolean,
    message: string
}

export interface Failure {
    isSuccess: boolean
    error: any
}


// export interface Responses<Model> extends Data<Model>, Page<Model>, Success, Failure {

//     items: Model[];
//     error: any;
//     message: string;
//     isSuccess: boolean;
//     data: Model;

//     /**
//      * class need to define Data Memebers when extends but interface does Not
//      * 
//      * @type {Data<Model>}
//      * @memberof Responses
//      */

//     record: Data<Model>;
//     records: Page<Model>;
//     success: Success;
//     failure: Failure;
// }  