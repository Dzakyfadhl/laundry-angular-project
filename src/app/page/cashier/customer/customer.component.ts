import { Component, OnInit } from '@angular/core';

interface Customers {
  code:string,
  fullname:string,
  phone:string,
  address:string
}

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  listCustomers:Customers[];
  constructor() { }

  ngOnInit(): void {
    this.defineCustomers();
  }

  defineCustomers(){
    this.listCustomers = [
      {
        code : "CUST001",
        fullname: "Farel Customer",
        phone : "0812111001",
        address : "Jl. Johar Baru"
      },
      {
        code : "CUST002",
        fullname: "Ocay Customer",
        phone : "0812111002",
        address : "Jl. Tangerang"
      },
      {
        code : "CUST003",
        fullname: "Galih Customer",
        phone : "0812111003",
        address : "Jl. Tanjung Priok"
      }
    ]
  }

}
