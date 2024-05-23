import { Component,inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SignUpModel } from '../register/register.component';
import { Router } from '@angular/router';
import { userData } from '../../interfaces/userData';
import { LocalstorageService } from '../../services/localstorage.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  // loginObj: LoginModel = new LoginModel();
  private localStorageService = inject(LocalstorageService);
  loginForm!:FormGroup;

constructor(private router:Router){


}


 async onLogin(){
    const user:userData={
      userName:this.loginForm.controls["userName"].value,
      password:this.loginForm.controls["password"].value,
    }
    try {
      await this.localStorageService.getItem('user');
      const {id} = this.localStorageService.getItem('user') as userData
      console.log(id);

      this.router.navigate([`/profile/${id}`]);

    }  catch (error) {
      alert('ups! something occurred');
    }

  }

}



// export class LoginModel{
//   userName: string;
//   password: string;

//   constructor(){
//     this.userName = "";
//     this.password = "";
//   }
// }