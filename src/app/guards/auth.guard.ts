import { Injectable } from "@angular/core";
// import { CoolLocalStorage } from "angular2-cool-storage";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {

        let empToken: string = window.localStorage.getItem('token');
        if (!empToken) {
            this.router.navigate(['home/login']);
            return false;
        }
        return true;
    }
}