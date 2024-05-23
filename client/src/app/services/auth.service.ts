import { Injectable ,inject} from '@angular/core';
import { UserService } from './user.service';
import { LocalstorageService } from './localstorage.service';
import { Observable, firstValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { userData } from '../interfaces/userData';
import { environment } from '../../environments/environment.development';

type LoginResponseType = {
  accessToken:string,
  user:userData,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url =environment.apiUrl;
  private localStorageService = inject(LocalstorageService);
  private http=inject(HttpClient);

  constructor() { }

  async login(credentials:userData){
    try{
      const result = await firstValueFrom(this.http.post<LoginResponseType>(this.url.concat('/login'), credentials))

      const {user} = result;
      this.localStorageService.setItem('user',JSON.stringify(user.userName))

    }catch(e){
      throw e;
    }
  }

  isAuth(){
    return false;
  }
}
