import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../../services/crud.service';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Nave } from '../../../../interfaces/database';

@Component({
  selector: 'app-detail-naves',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './detail-naves.component.html',
  styleUrl: './detail-naves.component.scss'
})
export class DetailNavesComponent implements OnInit{


  constructor(private crudService: CrudService, private route: ActivatedRoute,private router: Router) { }

  
  naves: Nave[] = [];
  nave!: Nave;
  newCustomer: any = {};

  ngOnInit(): void {
      
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.crudService.getNaveById(+id).subscribe(nave => {
        this.nave = nave;        
      });
    }
  }


  deleteNave(id: number) {
    this.crudService.deleteNave(id).subscribe();
    this.router.navigate(['/naves']);
  }

  editNave(id: number) {
    //this.router.navigate(['/customers', id]);
  }
  

}
