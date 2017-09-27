import { Injectable, Component } from '@angular/core';
import { Client } from 'app/models/client.model';
import { ApiGeneric } from 'app/generics/api.generic'
import { ApiInterface } from "app/helpers/api.helper";
import { Http } from "@angular/http";
import { AppSettingsService } from "app/services/app-settings.service";
import { Employee } from "app/models/employee.model";
import { WhateverApiGeneric } from "app/generics/whateverApi.generic";

@Injectable()
export class ClientService {

  clientVerification;
  // client: ApiInterface<Client>;
  client;
  // just a signature that this.client will be of type having methods to hit api

  constructor(http: Http, appSettingsService: AppSettingsService) {

    this.client = new ApiGeneric('clients', appSettingsService, http);
    // this.client=<ApiGeneric<Client>>{};
    this.clientVerification = new ApiGeneric('clients/verify', appSettingsService, http);
   }
}
