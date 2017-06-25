import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  employee;

  constructor(private loginService: LoginService, private router: Router) {
    console.log(this.router);
    this.employee = new Employee();
    console.log(this.employee);
  }

  ngOnInit() { }

  login() {
    this.loginService.employeeApis.post(this.employee)
      .then(data => {
        console.log(data)
        if (data.isSuccess) {
          this.router.navigate(['/dashboard']);
        }
      })
      .catch(err => console.log(err));
  }
}

