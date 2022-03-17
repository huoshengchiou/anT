import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBComponent } from './pages/page-b/page-b.component';
import { PageB2Component } from './pages/page-b2/page-b2.component';

const routes: Routes = [
  {
    path: '',
    component: PageBComponent,
  },
  {
    path: 'b2',
    component: PageB2Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeatureBRoutingModule {}
