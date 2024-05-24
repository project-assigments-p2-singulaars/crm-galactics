import { CrudService } from './../../../../services/crud.service';
import { Component, OnInit } from '@angular/core';
import { Customer, Order } from '../../../../interfaces/database';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-detail-order',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule],
  templateUrl: './detail-order.component.html',
  styleUrl: './detail-order.component.scss',
})
export class DetailOrderComponent implements OnInit {
  order!: Order;
  constructor(
    private route: ActivatedRoute,
    private crudService: CrudService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.crudService.getOrderById(id).subscribe((data) => {
      this.order = data;
    });
  }

  deleteCustomer(id: number) {
    this.crudService.deleteOrder(id).subscribe();
    this.router.navigate(['/orders']);
  }

  //falta implementar
  /*editOrder(id: number) {
    this.router.navigate(['/customers', id]);
  }*/
}
