import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAdminRoutingModule } from './login-admin-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { RecuperarPassComponent } from './recuperar-pass/recuperar-pass.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InicioSesionComponent,
    CrearCuentaComponent,
    RecuperarPassComponent
  ],
  imports: [
    CommonModule,
    LoginAdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class LoginAdminModule { }
