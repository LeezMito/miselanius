import { Routes } from '@angular/router';
import { UsuarioNuevoComponent } from './usuario-nuevo/usuario-nuevo.component';
import { UsuarioEditarComponent } from './usuario-editar/usuario-editar.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';


export const USER_ROUTES: Routes = [
  { path: 'nuevo', component: UsuarioNuevoComponent },
  { path: 'editar', component: UsuarioEditarComponent },
  { path: 'detalle', component: UsuarioDetalleComponent },
  { path: '**', pathMatch: 'full', redirectTo:'editar' }
];
