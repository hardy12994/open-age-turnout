import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// import { AppComponent } from '../components/app/app.component';
import { LoginComponent } from '../components/login/login.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { NotFound404Component } from '../components/not-found404/not-found404.component';
import { SignUpComponent } from '../components/sign-up/sign-up.component';
import { GetStartedComponent } from '../components/get-started/get-started.component';
import { HomeComponent } from '../components/home/home.component';


const appRoutes: Routes = [


    {
        path: 'home', component: HomeComponent, children: [
            { path: 'get-started', component: GetStartedComponent },
            { path: 'login', component: LoginComponent },
            { path: '', pathMatch: 'full', redirectTo: 'get-started' }

        ]
    },
    // { path: 'get-started', component: GetStartedComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
    // { path: '**', component: NotFound404Component }
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

export const routingComponents = [LoginComponent, DashboardComponent, GetStartedComponent];