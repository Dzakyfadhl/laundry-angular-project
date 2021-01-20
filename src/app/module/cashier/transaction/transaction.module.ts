import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Card, CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';



import { TransactionRoutingModule } from './transaction-routing.module';
import { TransactionComponent } from 'src/app/page/cashier/transaction/transaction.component';
import { ModifTransactionComponent } from 'src/app/page/cashier/transaction/modif-transaction/modif-transaction.component';
import { DetailComponent } from 'src/app/page/cashier/transaction/detail/detail.component';


@NgModule({
  declarations: [
    TransactionComponent,
    ModifTransactionComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    TransactionRoutingModule,

    CardModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule
  ]
})
export class TransactionModule { }
