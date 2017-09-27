import { Component, OnInit, Input, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Client } from '../../models/client.model';
import { ClientService } from "app/services";
import { AppSettingsService } from 'app/services'

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.css'],
  providers: [ClientService]
})

export class GetStartedComponent implements OnInit {

  getStart;
  verification;
  setUsernamePassword;
  signUpwith;
  client: Client = new Client();
  val=false;
  condition = true;
  isLoading=false;
  err:any;

  constructor(private clientService: ClientService,private router: Router,
   public appSettings: AppSettingsService) {
    this.default();
  }

  ngOnInit() {
    // this.appSettings=new AppSettingsService();
    console.log(this.appSettings.isLoading);
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

  next() {
    if (this.getStart) {
      
      return this.clientService.client.post(this.client)
        .then(data => {
          console.log(this.appSettings);

          if (!data.isSuccess) {
            throw data.error
          }
          this.client=data.data;
          this.getStart = false;
          this.verification = true;      
        })
        .catch(err => {
          console.log(err);
          this.err = err;          
          // my Dacorative should be call with toaster.
        })
    }


    if (this.verification) {

      return this.clientService.clientVerification.post(this.client)
      .then(data=>{

        if (!data.isSuccess) {
          throw data.error || data.message
        }


        this.verification = false;
        this.setUsernamePassword = true;
      })
      .catch(err=>{
        console.log(err);
          // my Dacorative should be call with toaster.
        this.err = err;
      })
    }


    if (this.setUsernamePassword) {
      this.dashCall()

    }

  }
}



