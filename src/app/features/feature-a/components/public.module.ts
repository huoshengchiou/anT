import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WrapComponent } from './wrap/wrap.component';

@NgModule({
  declarations: [WrapComponent],
  imports: [CommonModule],
  exports: [WrapComponent],
})
export class PublicModule {}
