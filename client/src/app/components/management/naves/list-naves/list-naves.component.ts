import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../services/crud.service';
import { Customer, Nave, Order } from '../../../../interfaces/database';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-naves',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './list-naves.component.html',
  styleUrl: './list-naves.component.scss',
})
export class ListNavesComponent implements OnInit {
  customers: Customer[] = [];
  naves: Nave[] = [];
  orders: Order[] = [];
  customer!: Customer;
  newCustomer: any = {};
  nave!: Nave;

  ngOnInit(): void {
    this.getNaves();
  }

  constructor(private crudService: CrudService) {}

  getNaves(): void {
    this.crudService.getNaves().subscribe((naves) => {
      this.naves = naves;
    });
  }
}
