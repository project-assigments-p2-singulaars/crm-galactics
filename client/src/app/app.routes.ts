import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path:'home',
        component:DashboardComponent,
        canActivate: [authGuard]
        
    },
    {
        path:'', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'login', 
        component: LoginComponent,
    },
    {
        path: 'register', 
        component: RegisterComponent
    }

];
