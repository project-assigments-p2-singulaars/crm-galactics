import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { ListCustomersComponent } from './components/management/customers/list-customers/list-customers.component';
import { DetailCustomersComponent } from './components/management/customers/detail-customers/detail-customers.component';
import { FormCustomersComponent } from './components/management/customers/form-customers/form-customers.component';

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
];
