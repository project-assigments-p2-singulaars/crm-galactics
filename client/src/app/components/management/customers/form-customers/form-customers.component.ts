import { Component, OnInit } from '@angular/core';
import { Customer, Nave, Order } from '../../../../interfaces/database';
import { CrudService } from '../../../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-customers',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatButtonModule],
  templateUrl: './form-customers.component.html',
  styleUrl: './form-customers.component.scss'
})
export class FormCustomersComponent {

  customerForm: FormGroup;


  naves: Nave[] = [];

  constructor(private crudService: CrudService, private fb: FormBuilder,private router: Router) { 
    this.customerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    number: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    location: ['', Validators.required],
    img: ['']
  });
 }

 createCustomer(customer: Customer){

  //antiguo code, no añadia ID incremental
  //this.crudService.createCustomer(customer).subscribe();
  
  this.crudService.createCustomer(this.customerForm.value).subscribe(() => {
    alert('Customer added successfully');
    this.router.navigate(['/customers']);
  });
  
}

}
