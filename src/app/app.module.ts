import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents} from './routings/router';
import { SidebarModule } from 'ng-sidebar';

//Components
import { AppComponent } from './components/app/app.component';
// import { LoginComponent } from './components/login/login.component';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
// import { GetStartedComponent } from './components/get-started/get-started.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { DashboardSideNavComponent } from './components/dashboard-side-nav/dashboard-side-nav.component';
import { HistoryComponent } from './components/history/history.component';
import { OrgNewComponent } from './components/org-new/org-new.component';
import { OrgListComponent } from './components/org-list/org-list.component';



@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    SidebarModule.forRoot(),
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
    OrganizationsComponent,
    DashboardSideNavComponent,
    HistoryComponent,
    OrgNewComponent,
    OrgListComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

constructor(){
  console.log(routingComponents);
}
}
