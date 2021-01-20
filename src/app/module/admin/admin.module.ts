import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Card, CardModule} from 'primeng/card';



import { AdminRoutingModule } from './admin-routing.module';
import { LaundryServeModule } from './laundry-serve/laundry-serve.module';
import { PaymentModule } from './payment/payment.module';
import { PerfumeModule } from './perfume/perfume.module';
import { UserModule } from './user/user.module';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import { AdminContentComponent } from 'src/app/page/admin/admin-content/admin-content.component';



@NgModule({
  declarations: [
    AdminContentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    LaundryServeModule,
    PaymentModule,
    PerfumeModule,
    UserModule,

    MenubarModule,
    ButtonModule,
    CardModule
  ]
})
export class AdminModule { }
