import { CrudService } from './../../../../services/crud.service';
import { Component } from '@angular/core';
import { Customer, Nave, Order } from '../../../../interfaces/database';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list-customers',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './list-customers.component.html',
  styleUrl: './list-customers.component.scss'
})
export class ListCustomersComponent {


  constructor(private crudService: CrudService) { }

  customers: Customer[] = [];
  filteredCustomers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;
  newCustomer: any = {};

  ngOnInit(): void {

    this.getCustomers();
    

  }


  onKey(event: any){

    const valorInput = event.target.value.toLowerCase();
    this.filteredCustomers = this.customers.filter(food =>
      food.name.toLowerCase().includes(valorInput)
    );
    console.log(valorInput);
    
  }
  getCustomers(): void {
    this.crudService.getcustomers().subscribe(customers => {
    this.customers = customers;
    this.filteredCustomers = this.customers;
  });
  }



  getCustomersById(id: number){
    this.crudService.getCustomerById(id).subscribe(customer => {
      this.customer = customer;
      
    });
}

}
