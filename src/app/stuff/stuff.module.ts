import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StuffRoutingModule } from './stuff-routing.module';
import { HelloComponent } from './hello/hello.component';

import { SharedModule } from '../shared/shared.module';
import { GoodbyeComponent } from './goodbye/goodbye.component';

@NgModule({
  imports: [
    CommonModule,
    StuffRoutingModule,
    SharedModule
  ],
  declarations: [ HelloComponent, GoodbyeComponent ],
  //exports: [ HelloComponent ]
})
export class StuffModule { }
