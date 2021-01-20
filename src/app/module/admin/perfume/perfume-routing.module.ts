import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModifPerumeComponent } from 'src/app/page/admin/perfume/modif-perume/modif-perume.component';
import { PerfumeComponent } from 'src/app/page/admin/perfume/perfume.component';

const routes: Routes = [
  {
    path: 'perfumes',
    component: PerfumeComponent
  },
  {
    path: 'modif-perfume',
    component: ModifPerumeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeRoutingModule { }
