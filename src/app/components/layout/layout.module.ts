import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';


@NgModule({
  declarations: [DemoFrameComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  exports:[
    DemoFrameComponent
  ]
})
export class LayoutModule { }
