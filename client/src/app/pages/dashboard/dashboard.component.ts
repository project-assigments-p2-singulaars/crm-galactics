import { Component, inject } from '@angular/core';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  localStorageService=inject(LocalstorageService)


logOut(){

this.localStorageService.clearStorage();
window.location.reload();

  }

}
