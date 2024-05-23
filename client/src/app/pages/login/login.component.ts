import { Component,OnInit,inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators, FormBuilder} from '@angular/forms'
import { SignUpModel } from '../register/register.component';
import { Router } from '@angular/router';
import { userData } from '../../interfaces/userData';
import { LocalstorageService } from '../../services/localstorage.service';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  // loginObj: LoginModel = new LoginModel();
  private formBuilder = inject(FormBuilder)
  private localStorageService = inject(LocalstorageService);
  private userService = inject(UserService)
  loginForm!:FormGroup;

  constructor( private router: Router){

  }

ngOnInit(): void {
  this.loginForm=this.formBuilder.group({
    email:["",Validators.required],
    password:["",Validators.required]
  })
}

onSubmit() {
  if (this.loginForm.valid) {
    const { email, password } = this.loginForm.value;
    console.log(this.loginForm.value);
    
    this.userService.login({ email, password }).subscribe(
      () => {
        console.log("win");
        // Redirige al usuario a la página de dashboard (ajusta según tus rutas)
      },
      error => {
        console.log("fail");
        
      }
    );
  }
}
//  async onLogin(){
//     const user:userData={
//       userName:this.loginForm.controls["userName"].value,
//       password:this.loginForm.controls["password"].value,
//     }
//     console.log(user)
//     try {
//       await this.authService.login(user);
//       const {id} = this.localStorageService.getItem('user') as userData
//       console.log(id);
//     }  catch (error) {
//       // alert('ups! something occurred');
//       console.log('error',error)
//     }
//   }
// }
}