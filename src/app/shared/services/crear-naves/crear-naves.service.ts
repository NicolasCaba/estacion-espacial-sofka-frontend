import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Astronauta } from 'src/app/core/classes/astronauta.class';
import { NaveEspacial } from 'src/app/core/classes/nave-espacial.class';
import { NavesService } from '../naves/naves.service';
import { NaveNoTripulada, SondaEspacial } from '../../../core/classes/nave-no-tripulada.class';
import { NaveLanzadera } from '../../../core/classes/nave-lanzadera.class';
import { NaveTripulada } from '../../../core/classes/nave-tripulada.class';

@Injectable({
  providedIn: 'root'
})
export class CrearNavesService {

  constructor(private navesService: NavesService, private router: Router) { }

  crearNave(nave: any, image?: any, astronautas?: Astronauta[], cargaId?: string) {
    const tipoDeNave: string = nave.categoria;

    switch (tipoDeNave) {
      case 'lanzadera':
        this.crearNaveLanzadera(nave, image, cargaId);
        break;
      case 'no-tripulada':
        this.crearNaveNoTripulada(nave, image);
        break;
      case 'tripulada':
        this.crearNaveTripulada(nave, image, astronautas);
        break;
    }
  }

  // Creacion nave tripulada
  crearNaveTripulada(nave: NaveEspacial, image?: any, astronautas?: Astronauta[]) {
    const astronautasIds: string[] = [];

    const formAstronauta1 = {
      nombre: astronautas![0].nombre,
      edad: astronautas![0].edad,
      cargo: astronautas![0].cargo,
      estado: astronautas![0].estado
    }
    const formAstronauta2 = {
      nombre: astronautas![1].nombre,
      edad: astronautas![1].edad,
      cargo: astronautas![1].cargo,
      estado: astronautas![1].estado
    }
    const formAstronauta3 = {
      nombre: astronautas![2].nombre,
      edad: astronautas![2].edad,
      cargo: astronautas![2].cargo,
      estado: astronautas![2].estado
    }

    this.navesService.createAstronauta(formAstronauta1)
      .subscribe((response) => {
        astronautasIds.push(response.response._id);
      });
    this.navesService.createAstronauta(formAstronauta2)
      .subscribe((response) => {
        astronautasIds.push(response.response._id);
      });
    this.navesService.createAstronauta(formAstronauta3)
      .subscribe((response) => {
        astronautasIds.push(response.response._id);
      });


    const formArchivo = new FormData();
    formArchivo.append('file', image);

    const formNave = {
      nombre: nave.nombre,
      categoria: nave.categoria,
      tipoDeCombustible: nave.tipoDeCombustible,
      nivelDeCombustible: nave.nivelDeCombustible,
      mision: nave.mision,
      pesoEnKg: nave.pesoEnKg,
      estado: nave.estado,
      equipo: astronautasIds,
      image_id: ""
    }

    this.navesService.agregarStorage(formArchivo)
      .pipe(
        switchMap((response) => {
          formNave.image_id = response.response._id;
          return this.navesService.createNaveTripulada(formNave);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

  // Creacion nave no tripulada
  crearNaveNoTripulada(nave: NaveNoTripulada, image?: any) {
    const formArchivo = new FormData();
    formArchivo.append('file', image);

    const formNave = {
      nombre: nave.nombre,
      categoria: nave.categoria,
      tipo: nave.tipo,
      tipoDeCombustible: nave.tipoDeCombustible,
      nivelDeCombustible: nave.nivelDeCombustible,
      mision: nave.mision,
      pesoEnKg: nave.pesoEnKg,
      estado: nave.estado,
      fotos: ['foto1.jpg', 'foto2.jpg'],
      image_id: ""
    }

    this.navesService.agregarStorage(formArchivo)
      .pipe(
        switchMap((response) => {
          formNave.image_id = response.response._id;
          return this.navesService.createNaveNoTripulada(formNave);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

  // Creacion nave lanzadera
  crearNaveLanzadera(nave: NaveLanzadera, image?: any, cargaId?: string) {
    const formArchivo = new FormData();
    formArchivo.append('file', image);

    const formNave = {
      nombre: nave.nombre,
      categoria: nave.categoria,
      tipoDeCombustible: nave.tipoDeCombustible,
      nivelDeCombustible: nave.nivelDeCombustible,
      mision: nave.mision,
      pesoEnKg: nave.pesoEnKg,
      estado: nave.estado,
      cargaId,
      image_id: ""
    }

    this.navesService.agregarStorage(formArchivo)
      .pipe(
        switchMap((response) => {
          formNave.image_id = response.response._id;
          return this.navesService.createNaveLanzadera(formNave);
        })
      )
      .subscribe((response) => {
        this.router.navigate(['/']);
      });
  }

}
