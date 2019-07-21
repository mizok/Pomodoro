import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { LayoutModule } from './layout/layout.module';
import { TabFrameComponent } from './tab-frame/tab-frame.component';

@NgModule({
  declarations: [AppWrapperComponent, TabFrameComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
