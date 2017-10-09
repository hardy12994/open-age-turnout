import { Injectable, OnInit, Component } from '@angular/core';
import { Http, Headers, ConnectionBackend, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';

import { Data, Page, Success, Failure } from "app/models/responses.model";
import { ApiInterface } from '../helpers/api.helper';
import { AppSettingsService } from "../services/app-settings.service";

@Injectable()
export class ApiGeneric<DataModel> implements ApiInterface<DataModel>{

    isSuccess: boolean;
    data: DataModel;
    items: DataModel[];
    message: string;
    error: any;

    constructor(private apiName: string,
        private appSettingsService,
        private http,
        private token?: string) {
    }


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

        return this.http.get(`/api/${this.apiName}/${id}`, { headers: this.getHeaders() })
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

        return this.http.put(`/api/${this.apiName}/${id}`, model,  { headers: this.getHeaders() })
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

        return this.http.post(`/api/${this.apiName}`, model, { headers: this.getHeaders() })
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

        return this.http.delete(`/api/${this.apiName}`, { headers: this.getHeaders() })
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

        return this.http.get(`/api/${this.apiName}`, { headers: this.getHeaders() })
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
