import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/pages/inicio/inicio.component';
import { ConocenosComponent } from './inicio/pages/conocenos/conocenos.component';
import { LoginComponent } from './inicio/pages/login/login.component';
import { ContactanosComponent } from './inicio/pages/contactanos/contactanos.component';
import { DceComponent } from './inicio/pages/dce/dce.component';

const routes: Routes = [
  {
    path:'index',
    component:InicioComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'conocenos',
    component:ConocenosComponent
  },
  {
    path:'contactanos',
    component:ContactanosComponent
  },
  {
    path:'dce',
    component:DceComponent
  },
  {
    path:'',
    component:InicioComponent
  },

  {
    path:'**',
    redirectTo:'index'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
