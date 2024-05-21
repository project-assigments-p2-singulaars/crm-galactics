import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginObj: LoginModel = new LoginModel();

}



export class LoginModel{
  email: string;
  password: string;

  constructor(){
    this.email = "";
    this.password = "";
  }
}