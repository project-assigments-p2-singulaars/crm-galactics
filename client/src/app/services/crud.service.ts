import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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

  createCustomer(costumer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${this.apiUrl}/customers`, costumer);
  }


  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/customers/${id}`);
  }

  // Naves
  getNaves(): Observable<Nave[]> {
    return this.http.get<Nave[]>(`${this.apiUrl}/naves`);
  }

  getNave(id: number): Observable<Nave> {
    return this.http.get<Nave>(`${this.apiUrl}/naves/${id}`);
  }

  createNave(nave: Nave): Observable<Nave> {
    return this.http.post<Nave>(`${this.apiUrl}/naves`, nave);
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

  getOrder(id: number): Observable<Order> {
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
