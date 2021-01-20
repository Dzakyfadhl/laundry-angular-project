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

import { PerfumeRoutingModule } from './perfume-routing.module';
import { PerfumeComponent } from 'src/app/page/admin/perfume/perfume.component';
import { ModifPerumeComponent } from 'src/app/page/admin/perfume/modif-perume/modif-perume.component';


@NgModule({
  declarations: [
    PerfumeComponent,
    ModifPerumeComponent
  ],
  imports: [
    CommonModule,
    PerfumeRoutingModule,

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
export class PerfumeModule { }
