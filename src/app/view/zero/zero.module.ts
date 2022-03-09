import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZeroRoutingModule } from './zero-routing.module';
import { ZeroComponent } from './zero.component';


@NgModule({
  declarations: [
    ZeroComponent
  ],
  imports: [
    CommonModule,
    ZeroRoutingModule
  ]
})
export class ZeroModule { }
