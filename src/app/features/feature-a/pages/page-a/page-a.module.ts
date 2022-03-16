import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PublicModule } from '../../components/public/public.module';
import { PageAComponent } from './page-a.component';

@NgModule({
  declarations: [PageAComponent],
  imports: [
    CommonModule,
    PublicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageAComponent,
      },
    ]),
  ],
})
export class PageAModule {}
