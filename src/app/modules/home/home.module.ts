import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AgregarNaveTripuladaComponent } from './components/agregar-nave-tripulada/agregar-nave-tripulada.component';
import { AgregarNaveNoTripuladaComponent } from './components/agregar-nave-no-tripulada/agregar-nave-no-tripulada.component';
import { AgregarNaveLanzaderaComponent } from './components/agregar-nave-lanzadera/agregar-nave-lanzadera.component';
import { CrearPageComponent } from './pages/crear-page/crear-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AgregarNaveTripuladaComponent,
    AgregarNaveNoTripuladaComponent,
    AgregarNaveLanzaderaComponent,
    CrearPageComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
