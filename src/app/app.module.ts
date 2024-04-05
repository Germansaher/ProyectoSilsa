import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// inicio service
import { CargarScriptsService } from './cargar-scripts.service';
//fin servise


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/pages/inicio/inicio.component';
import { EncabezadoComponent } from './inicio/components/encabezado/encabezado.component';
import { CarruselComponent } from './inicio/components/carrusel/carrusel.component';
import { FooterComponent } from './inicio/components/footer/footer.component';
import { PruebaComponent } from './inicio/components/prueba/prueba.component';
import { MapaComponent } from './inicio/components/mapa/mapa.component';
import { CardComponent } from './inicio/components/card/card.component';
import { AcordionMVVComponent } from './inicio/components/acordion-mvv/acordion-mvv.component';
import { BotonteamComponent } from './inicio/components/botonteam/botonteam.component';
import { CarruselCardComponent } from './inicio/components/carrusel-card/carrusel-card.component';
import { ConocenosComponent } from './inicio/pages/conocenos/conocenos.component';
import { LoginComponent } from './inicio/pages/login/login.component';
import { LogComponent } from './inicio/components/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncabezadoComponent,
    CarruselComponent,
    FooterComponent,
    PruebaComponent,
    MapaComponent,
    CardComponent,
    AcordionMVVComponent,
    BotonteamComponent,
    CarruselCardComponent,
    ConocenosComponent,
    LoginComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
