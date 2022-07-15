import { Component, OnInit } from '@angular/core';
import { CrearNavesService } from 'src/app/shared/services/crear-naves/crear-naves.service';
import { NaveNoTripulada, SondaEspacial, Explorador } from '../../../../core/classes/nave-no-tripulada.class';

@Component({
  selector: 'app-agregar-nave-no-tripulada',
  templateUrl: './agregar-nave-no-tripulada.component.html',
  styleUrls: ['./agregar-nave-no-tripulada.component.css']
})
export class AgregarNaveNoTripuladaComponent implements OnInit {

  tipo: string = '';
  archivoImagen!: File;
  nave: SondaEspacial | Explorador = new  SondaEspacial('', '', '', '', 0, '', 0, ''); 

  constructor(private crearNavesService: CrearNavesService) { }

  ngOnInit(): void {
  }

  archivo(event: any): void {
    this.archivoImagen = event.target.files[0];
  }

  enviar() {
    this.crearNavesService.crearNave(this.nave, this.archivoImagen);
  }

}
