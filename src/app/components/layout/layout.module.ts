import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';
import { DeviceShellComponent } from './device-shell/device-shell.component'; 

@NgModule({
  declarations: [DemoFrameComponent, DeviceShellComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
  ],
  exports:[
    DemoFrameComponent
  ]
})
export class LayoutModule { }
