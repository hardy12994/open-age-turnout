import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  employee;

  constructor(private loginService: LoginService) {
    console.log(this.employee);    
    this.employee= new Employee();
    console.log(this.employee);
  }

  ngOnInit() { }

  login() {
    this.loginService.employeeApis.post(this.employee)
      .then(data => console.log(data))
      .catch(err => console.log(err));
  }
}

