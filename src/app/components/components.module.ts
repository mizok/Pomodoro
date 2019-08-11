import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { TabFrameComponent } from './tab-frame/tab-frame.component';
import { AnimatedBtnComponent } from './animated-btn/animated-btn.component';
import { TabItemComponent } from './tab-item/tab-item.component';


@NgModule({
  declarations: [TabFrameComponent, AnimatedBtnComponent, TabItemComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    TabFrameComponent,
    TabItemComponent
  ]
})
export class ComponentsModule { }
