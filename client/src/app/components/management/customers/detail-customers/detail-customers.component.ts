import { CrudService } from './../../../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../interfaces/database';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-customers',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './detail-customers.component.html',
  styleUrl: './detail-customers.component.scss',
})
export class DetailCustomersComponent implements OnInit {
  customer!: Customer;

  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.crudService.getCustomerById(+id).subscribe((customer) => {
        this.customer = customer;
      });
    }
  }

  deleteCustomer(id: number) {
    this.crudService.deleteCustomer(id).subscribe();
    this.router.navigate(['/customers']);
  }

  editCustomer(id: number) {
    this.router.navigate(['/customers', id]);
  }
}
