import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./user.component').then(m => m.UserComponent)
  },
  {
    path: 'edit',
    loadComponent: () => import('./user.component').then(m => m.UserComponent)
  },
  {
    path: 'add',
    loadComponent: () => import('./user.component').then(m => m.UserComponent)
  }
];
