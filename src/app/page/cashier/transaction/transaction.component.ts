import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface Transactions {
  code:string,
  time: string,
  customer:string,
  empCode: string,
  payment:string,
  price:number
}

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  listTrx:Transactions[];

  constructor() { }

  ngOnInit(): void {
    this.defineTransaction();
  }

  defineTransaction() {
    this.listTrx = [
      {
        code: "TRXLAUNDRY-001",
        time: "asd",
        customer: "CUST001",
        empCode: "EMP001",
        payment: "PAY001",
        price : 50000
      },
      {
        code: "TRXLAUNDRY-002",
        time: "asd",
        customer: "CUST002",
        empCode: "EMP002",
        payment: "PAY002",
        price : 20000
      },
      {
        code: "TRXLAUNDRY-003",
        time: "asd",
        customer: "CUST001",
        empCode: "EMP003",
        payment: "PAY003",
        price : 30000
      }
    ]
  }

}
