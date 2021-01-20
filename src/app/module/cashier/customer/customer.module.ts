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


import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from 'src/app/page/cashier/customer/customer.component';
import { ModifCustomerComponent } from 'src/app/page/cashier/customer/modif-customer/modif-customer.component';


@NgModule({
  declarations: [
    CustomerComponent,
    ModifCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    
    CardModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    InputNumberModule,
    InputTextareaModule
  ]
})
export class CustomerModule { }
