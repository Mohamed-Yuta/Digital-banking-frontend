import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'
import { CustomerService } from '../services/customer.service';
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
  providers:[CustomerService]
})
export class CustomersComponent implements OnInit {
  
  customers:any;
  errorMessage : string | undefined;
  constructor(private service : CustomerService){
    
  }
  
 ngOnInit(): void {
   this.service.getCustomers().subscribe({
    next : (data) => { 
      this.customers=data
    },
    error :(error) => { this.errorMessage= error.message;}
   });
 }

}
