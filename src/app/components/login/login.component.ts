import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { AppSettingsService } from "app/services";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  employee;

  constructor(private loginService: LoginService, private appSettingsService: AppSettingsService, private router: Router) {
    this.employee = new Employee();
  }

  ngOnInit() { 
    console.log('from login service');
    console.log(this.appSettingsService.isLoading);
  }

  login() {
    this.loginService.employee.post(this.employee)
      .then(data => {
        console.log(data)
        if (data.isSuccess) {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch(err => console.log(err));
  }
}

