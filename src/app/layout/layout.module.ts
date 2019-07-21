import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppWrapperComponent } from './app-wrapper/app-wrapper.component'
import { ComponentsModule } from '../components/components.module'
import { LayoutRoutingModule } from './layout-routing.module';
import { DemoFrameComponent } from './demo-frame/demo-frame.component';
import { DeviceShellComponent } from './device-shell/device-shell.component'; 
import { ViewComponent } from './view/view.component'

@NgModule({
  declarations: [DemoFrameComponent, DeviceShellComponent,AppWrapperComponent,ViewComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ComponentsModule
  ],
  exports:[
    DemoFrameComponent
  ]
})
export class LayoutModule { }
