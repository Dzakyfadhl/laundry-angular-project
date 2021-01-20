import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaundryServeComponent } from 'src/app/page/admin/laundry-serve/laundry-serve.component';
import { ModifLaundryServeComponent } from 'src/app/page/admin/laundry-serve/modif-laundry-serve/modif-laundry-serve.component';

const routes: Routes = [
  {
    path: 'services',
    component: LaundryServeComponent
  },
  {
    path: 'modif-service',
    component: ModifLaundryServeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryServeRoutingModule { }
