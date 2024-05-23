import { Routes } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProductsComponent } from './pages/products/products.component';
import { CustomersComponent } from './pages/customers/costumers.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];
