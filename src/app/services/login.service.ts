import { Injectable } from '@angular/core';
import { ApiInterface } from '../helpers/api.helper';
import { Employee } from '../models/employee.model';
import { ApiGenric } from '../genrics/api.genric';
import { WhateverApiGenric } from '../genrics/whateverApi.genric';
import { Http, Headers } from '@angular/http';


@Injectable()
export class LoginService{
    employeeApis
    employee: ApiInterface<Employee>;
    
    constructor(http: Http){
        this.employee = new ApiGenric<Employee>('employees','ems', http);
        this.employeeApis = new WhateverApiGenric<Employee>('/ems/api/employees/signIn',http);
    }
}