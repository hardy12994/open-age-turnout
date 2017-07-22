import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents} from './routings/router';

//Components
import { AppComponent } from './components/app/app.component';
// import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';



@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ], 
  declarations: [
    routingComponents,    
    AppComponent,
    NotFound404Component,
    SignUpComponent,
    HomeComponent,
    SideNavComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

constructor(){
  console.log(routingComponents);
}

}
