import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListCustomersComponent } from './components/management/customers/list-customers/list-customers.component';
import { DetailCustomersComponent } from './components/management/customers/detail-customers/detail-customers.component';
import { FormCustomersComponent } from './components/management/customers/form-customers/form-customers.component';
import { ListNavesComponent } from './components/management/naves/list-naves/list-naves.component';
import { DetailNavesComponent } from './components/management/naves/detail-naves/detail-naves.component';
import { FormNavesComponent } from './components/management/naves/form-naves/form-naves.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'create-customer',
        component: FormCustomersComponent
    },
    {
        path: 'customers',
        component: ListCustomersComponent,
    },
    {
        path: 'customer/:id',
        component: DetailCustomersComponent,
    },
    {
        path: 'naves',
        component: ListNavesComponent,
    },
    {
        path: 'naves/:id',
        component: DetailNavesComponent,
    },
    {
        path: 'create-naves',
        component: FormNavesComponent,
    },
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
