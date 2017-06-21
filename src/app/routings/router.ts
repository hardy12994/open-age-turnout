
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
    DashboardComponent,
    LoginComponent,
    NotFound404Component
} from '../helpers/components.helpers';

 const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }