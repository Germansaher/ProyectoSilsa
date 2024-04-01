import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/pages/inicio/inicio.component';

const routes: Routes = [
  {
    path:'index',
    component:InicioComponent
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
