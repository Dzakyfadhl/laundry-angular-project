import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifPaymentComponent } from 'src/app/page/admin/payment/modif-payment/modif-payment.component';
import { PaymentComponent } from 'src/app/page/admin/payment/payment.component';

const routes: Routes = [
  {
    path: 'payments',
    component: PaymentComponent
  },
  {
    path: 'modif-payment',
    component: ModifPaymentComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
