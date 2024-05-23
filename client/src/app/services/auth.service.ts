import { Injectable ,inject} from '@angular/core';
import { UserService } from './user.service';
import { LocalstorageService } from './localstorage.service';
import { firstValueFrom } from 'rxjs';
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
  token = '';
  constructor() { }
  private url =environment.apiUrl;
  private localStorageService = inject(LocalstorageService);
  private http=inject(HttpClient)


  isAuth(){
    return this.token.length > 0;
  }
  
  async login(credentials:UserService){
    try{
      const result = await firstValueFrom(this.http.post<LoginResponseType>(this.url.concat('/login'), credentials))

      const {user} = result;
      this.localStorageService.setItem('user',JSON.stringify(user))

    }catch(e){
      throw e;
    }
  }
}
