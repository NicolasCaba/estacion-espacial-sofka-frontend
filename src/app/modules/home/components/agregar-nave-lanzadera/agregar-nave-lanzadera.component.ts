import { Component, OnInit } from '@angular/core';
import { NaveLanzadera } from '../../../../core/classes/nave-lanzadera.class';
import { NaveNoTripulada } from '../../../../core/classes/nave-no-tripulada.class';
import { NaveTripulada } from '../../../../core/classes/nave-tripulada.class';
import { CrearNavesService } from '../../../../shared/services/crear-naves/crear-naves.service';
import { NavesService } from '../../../../shared/services/naves/naves.service';
import { NaveEspacial } from '../../../../core/classes/nave-espacial.class';
import { Astronauta } from '../../../../core/classes/astronauta.class';

@Component({
  selector: 'app-agregar-nave-lanzadera',
  templateUrl: './agregar-nave-lanzadera.component.html',
  styleUrls: ['./agregar-nave-lanzadera.component.css']
})
export class AgregarNaveLanzaderaComponent implements OnInit {
  archivoImagen!: File;
  cargaId: string = '';
  carga!: NaveNoTripulada | NaveTripulada;
  nave: NaveLanzadera = new NaveLanzadera('', '', '', 0, '', 0, this.carga, '')
  cargaOptions: any[] = [];

  constructor(private crearNavesService: CrearNavesService, private navesService: NavesService) { }

  ngOnInit(): void {
    this.navesService.getNavesNoTripuladas()
      .subscribe((response) => {
        response.forEach((nave: any) => {this.cargaOptions.push(nave)});
      });
    this.navesService.getNavesTripuladas()
      .subscribe((response) => {
        response.forEach((nave: any) => {this.cargaOptions.push(nave)});
      });
  }

  archivo(event: any): void {
    this.archivoImagen = event.target.files[0];
  }

  enviar() {
    this.crearNavesService.crearNave(this.nave, this.archivoImagen, [], this.cargaId);
  }

}
