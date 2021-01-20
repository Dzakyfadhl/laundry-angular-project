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

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from 'src/app/page/admin/user/user.component';
import { ModifUserComponent } from 'src/app/page/admin/user/modif-user/modif-user.component';


@NgModule({
  declarations: [
    UserComponent,
    ModifUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    
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
export class UserModule { }
