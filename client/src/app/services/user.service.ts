import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, firstValueFrom, tap } from 'rxjs';
import { userData } from '../interfaces/userData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3001/users';
  loginUrl = 'http://localhost:3001/login'
  private http = inject(HttpClient);

  constructor() { 
    
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.loginUrl}`, credentials)
      .pipe(
        tap(response => {
          console.log(response)
          localStorage.setItem('token', response.accessToken); // Guarda el token en el localStorage
        }),
        catchError(error => {
          console.error('Error de autenticación:', error);
          throw error;
        })
      );
  }

  addUser(user:userData): Observable<userData>{
    console.log(user);
    return this.http.post<userData>(this.url, user);
  }
}
