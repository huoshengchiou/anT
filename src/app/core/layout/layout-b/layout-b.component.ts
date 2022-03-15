import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../core/layout.service';
import { LayoutInitService } from '../core/layout-init.service';

@Component({
  selector: 'app-layout-b',
  templateUrl: './layout-b.component.html',
  styleUrls: ['./layout-b.component.scss'],
})
export class LayoutBComponent implements OnInit {
  headerCSSClasses: string;

  constructor(
    private initService: LayoutInitService,
    private layout: LayoutService
  ) {}

  ngOnInit(): void {
    this.headerCSSClasses = this.layout.getStringCSSClasses('header');
  }
}
