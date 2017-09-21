import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnlessDirective } from './unless.directive';
import { NgComponentOutlet2Directive } from './ng-component-outlet2.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    UnlessDirective,
    NgComponentOutlet2Directive
  ],
  exports: [
    UnlessDirective
  ]
})
export class SharedModule { }
