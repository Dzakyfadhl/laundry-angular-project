import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: '/admin'
      },
      {
        label: 'Service',
        icon:'pi pi-fw pi-cog',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink : 'services'
          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink : 'modif-service'
          }
        ]
      },
      {
        label: 'Perfume',
        icon: 'pi pi-fw pi-heart',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink : 'perfumes'

          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink : 'modif-perfume'

          }
        ]
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink : 'users'

          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink : 'modif-user'

          }
        ]
      },
      {
        label: 'Payment',
        icon: 'pi pi-fw pi-credit-card',
        items: [
          {
            label: 'View',
            icon: 'pi pi-fw pi-eye',
            routerLink : 'payments'

          },
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            routerLink : 'modif-payment'

          }
        ]
      }
    ];
  }

}
