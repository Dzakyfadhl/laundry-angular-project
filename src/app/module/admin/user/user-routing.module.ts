import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifUserComponent } from 'src/app/page/admin/user/modif-user/modif-user.component';
import { UserComponent } from 'src/app/page/admin/user/user.component';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent
  },
  {
    path: 'modif-user',
    component: ModifUserComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
