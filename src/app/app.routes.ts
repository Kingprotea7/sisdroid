import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.page').then(m => m.MenuPage),
    children: [
      {
        path: 'escanear',
        loadComponent: () => import('./menu/escanear/escanear.page').then(m => m.EscanearPage)
      },
      {
        path: 'usuarios',
        loadComponent: () => import('./menu/usuarios/usuarios.page').then(m => m.UsuariosPage)
      },
      {
        path: 'reportes',
        loadComponent: () => import('./menu/reportes/reportes.page').then(m => m.ReportesPage)
      },
      {
        path: 'horarios',
        loadComponent: () => import('./menu/horarios/horarios.page').then(m => m.HorariosPage)
      },
      {
        path: 'configuracion',
        loadComponent: () => import('./menu/configuracion/configuracion.page').then(m => m.ConfiguracionPage)
      },
      {
        path: '',
        redirectTo: 'escanear',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'menu/escanear',
    pathMatch: 'full',
  }
];


