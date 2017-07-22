import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css']
})
export class GetStartedComponent implements OnInit {

  getStart;
  verification;
  setUsernamePassword;

  constructor(private router: Router) {
    this.default();
  }

  ngOnInit() {
  }

  default() {
    this.getStart = true;
    this.verification = false;
    this.setUsernamePassword = false;
  }


  dashCall() {
    let link = ['/dashboard'];
    this.router.navigate(link);
  }

  next() {
    if (this.getStart) {
      this.getStart = false;
      this.verification = true;
      this.setUsernamePassword = false;
      return;
    }


    if (this.verification) {
      this.getStart = false;
      this.verification = false;
      this.setUsernamePassword = true;
      return;
    }
    if (this.setUsernamePassword) {
      this.dashCall()

    }
  }
}



