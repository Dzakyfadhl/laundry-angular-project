import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminContentComponent } from 'src/app/page/admin/admin-content/admin-content.component';

const routes: Routes = [
  {
    path: '',
    component: AdminContentComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
