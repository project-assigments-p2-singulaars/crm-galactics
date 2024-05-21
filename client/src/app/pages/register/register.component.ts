import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  signUpObj: SignUpModel = new SignUpModel();

  onRegister(){
    const localUser = localStorage.getItem('angular17User');
    if(localUser != null ){
      const users = JSON.parse(localUser);
      users.push(this.signUpObj);
      localStorage.setItem('angular17User', JSON.stringify(users));
    }else{
      const users =[];
      users.push(this.signUpObj);
      localStorage.setItem('angular17User', JSON.stringify(users));

      
    }

  }

}

export class SignUpModel{
  userName: string;
  email: string;
  password: string;

  constructor(){
    this.userName = "";
    this.email = "";
    this.password = "";
  }
}
