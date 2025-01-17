import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  userServcie = inject(UserService);
  router = inject(Router);
  signUpObj: SignUpModel = new SignUpModel();

  async onRegister() {
    console.log(this.signUpObj);
    await this.userServcie.addUser(this.signUpObj).subscribe();
    this.router.navigate(['/dashboard'])

  }
}

export class SignUpModel {
  userName: string;
  email: string;
  password: string;

  constructor() {
    this.userName = '';
    this.email = '';
    this.password = '';
  }
}
