import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, switchMap } from 'rxjs';
import { Customer, Nave, Order, Product } from '../interfaces/database';

@Injectable({
  providedIn: 'root'
})

export class CrudService {

  http=inject(HttpClient);
  private apiUrl = 'http://localhost:3000'; // URL del backend

  constructor() { }

  // customers
  getcustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/customers`);
  }

  getCustomerById(id: number): Observable<Customer> {
    
    return this.http.get<Customer>(`${this.apiUrl}/customers/${id}`);
  }

  createCustomer(customer: any): Observable<any> {
    return this.getcustomers().pipe(
      map(customers => {
        const newId = customers.length > 0 ? Math.max(...customers.map(c => c.id)) + 1 : 1;
        const newCustomer = { id: newId, ...customer };
        return newCustomer;
      }),
      switchMap(newCustomer => this.http.post<any>(`${this.apiUrl}/customers`, newCustomer))
    );
  }

  

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/customers/${id}`);
  }



  // Naves
  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>(`${this.apiUrl}/naves`);
  }

  getNaveById(id: number): Observable<Nave> {
    return this.http.get<Nave>(`${this.apiUrl}/naves/${id}`);
  }

  createNave(nave: any): Observable<any> {
    return this.getNaves().pipe(
      map(naves => {
        const newId = naves.length > 0 ? Math.max(...naves.map(nave => nave.id)) + 1 : 1;
        const newNave = { id: newId, ...nave };
        return newNave;
      }),
      switchMap(newNave => this.http.post<any>(`${this.apiUrl}/naves`, newNave))
    );
  }

  updateNave(nave: Nave): Observable<Nave> {
    return this.http.put<Nave>(`${this.apiUrl}/naves/${nave.id}`, nave);
  }

  deleteNave(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/naves/${id}`);
  }

  // Orders
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}/orders`);
  }

  getOrderById(id: number): Observable<Order> {
    return this.http.get<Order>(`${this.apiUrl}/orders/${id}`);
  }

  createOrder(order: Order): Observable<Order> {
    return this.http.post<Order>(`${this.apiUrl}/orders`, order);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.apiUrl}/orders/${order.order_id}`, order);
  }

  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/orders/${id}`);
  }


}
