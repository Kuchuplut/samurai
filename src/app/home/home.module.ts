import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { TransferService } from '../shared/services/transfer.service';

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, CommonModule, HomeRoutingModule],
  providers: [TransferService],
})
export class HomeModule {}
