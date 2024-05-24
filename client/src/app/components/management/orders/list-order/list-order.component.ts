import { CrudService } from './../../../../services/crud.service';
import { Component } from '@angular/core';
import { Customer, Nave, Order } from '../../../../interfaces/database';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-list-order',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './list-order.component.html',
  styleUrl: './list-order.component.scss'
})
export class ListOrderComponent {

  constructor(private crudService: CrudService) { }


  filteredOrders: Order[] = [];
  orders: Order[] = [];
  newCustomer: any = {};

  ngOnInit(): void {

    this.getOrders();
    

  }



  getOrders(): void {
    this.crudService.getOrders().subscribe(orders => {
      this.orders = orders;
      this.filteredOrders = this.orders;
    });
  }

  

}
