import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, firstValueFrom } from 'rxjs';
import { userData } from '../interfaces/userData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users'
  private http = inject(HttpClient);

  constructor() { }


  addUser(user:userData): Observable<userData>{
    console.log(user);
    return this.http.post<userData>(this.url, user);
  }
}
