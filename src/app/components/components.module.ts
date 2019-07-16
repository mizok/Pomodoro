import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppWrapperComponent],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
