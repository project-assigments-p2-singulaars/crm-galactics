import { Component, OnInit } from '@angular/core';
import { Customer, Nave, Order } from '../../../interfaces/database';
import { CrudService } from '../../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent implements OnInit{
  
  constructor(private crudService: CrudService) {  }
  
  customers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;
  order!: Order;
  
  ngOnInit(): void {

    this.getOrders();
    
  }

  getOrders(): void {
    this.crudService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  getOrdersById(id: number) {
    this.crudService.getOrderById(id).subscribe(order => {
      this.order = order;
    });
  }
  
  createOrder(order: Order) {
    this.crudService.createOrder(order).subscribe();
  }

  deleteOrder(id: number) {
    this.crudService.deleteOrder(id).subscribe();
  }


  


}
