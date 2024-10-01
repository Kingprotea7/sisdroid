import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then( m => m.MenuPage)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full',
  }
];
