import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';

const routes: Routes = [
  {
    path:'login',
    component:InicioSesionComponent
  },
  {
    path:'crear-cuenta',
    component:CrearCuentaComponent
  },
  {
    path:'recuperar-pass',
    component:RecuperarPassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginAdminRoutingModule { }
