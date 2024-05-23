import { Component, OnInit } from '@angular/core';
import { Customer, Nave, Order } from '../../../../interfaces/database';
import { CrudService } from '../../../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-customers',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './form-customers.component.html',
  styleUrl: './form-customers.component.scss'
})
export class FormCustomersComponent {

  customerForm: FormGroup;

  customers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;
  newCustomer: any = {};

  constructor(private crudService: CrudService, private fb: FormBuilder) { 
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
    console.log('Customer added successfully');
    this.newCustomer = {}; // Limpiar formulario
  });
  
}

}
