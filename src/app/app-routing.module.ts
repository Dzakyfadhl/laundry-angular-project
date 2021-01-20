import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from './layout/login/login.component';
import { AdminDashboardComponent } from './layout/admin-dashboard/admin-dashboard.component';
import { Error404Component } from './page/error404/error404.component';
import { CashierDashboardComponent } from './layout/cashier-dashboard/cashier-dashboard.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    loadChildren: () => import('./module/admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'cashier',
    component: CashierDashboardComponent,
    loadChildren: () => import('./module/cashier/cashier.module')
      .then(m => m.CashierModule)
  },
  {
    path: '**',
    component: Error404Component
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
