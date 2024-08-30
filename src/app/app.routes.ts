import { Routes } from '@angular/router';
import { LoginSignupComponent } from './Pages/login-signup/login-signup.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { LayoutComponent } from './Pages/layout/layout.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'loginSignup',
        pathMatch:'full'
    },
    {
        path:'loginSignup',
        component:LoginSignupComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:
        [
          {
             path:'dashboard',
             component:DashboardComponent
          }
       ]
    }
];
