import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule} from './routings/router';

//Components
import { AppComponent } from './components/app/app.component';

import {
  DashboardComponent,
  LoginComponent,
  NotFound404Component
} from './helpers/components.helpers';



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
    AppComponent,    
    LoginComponent,
    DashboardComponent,
    NotFound404Component
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
