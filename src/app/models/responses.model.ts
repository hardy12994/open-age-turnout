export interface Data<Model> {
    isSuccess: boolean;
    data: Model;
}

export interface Page<Model> {
    isSuccess: boolean;
    items: Array<Model>;
}

export interface Success {
    isSuccess: boolean;
    message: string;
}

export interface Failure {
    isSuccess: boolean;
    error: string;
}