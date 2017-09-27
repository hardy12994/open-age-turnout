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

    startLoading() {
        this.appSettingsService.setLoading(true);
    }
    stopLoading() {
        this.appSettingsService.setLoading(false);
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


    get(id: string): Promise<Data<DataModel>> {

        this.startLoading()

        return this.http.get(`/api/${this.apiName}/${id}`)
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
                    err: err
                }
            });
    }

    put(id: string, model: DataModel): Promise<Data<DataModel>> {

        this.startLoading()

        return this.http.put(`/api/${this.apiName}/${id}`, model)
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
                    err: err
                }
            });
    }

    post(model: DataModel): Promise<Data<DataModel> | Failure> {

        this.startLoading()

        return this.http.post(`/api/${this.apiName}`, model)
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
                    err: err
                }
            });
    }

    delete(id: string): Promise<any> {

        this.startLoading();

        return this.http.delete(`/api/${this.apiName}`)
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
                    err: err
                }
            });

    }

    search(query: object): Promise<Page<DataModel>> {

        this.startLoading();

        return this.http.get(`/api/${this.apiName}`)
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
                    err: err
                }
            });
    }

}
