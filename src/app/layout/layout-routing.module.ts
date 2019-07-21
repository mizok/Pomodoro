import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppWrapperComponent } from '../layout/app-wrapper/app-wrapper.component'

const routes: Routes = [
  {
    path:'home',
    component:AppWrapperComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
