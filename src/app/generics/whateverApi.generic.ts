import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { ApiInterface } from "app/helpers/api.helper";
import { Data, Failure, Page } from "app/models/responses.model";


@Injectable()

export class WhateverApiGeneric<DataModel> implements ApiInterface<DataModel>{
    
    isSuccess: boolean;
    data: DataModel;
    items: DataModel[];
    error: string;
    message: string;

    constructor(private apiName: string,
        private appSettingsService,
        private http,
        private token?: string) { }


    private getHeaders(): Headers {

        const headers: Headers = new Headers();
        let empToken = window.localStorage.getItem('token');

        headers.append('Content-Type', 'application/json');

        if (empToken) {
            headers.append('x-access-token', empToken);
        }
        return headers;
    }

    startLoading() {
        this.appSettingsService.setLoading(true);
    }
    stopLoading() {
        this.appSettingsService.setLoading(false);
    }


    get(id: string): Promise<Data<DataModel>> {

        this.startLoading()

        return this.http.get(`${this.apiName}`, { headers: this.getHeaders() })
            .toPromise()
            .then(response => {
                this.stopLoading();

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
                this.stopLoading();

                return {
                    isSuccess: false,
                    error: err
                }
            });
    }

    put(id: string, model: DataModel): Promise<Data<DataModel>> {

        this.startLoading()

        return this.http.put(`${this.apiName}`, model, { headers: this.getHeaders() })
            .toPromise()
            .then(response => {
                this.stopLoading();

                const res = response.json();
                if (response.status !== 200) {
                    throw res;
                }

                if (!res.isSuccess) {
                    throw res.message;
                }

                if (res.isSuccess) {
                    return res;
                }
            })
            .catch(err => {
                this.stopLoading();

                return {
                    isSuccess: false,
                    error: err.error
                }
            });
    }

    post(model: DataModel): Promise<Data<DataModel> | Failure> {

        this.startLoading()

        return this.http.post(`${this.apiName}`, model, { headers: this.getHeaders() })
            .toPromise()
            .then(response => {
                this.stopLoading();

                const res = response.json();
                if (response.status !== 200) {
                    throw res;
                }

                if (!res.isSuccess) {
                    throw res;
                } else {
                    return res;
                }
            })
            .catch(err => {
                this.stopLoading();

                if (err._body) {
                    return JSON.parse(err._body);
                }

                return {
                    isSuccess: false,
                    error: err.error
                }
            });
    }

    delete(id: string): Promise<any> {

        this.startLoading();

        return this.http.delete(`${this.apiName}`, { headers: this.getHeaders() })
            .toPromise()
            .then(response => {
                const res = response.json();
                if (response.status !== 200) {
                    throw res;
                }

                if (!res.isSuccess) {
                    throw res.message;
                }

                if (res.isSuccess) {
                    return res;
                }
            })
            .catch(err => {
                this.stopLoading();

                return {
                    isSuccess: false,
                    error: err
                }
            });

    }

    search(query: object): Promise<Page<DataModel>> {

        this.startLoading();

        return this.http.get(`${this.apiName}`, { headers: this.getHeaders() })
            .toPromise()
            .then(response => {
                this.stopLoading();
                const res = response.json();
                if (response.status !== 200) {
                    throw res;
                }

                if (!res.isSuccess) {
                    throw res.message;
                }

                if (res.isSuccess) {
                    return res;
                }
            })
            .catch(err => {
                this.stopLoading();
                return {
                    isSuccess: false,
                    error: err
                }
            });
    }
}
