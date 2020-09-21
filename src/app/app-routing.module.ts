import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutingModule } from './home/home-routing.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
  { path: 'stacking', loadChildren: () => import('./stacking/stacking.module').then(m => m.StackingModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
