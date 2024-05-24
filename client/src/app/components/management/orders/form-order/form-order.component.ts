import { Component, OnInit } from '@angular/core';
import { Customer, Nave, Order } from '../../../../interfaces/database';
import { CrudService } from '../../../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-order',
  standalone: true,
  imports: [HttpClientModule,ReactiveFormsModule],
  templateUrl: './form-order.component.html',
  styleUrl: './form-order.component.scss'
})
export class FormOrderComponent {

  orderForm: FormGroup;

  orders: Order[] = [];


  constructor(private crudService: CrudService, private formBuilder: FormBuilder) {
    this.orderForm = this.formBuilder.group({
      order_id: ['', Validators.required],
      customer_id: ['', Validators.required],
      products: ['', Validators.required],
      total_price: ['', Validators.required],
    });
  }

  createOrder(order: Order) {
    this.crudService.createOrder(order).subscribe();
  }

}
