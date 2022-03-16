import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingModule } from './components/loading/loading.module';

@NgModule({
  imports: [CommonModule],
  exports: [LoadingModule],
})
export class SharedModule {}
