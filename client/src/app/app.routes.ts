import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListCustomersComponent } from './components/management/customers/list-customers/list-customers.component';
import { DetailCustomersComponent } from './components/management/customers/detail-customers/detail-customers.component';
import { FormCustomersComponent } from './components/management/customers/form-customers/form-customers.component';
import { ListNavesComponent } from './components/management/naves/list-naves/list-naves.component';
import { DetailNavesComponent } from './components/management/naves/detail-naves/detail-naves.component';
import { FormNavesComponent } from './components/management/naves/form-naves/form-naves.component';
import { ListOrderComponent } from './components/management/orders/list-order/list-order.component';
import { DetailOrderComponent } from './components/management/orders/detail-order/detail-order.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    {
        path: 'create-customer',
        component: FormCustomersComponent,
        canActivate: [authGuard]

    },
    {
        path: 'customers',
        component: ListCustomersComponent,
        canActivate: [authGuard]
    },
    {
        path: 'customer/:id',
        component: DetailCustomersComponent,
        canActivate: [authGuard]

    },
    {
        path: 'naves',
        component: ListNavesComponent,
        canActivate: [authGuard]

    },
    {
        path: 'naves/:id',
        component: DetailNavesComponent,
        canActivate: [authGuard]

    },
    {
        path: 'create-nave',
        component: FormNavesComponent,
        canActivate: [authGuard]

    },
    {
        path: 'orders',
        component: ListOrderComponent,
        canActivate: [authGuard]

    },
    {
        path: 'orders/:id',
        component: DetailOrderComponent,
        canActivate: [authGuard]

    },
    {
        path:'dashboard',
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
    },
    {
        path: 'orders', 
        component: OrdersComponent,
        canActivate: [authGuard]
    },
    {
        path: 'products', 
        component: ProductsComponent,
        canActivate: [authGuard]
    }
    
];
