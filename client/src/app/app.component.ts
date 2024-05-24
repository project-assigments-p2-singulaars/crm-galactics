import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';;
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule,ReactiveFormsModule,RouterLink, DashboardComponent, HeaderComponent, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'galactics';
}
