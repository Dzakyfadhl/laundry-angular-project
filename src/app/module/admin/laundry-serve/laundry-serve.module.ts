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

import { LaundryServeRoutingModule } from './laundry-serve-routing.module';
import { LaundryServeComponent } from 'src/app/page/admin/laundry-serve/laundry-serve.component';
import { ModifLaundryServeComponent } from 'src/app/page/admin/laundry-serve/modif-laundry-serve/modif-laundry-serve.component';


@NgModule({
  declarations: [
    LaundryServeComponent,
    ModifLaundryServeComponent
  ],
  imports: [
    CommonModule,
    LaundryServeRoutingModule,

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
export class LaundryServeModule { }
