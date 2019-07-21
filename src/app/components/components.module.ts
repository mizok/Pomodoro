import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { TabFrameComponent } from './tab-frame/tab-frame.component';

@NgModule({
  declarations: [TabFrameComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    TabFrameComponent
  ]
})
export class ComponentsModule { }
