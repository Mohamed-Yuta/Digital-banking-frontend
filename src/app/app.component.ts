import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            NavbarComponent,
            HttpClientModule,
          CustomersComponent , 
        CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'digital-banking-front';
}
