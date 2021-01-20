import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashierContentComponent } from 'src/app/page/cashier/cashier-content/cashier-content.component';

const routes: Routes = [
  {
    path: '',
    component: CashierContentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
