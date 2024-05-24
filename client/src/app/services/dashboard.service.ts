import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Nave } from '../interfaces/database';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  loadShipsData() {
    return this.http.get<Nave>('http://localhost:3000/naves');
  }
}
