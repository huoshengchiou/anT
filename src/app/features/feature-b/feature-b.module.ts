import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './components/c1/c1.component';
import { FeatureBRoutingModule } from './feature-b-routing.module';
import { PageB2Component } from './pages/page-b2/page-b2.component';

@NgModule({
  declarations: [C1Component, PageB2Component],
  imports: [CommonModule, FeatureBRoutingModule],
})
export class FeatureBModule {}
