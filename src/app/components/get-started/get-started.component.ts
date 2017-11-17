import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Client, Employee } from '../../models';
import { ClientService } from "app/services";
import { AppSettingsService, LoginService } from 'app/services'
import { ToasterService } from "app/services/toaster.service";
import { OnChanges, SimpleChanges } from '@angular/core';
import { KitchenService } from "cook-toast";
@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
  providers: [ClientService, LoginService]
})

export class GetStartedComponent implements OnInit {

  getStart;
  verification;
  setUsernamePassword;
  signUpwith;

  private client: Client = new Client();
  private employee: Employee = new Employee();

  constructor(
    private clientService: ClientService,
    private loginService: LoginService,
    private router: Router,
    public appSettings: AppSettingsService,
    public kitchenService: KitchenService) {
    this.default();
    this.kitchenService.cook('Please Sign Up in YOLO :)', 'i');
  }

  ngOnInit() {
  }

  default() {
    this.signUpwith = "phone";
    this.getStart = true;
    this.verification = false;
    this.setUsernamePassword = false;
  }


  dashCall() {
    let link = ['/dashboard'];
    this.router.navigate(link);
  }

  register() {
    return this.clientService.client.post(this.client)
      .then(data => {

        if (!data.isSuccess) {
          throw data.error
        }
        this.client = data.data;
        this.getStart = false;
        this.verification = true;
        this.kitchenService.cook('Please Confirm your OTP', 'i');
      })
      .catch(err => this.kitchenService.cook(err, 'f'))
  }


  verify() {
    return this.clientService.clientVerification.post({ client: this.client, pin: this.client.pin })
      .then(data => {
        if (!data.isSuccess) {
          throw data.error || data.message
        }
        this.verification = false;
        this.setUsernamePassword = true;
        this.kitchenService.cook('Please Set your Username and Passcode', 'i');
      })
      .catch(err => this.kitchenService.cook(err, 'f'))
  }

  createEmployee() {
    this.employee.client = this.client;
    return this.loginService.employeeSignUp.post(this.employee)
      .then(data => {
        if (!data.isSuccess) {
          throw data["error"] || data["message"]
        }
        this.employee = data["data"];
        window.localStorage.setItem("token", this.employee.token);
        return this.dashCall();
      })
      .catch(err => this.kitchenService.cook(err, 'f'))
  }



  next() {
    if (this.getStart) {
      return this.register();
    }

    if (this.verification) {
      return this.verify();
    }

    if (this.setUsernamePassword) {
      return this.createEmployee();
    }

  }
}



