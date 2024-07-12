import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common'
@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements OnInit {
  
  customers:any;
  constructor(private http : HttpClient){

  }
  
  ngOnInit(): void {
    this.http.get("http://localhost:8080/customers").subscribe(data=> {
      this.customers=data;
    }, error=>{ console.log(error)});
    
  }

}
