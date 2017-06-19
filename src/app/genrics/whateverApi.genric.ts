import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';


// import { ApiInterface } from '../helpers/api.helper';


@Injectable()

export class WhateverApiGenric<DataModel> {


    constructor(private api: string, private http: Http, private token?: string) {

    }

    getHeaders(): Headers {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (this.token) {
            headers.append('x-access-token', this.token + '');
            headers.append('org-code', 'msas');
        }
        return headers;
    }


    // get(id: string): Promise<DataModel> {
    //     return this.http.get(`/api/${this.apiName}/${id}`)
    //         .toPromise()
    //         .then(response => {
    //             const res = response.json();
    //             if (response.status !== 200) {
    //                 throw res;
    //             }

    //             if (!res.isSuccess) {
    //                 throw res.message;
    //             }

    //             if (res.isSuccess) {
    //                 return res;
    //             }

    //         })
    //         .catch(err => {
    //             return {
    //                 isSuccess: false,
    //                 err: err
    //             }
    //         });
    // }

    // put(id: string, model: DataModel): Promise<DataModel> {
    //     return this.http.put(`/api/${this.apiName}/${id}`, model)
    //         .toPromise()
    //         .then(response => {
    //             const res = response.json();
    //             if (response.status !== 200) {
    //                 throw res;
    //             }

    //             if (!res.isSuccess) {
    //                 throw res.message;
    //             }

    //             if (res.isSuccess) {
    //                 return res;
    //             }
    //         })
    //         .catch(err => {
    //             return {
    //                 isSuccess: false,
    //                 err: err
    //             }
    //         });
    // }

    post(model: DataModel): Promise<DataModel> {
        return this.http.post(`${this.api}`, model)
            .toPromise()
            .then(response => {
                const res = response.json();
                if (response.status !== 200) {
                    throw res;
                }

                if (!res.isSuccess) {
                    throw res.message || res.error;
                }

                if (res.isSuccess) {
                    return res;
                }
            })
            .catch(err => {
                return {
                    isSuccess: false,
                    err: err
                }
            });
    }

    // delete(id: string) {
    //     return this.http.delete(`/api/${this.apiName}`)
    //         .toPromise()
    //         .then(response => {
    //             const res = response.json();
    //             if (response.status !== 200) {
    //                 throw res;
    //             }

    //             if (!res.isSuccess) {
    //                 throw res.message;
    //             }

    //             if (res.isSuccess) {
    //                 return res;
    //             }
    //         })
    //         .catch(err => {
    //             return {
    //                 isSuccess: false,
    //                 err: err
    //             }
    //         });

    // }

    // search(): Promise<any> {
    //     return this.http.get(`/api/${this.apiName}`)
    //         .toPromise()
    //         .then(response => {
    //             const res = response.json();
    //             if (response.status !== 200) {
    //                 throw res;
    //             }

    //             if (!res.isSuccess) {
    //                 throw res.message;
    //             }

    //             if (res.isSuccess) {
    //                 return res;
    //             }
    //         })
    //         .catch(err => {
    //             return {
    //                 isSuccess: false,
    //                 err: err
    //             }
    //         });
    // }

}
