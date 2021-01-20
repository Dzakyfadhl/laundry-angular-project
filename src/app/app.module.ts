import { BrowserModule } from '@angular/platform-browser';
import { Input, NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {Card, CardModule} from 'primeng/card';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './module/admin/admin.module';
import { CashierModule } from './module/cashier/cashier.module';
import { BaseComponent } from './layout/base/base.component';
import { LoginComponent } from './layout/login/login.component';
import { AdminDashboardComponent } from './layout/admin-dashboard/admin-dashboard.component';
import { CashierDashboardComponent } from './layout/cashier-dashboard/cashier-dashboard.component';
import { Error404Component } from './page/error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    AdminDashboardComponent,
    CashierDashboardComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    BrowserAnimationsModule,
    FormsModule,
    AdminModule,
    CashierModule,

    InputTextModule,
    AutoCompleteModule,
    ButtonModule,
    MenubarModule,
    ButtonModule,
    ToastModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
