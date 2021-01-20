import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modif-user',
  templateUrl: './modif-user.component.html',
  styleUrls: ['./modif-user.component.css']
})
export class ModifUserComponent implements OnInit {

  listRoles:any[] = [
    {code: "admin"},
    {code: "cashier"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
