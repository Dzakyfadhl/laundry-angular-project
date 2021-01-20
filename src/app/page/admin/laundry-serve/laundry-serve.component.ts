import { Component, OnInit } from '@angular/core';

interface LaundryService {
  code?:string;
  name?:string;
  price?:number;
  dayDuration?:number;
}

@Component({
  selector: 'app-laundry-serve',
  templateUrl: './laundry-serve.component.html',
  styleUrls: ['./laundry-serve.component.css']
})
export class LaundryServeComponent implements OnInit {

  listLaundryService:LaundryService[];

  constructor() { }

  ngOnInit(): void {
    this.defineLaundryService();
  }

  defineLaundryService(){
    this.listLaundryService = [
      {
        code: "SVR001",
        name: "Reguler Satuan",
        price: 10000,
        dayDuration: 5
      },
      {
        code: "SVR002",
        name: "Reguler Kiloan",
        price: 5000,
        dayDuration: 5
      },
      {
        code: "SVR003",
        name: "Express Satuan",
        price: 20000,
        dayDuration: 2
      },
      {
        code: "SVR004",
        name: "Express Kiloan",
        price: 7000,
        dayDuration: 2
      }
    ]
  }

}
