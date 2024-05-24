import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MonthlySale, Product, Sale } from '../interfaces/charts'; // Asegúrate de que MonthlySale esté correctamente definido

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private readonly apiUrl = 'http://localhost:3002';

  constructor(private http: HttpClient) {}

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  loadSalesData(): Observable<Sale[]> {
    return this.http.get<Sale[]>(`${this.apiUrl}/monthly_sales`);
  }

  loadMonthlySalesData(): Observable<MonthlySale[]> {
    return this.http.get<MonthlySale[]>(`${this.apiUrl}/monthly_sales`);
  }
}
