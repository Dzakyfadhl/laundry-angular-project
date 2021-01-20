import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from 'src/app/page/cashier/customer/customer.component';
import { ModifCustomerComponent } from 'src/app/page/cashier/customer/modif-customer/modif-customer.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerComponent
    },
    {
      path: 'modif-customer',
      component: ModifCustomerComponent
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
