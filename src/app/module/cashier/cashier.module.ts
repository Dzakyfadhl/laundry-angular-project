import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { CustomerModule } from './customer/customer.module';
import { TransactionModule } from './transaction/transaction.module';
import { CashierContentComponent } from 'src/app/page/cashier/cashier-content/cashier-content.component';
import {Card, CardModule} from 'primeng/card';



@NgModule({
  declarations: [CashierContentComponent],
  imports: [
    CommonModule,
    CashierRoutingModule,
    CustomerModule,
    TransactionModule,
    CardModule
  ]
})
export class CashierModule { }
