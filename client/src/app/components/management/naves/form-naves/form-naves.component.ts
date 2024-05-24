import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CrudService } from '../../../../services/crud.service';
import { Nave } from '../../../../interfaces/database';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-naves',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './form-naves.component.html',
  styleUrl: './form-naves.component.scss'
})
export class FormNavesComponent {

  naveForm: FormGroup;
  newNave: any = {};

  constructor(private crudService: CrudService, private fb: FormBuilder,private router: Router){
    this.naveForm = this.fb.group({
      name: ['', Validators.required],
      img: [''],
      price: ['',Validators.required],
      description: ['', Validators.required],
      stock: ['',Validators.required]
    });
  }

  createNave(nave:Nave){
    this.crudService.createNave(this.naveForm.value).subscribe(() => {
      console.log('Customer added successfully');
      this.newNave = {}; // Limpiar formulario
      this.router.navigate(['/naves']);
    });
  }
}
