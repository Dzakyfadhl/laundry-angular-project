import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-cashier-dashboard',
  templateUrl: './cashier-dashboard.component.html',
  styleUrls: ['./cashier-dashboard.component.css']
})
export class CashierDashboardComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon:'pi pi-fw pi-home',
        routerLink : '/cashier'
        
      },
      {
        label: 'Transaction',
        icon:'pi pi-fw pi-dollar',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink : 'transaction'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink : 'modif-transaction'
          }
        ],
        
      },
      {
        label: 'Customer',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink : 'customers'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink : 'modif-customer'
          }
        ]
      }
    ];
  }


}
