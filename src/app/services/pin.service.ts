import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";

@Injectable()
export class PinService {

    constructor(private http: Http) { }


    private getHeaders(): Headers {

        const headers: Headers = new Headers();
        let empToken = window.localStorage.getItem('token');

        headers.append('Content-Type', 'application/json');

        if (empToken) {
            headers.append('x-access-token', empToken);
        }
        return headers;
    }

    isPinExist(pin: string) {
        return this.http.get(`/api/pincodes/${pin}`, { headers: this.getHeaders() })
            .toPromise()
            .then((response: any) => {
                response = response.json();
                if (response.items && response.items.length > 0) {
                    return response;
                }
                return {
                    isSuccess: false
                }
            })
            .catch(err => err);
    }

}
