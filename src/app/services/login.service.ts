import { Injectable } from '@angular/core';
import { ApiInterface } from '../helpers/api.helper';
import { Employee } from '../models/employee.model';
import { ApiGeneric } from '../generics/api.generic';
import { WhateverApiGeneric } from '../generics/whateverApi.generic';
import { Http, Headers } from '@angular/http';
import { AppSettingsService } from "app/services";


@Injectable()
export class LoginService {
    employeeSignUp: ApiInterface<Employee>;
    employee: ApiInterface<Employee>;

    constructor(http: Http, appSettingsService: AppSettingsService) {
        this.employee = new ApiGeneric<Employee>('employees', appSettingsService, http);
        this.employeeSignUp = new WhateverApiGeneric<Employee>('api/employees/signUp', appSettingsService, http);
    }

}