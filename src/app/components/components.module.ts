import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { TabFrameComponent } from './tab-frame/tab-frame.component';
import { AnimatedBtnComponent } from './animated-btn/animated-btn.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { TasksComponent } from './panels/tasks/tasks.component';
import { TimeComponent } from './panels/time/time.component';
import { ReportComponent } from './panels/report/report.component';



@NgModule({
  declarations: [TabFrameComponent, AnimatedBtnComponent, TabItemComponent, TasksComponent, TimeComponent, ReportComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports: [
    TabFrameComponent,
    TabItemComponent,
    TasksComponent, 
    TimeComponent, 
    ReportComponent
  ]
})
export class ComponentsModule { }
