import { RouterModule, Routes } from '@angular/router';
import { HOME_ROUTES } from './components/home/home.routes';
import { USERS_ROUTES } from './components/usuarios/usuarios.routes';
const ROUTES: Routes = [
  HOME_ROUTES,
  USERS_ROUTES,
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

export const APP_ROUTING = RouterModule.forRoot(ROUTES);
