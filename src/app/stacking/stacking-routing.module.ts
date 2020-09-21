import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StackingComponent } from './stacking.component';

const routes: Routes = [{ path: '', component: StackingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StackingRoutingModule { }
