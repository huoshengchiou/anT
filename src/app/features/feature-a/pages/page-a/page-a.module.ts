import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicModule } from '../../components/public/public.module';
import { PageAComponent } from './page-a.component';
import { SharedModule } from '../../../../core/shared/shared.module';
import { CompAComponent } from '../../components/comp-a/comp-a.component';
@NgModule({
  declarations: [PageAComponent, CompAComponent],
  imports: [
    CommonModule,
    PublicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageAComponent,
      },
    ]),
  ],
})
export class PageAModule {}
