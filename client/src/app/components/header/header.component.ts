import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatListModule, RouterLink, MatMenuModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  localStorageService = inject(LocalstorageService)
  logOut(){

    this.localStorageService.clearStorage();
    window.location.reload();
    
      }
}
