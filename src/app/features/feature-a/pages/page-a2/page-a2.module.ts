import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageA2Component } from './page-a2.component';
import { PublicModule } from '../../components/public/public.module';

@NgModule({
  declarations: [PageA2Component],
  imports: [
    CommonModule,
    PublicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PageA2Component,
      },
    ]),
  ],
})
export class PageA2Module {}
