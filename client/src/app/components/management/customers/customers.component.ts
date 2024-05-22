import { Component, OnInit } from '@angular/core';
import { Customer, Nave, Order } from '../../../interfaces/database';
import { CrudService } from '../../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss'
})
export class CustomersComponent implements OnInit {


  constructor(private crudService: CrudService) {  }
  
  customers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;

  ngOnInit(): void {

    this.getCustomers();
    

  }



  getCustomers(): void {
    this.crudService.getcustomers().subscribe(customers => {
    this.customers = customers;
  });
  }

  getCustomersById(id: number){
    this.crudService.getCustomerById(id).subscribe(customer => {
      this.customer = customer;
    });
}


  createCustomer(customer: Customer){
    this.crudService.createCustomer(customer).subscribe();
  }

  deleteCustomer(id: number){
    this.crudService.deleteCustomer(id).subscribe();
  }


}


