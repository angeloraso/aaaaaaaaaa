import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./user/user.routes').then(m => m.routes),
  }
];
