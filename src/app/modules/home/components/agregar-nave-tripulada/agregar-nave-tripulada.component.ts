import { Component, OnInit } from '@angular/core';
import { NaveTripulada } from '../../../../core/classes/nave-tripulada.class';
import { Astronauta } from '../../../../core/classes/astronauta.class';
import { CrearNavesService } from 'src/app/shared/services/crear-naves/crear-naves.service';

@Component({
  selector: 'app-agregar-nave-tripulada',
  templateUrl: './agregar-nave-tripulada.component.html',
  styleUrls: ['./agregar-nave-tripulada.component.css']
})
export class AgregarNaveTripuladaComponent implements OnInit {

  archivoImagen!: File;

  nave: NaveTripulada = new NaveTripulada('', '', '', 0, '', 0, '');
  astronauta1: Astronauta = new Astronauta('', 0, '');
  astronauta2: Astronauta = new Astronauta('', 0, '');
  astronauta3: Astronauta = new Astronauta('', 0, '');


  constructor(private crearNavesService: CrearNavesService) { }

  ngOnInit(): void {
    
  }

  archivo(event: any): void {
    this.archivoImagen = event.target.files[0];
  }

  enviar() {
    this.crearNavesService.crearNave(this.nave, this.archivoImagen, [this.astronauta1, this.astronauta2, this.astronauta3]);
  }

}
