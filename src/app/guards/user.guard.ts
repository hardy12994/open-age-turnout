import { Injectable } from "@angular/core";
import { CoolLocalStorage } from "angular2-cool-storage";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private router: Router, private store: CoolLocalStorage) { }

    canActivate(): boolean {

        let clientToken: string = window.localStorage.getItem('client-token');
        let empToken: string = window.localStorage.getItem('emp-token');
        
        if (!clientToken && !empToken) {
            this.router.navigate(['home/login']);
            return false;
        }
        return true;
    }
}