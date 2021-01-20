import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from 'src/app/page/cashier/transaction/detail/detail.component';
import { ModifTransactionComponent } from 'src/app/page/cashier/transaction/modif-transaction/modif-transaction.component';
import { TransactionComponent } from 'src/app/page/cashier/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'transaction',
    component: TransactionComponent
  },
  {
    path: 'transaction/detail',
    component: DetailComponent
  },
  {
    path: 'modif-transaction',
    component: ModifTransactionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
