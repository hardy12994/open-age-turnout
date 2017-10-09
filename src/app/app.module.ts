import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from './routings/router';
import { SidebarModule } from 'ng-sidebar';


//singleton services
import {
  AppSettingsService
} from './services';

//guards
import {
  AuthGuard,
  UserGuard
} from './guards';

//Components
import { AppComponent } from './components/app/app.component';
import { NotFound404Component } from './components/not-found404/not-found404.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { OrganizationsComponent } from './components/organizations/organizations.component';
import { DashboardSideNavComponent } from './components/dashboard-side-nav/dashboard-side-nav.component';
import { HistoryComponent } from './components/history/history.component';
import { OrgNewComponent } from './components/org-new/org-new.component';
import { OrgListComponent } from './components/org-list/org-list.component';
import { HardToasterDirective } from './directives/hard-toaster.directive';
import { MyHiddenDirective } from './directives/my-hidden.directive';
import { MyUnderlineDirective } from './directives/my-underline.directive';
import { MyIfDirective } from './directives/my-if.directive';
import { RoleSpecifireDirective } from './directives/role-specifire.directive';
import { ToasterService } from "app/services/toaster.service";



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
    HardToasterDirective,
    MyHiddenDirective,
    MyUnderlineDirective,
    MyIfDirective,
    RoleSpecifireDirective
  ],
  providers: [
    AuthGuard,UserGuard,
    ToasterService,
    AppSettingsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor() { }
}
