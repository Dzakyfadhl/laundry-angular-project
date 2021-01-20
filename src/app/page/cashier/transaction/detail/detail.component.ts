import { Component, OnInit } from '@angular/core';

interface DetailTrx {
  trxCode:string,
  dtlCode:string,
  desc:string,
  time:string,
  unit:number,
  status:string,
  perfume:string,
  service:string,
  price:number

}

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  listDtl:DetailTrx[];

  constructor() { }

  ngOnInit(): void {
    this.defineDtl();
  }

  defineDtl(){
    this.listDtl =  [
      {
        trxCode: "TRXLAUNDY-001",
        dtlCode: "DTL001",
        desc: "Pakaian",
        time:"11 Januari 2021",
        unit : 5,
        status: "Received",
        perfume: "PRFM001",
        service: "SRV001",
        price: 15000
        
      },
      {
        trxCode: "TRXLAUNDY-001",
        dtlCode: "DTL002",
        desc: "Karpet",
        time:"11 Januari 2021",
        unit : 5,
        status: "Received",
        perfume: "PRFM002",
        service: "SRV002",
        price: 20000
        
      },
      {
        trxCode: "TRXLAUNDY-001",
        dtlCode: "DTL003",
        desc: "Bed Cover",
        time:"11 Januari 2021",
        unit : 7,
        status: "Received",
        perfume: "PRFM003",
        service: "SRV003",
        price: 20000
      }

    ]
    
    
  }

}
