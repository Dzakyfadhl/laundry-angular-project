import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {Card, CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PasswordModule} from 'primeng/password';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from 'src/app/page/admin/payment/payment.component';
import { ModifPaymentComponent } from 'src/app/page/admin/payment/modif-payment/modif-payment.component';


@NgModule({
  declarations: [
    PaymentComponent,
    ModifPaymentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,

    CardModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    InputTextareaModule,
    PasswordModule
  ]
})
export class PaymentModule { }
