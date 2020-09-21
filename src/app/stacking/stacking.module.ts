import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StackingRoutingModule } from './stacking-routing.module';
import { StackingComponent } from './stacking.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StackingComponent],
  imports: [SharedModule, CommonModule, StackingRoutingModule],
})
export class StackingModule {}
