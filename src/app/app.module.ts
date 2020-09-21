import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './home/home-routing.module';
import { MenuRoutingModule } from './menu/menu-routing.module';
import { StackingRoutingModule } from './stacking/stacking-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    HomeRoutingModule,
    MenuRoutingModule,
    StackingRoutingModule,
    AboutRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
