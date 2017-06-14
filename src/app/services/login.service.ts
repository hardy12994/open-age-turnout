import { Injectable } from '@angular/core';
import { ApiInterface } from '../helpers/api.helper';
import { Employee } from '../models/employee.model';
import { ApiGenric } from '../genrics/api.genric';
import { Http, Headers } from '@angular/http';


@Injectable()
export class LoginService{
    employee: ApiInterface<Employee>;
    constructor(http: Http){
        // console.log(Employee);
        // console.log(this.employee);
        this.employee = new ApiGenric<Employee>('employees', http);
    }
}