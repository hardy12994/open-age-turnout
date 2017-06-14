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
  email
  password
  constructor(private loginService: LoginService) { }

  ngOnInit() { }

  login(model: Employee) {
    this.loginService.employee.post(model)
      .then(data => console.log(data))
      .catch(err => console.log(err));

  }

}
