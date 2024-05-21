import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { SignUpModel } from '../register/register.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
constructor(private router:Router){

}

  loginObj: LoginModel = new LoginModel();

  onLogin(){
    const localUsers=localStorage.getItem('angular17User');
    if(localUsers !=null){
      const users=JSON.parse(localUsers);
      const isUserPresent=users.find ((user:SignUpModel)=>user.userName==this.loginObj.userName && user.password ==this.loginObj.password);
if(isUserPresent !=undefined){
  alert("User found...")
  localStorage.setItem('loggedUser',JSON.stringify(isUserPresent));
  this.router.navigateByUrl('/dashboard')
}else{
  alert("No user found")
}
    }

  }

}



export class LoginModel{
  userName: string;
  password: string;

  constructor(){
    this.userName = "";
    this.password = "";
  }
}