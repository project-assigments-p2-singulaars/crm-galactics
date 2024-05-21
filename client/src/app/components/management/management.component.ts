import { Component } from '@angular/core';
import { Customer, Nave, Order } from '../../interfaces/database';
import { CrudService } from '../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-management',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './management.component.html',
  styleUrl: './management.component.scss'
})
export class ManagementComponent {
  
  customers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;

  constructor(private crudService: CrudService) {  }


  ngOnInit(): void {

    this.getCustomers();
    this.getCustomersById();
   

  }
getCustomers(): void {
    this.crudService.getcustomers().subscribe(customers => {
    //this.customers = costumers;
  });
  }

getCustomersById(){
  this.crudService.getCustomerById(1).subscribe(customer => {
    this.customer = customer; // Asignar el customer recibido a this.customer
  });
}


}
