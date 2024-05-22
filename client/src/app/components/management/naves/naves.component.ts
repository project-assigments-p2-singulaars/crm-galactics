import { Component, OnInit } from '@angular/core';
import { Customer, Nave, Order } from '../../../interfaces/database';
import { CrudService } from '../../../services/crud.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-naves',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './naves.component.html',
  styleUrl: './naves.component.scss'
})
export class NavesComponent implements OnInit{

  customers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;

  constructor(private crudService: CrudService) {  }

  ngOnInit(): void {

    this.getNaves();

  }

  getNaves(): void {
    this.crudService.getNaves().subscribe(naves => {
      
    })
  }

  getNaveById(id: number) {
    this.crudService.getNaveById(id).subscribe(nave => {
      
    })
  }

  createNave(nave: Nave) {
    this.crudService.createNave(nave).subscribe();
  }

  deleteNave(id: number) {
    this.crudService.deleteNave(id).subscribe();
  }

}
