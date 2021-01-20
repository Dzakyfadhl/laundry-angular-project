import { Component, OnInit } from '@angular/core';

interface Profiles{
  code:string,
  fullname:string,
  phone:string,
  address:string,
  user:Users
}

interface Users{
  username:string,
  role:string
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  listProfiles:Profiles[];

  constructor() { }

  ngOnInit(): void {
    this.defineProfiles();
  }

  defineProfiles(){
    this.listProfiles = [
      {
        code:"EMPADMIN001",
        fullname:"Dzaky Fadhilla",
        phone:"081280810489",
        address:"Rawamangun",
        user: {
          username:"dzakadmin",
          role:"admin"
        },
      },
      {
        code:"EMPADMIN002",
        fullname:"Apry Admin",
        phone:"081280810481",
        address:"Jl Tanjung Priok",
        user: {
          username:"apryadmin",
          role:"admin"
        },
      },
      {
        code:"EMPCASHIER001",
        fullname:"Ibon Kasir",
        phone:"081280810482",
        address:"Jl. Tangerang Selatan",
        user: {
          username:"iboncashier",
          role:"cashier"
        },
      }



    ]
  }

}
