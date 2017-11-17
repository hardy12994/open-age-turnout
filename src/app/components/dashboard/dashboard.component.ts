import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  loggedIn: string = "Hardy";
  _opened: boolean = true;

  _toggleSidebar() {
    this._opened = !this._opened;
  }

  constructor() {
    console.log('dashboard wooorrrrrrrrrrrrrrrks');
  }

  ngOnInit() {
  }

}
