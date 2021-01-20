import { Component, OnInit } from '@angular/core';

interface Payment {
  code?:string;
  name?:string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  listPayments:Payment[];

  constructor() { }

  ngOnInit(): void {
    this.definePayments();
  }

  definePayments(){
    this.listPayments = [
      {
        code:"PAY001",
        name:"DANA"
      },
      {
        code:"PAY002",
        name:"OVO"
      },
      {
        code:"PAY003",
        name:"Go-Pay"
      }
    ]
  }

}
