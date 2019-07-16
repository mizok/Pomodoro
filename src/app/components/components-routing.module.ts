import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppWrapperComponent } from './app-wrapper/app-wrapper.component';

const routes: Routes = [
  {
    path:'',
    component: AppWrapperComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
