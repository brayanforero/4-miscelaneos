import { Route } from '@angular/router';
import { UsuarioEditComponent } from './edit.component';
import { UsuariosComponent } from './usuarios.component';

export const USERS_ROUTES: Route = {
  path: 'usuarios/:id',
  component: UsuariosComponent,
  children: [
    { path: 'editar', component: UsuarioEditComponent },
    {
      path: '**',
      pathMatch: 'full',
      component: UsuarioEditComponent,
    },
  ],
};
