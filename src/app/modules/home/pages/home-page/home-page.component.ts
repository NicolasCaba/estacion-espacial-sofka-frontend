import { Component, OnInit } from '@angular/core';
import { NaveLanzadera } from 'src/app/core/classes/nave-lanzadera.class';
import { NaveNoTripulada } from 'src/app/core/classes/nave-no-tripulada.class';
import { NavesService } from 'src/app/shared/services/naves/naves.service';
import { NaveTripulada } from '../../../../core/classes/nave-tripulada.class';
import { NaveEspacial } from '../../../../core/classes/nave-espacial.class';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  busqueda: string = '';
  sort: string = 'todas';
  
  showedNaves: NaveEspacial[] = [];

  responseNavesLanzaderas: NaveLanzadera[] = [];
  responseNavesNoTripuladas: NaveNoTripulada[] = [];
  responseNavesTripuladas: NaveTripulada[] = [];

  matches: NaveEspacial[] = [];

  constructor(private navesService: NavesService) {
  }

  ngOnInit(): void {
    this.navesService.getNavesLanzaderas()
      .subscribe((response) => {
        this.responseNavesLanzaderas = response;
        this.responseNavesLanzaderas.forEach((nave) => this.showedNaves.push(nave));
      });

    this.navesService.getNavesNoTripuladas()
      .subscribe((response) => {
        this.responseNavesNoTripuladas = response;
        this.responseNavesNoTripuladas.forEach((nave) => this.showedNaves.push(nave));
      });

    this.navesService.getNavesTripuladas()
      .subscribe((response) => {
        this.responseNavesTripuladas = response;
        this.responseNavesTripuladas.forEach((nave) => this.showedNaves.push(nave));
      });

    
    
  }


  changeOption(value: string) {
    this.sort = value;
    if (value === 'todas') {
      this.showedNaves = [];
      this.responseNavesLanzaderas.forEach((nave) => this.showedNaves.push(nave));
      this.responseNavesNoTripuladas.forEach((nave) => this.showedNaves.push(nave));
      this.responseNavesTripuladas.forEach((nave) => this.showedNaves.push(nave));
    } else if (value === 'lanzadera') {
      this.showedNaves = this.responseNavesLanzaderas;
    } else if (value === 'no-tripulada') {
      this.showedNaves = this.responseNavesNoTripuladas;
    } else if (value === 'tripulada') {
      this.showedNaves = this.responseNavesTripuladas;
    }
  }

  buscarPorNombre() {
    if (this.busqueda.length > 1) {
      this.showedNaves = [];
      this.navesService.getNaveLanzaderaByName(this.busqueda)
        .subscribe((response) => {
          if (response) {
            response.forEach((nave: any) => this.showedNaves.push(nave))
          }
        });
      this.navesService.getNaveNoTripuladaByName(this.busqueda)
        .subscribe((response) => {
          if (response) {
            response.forEach((nave: any) => this.showedNaves.push(nave))
          }
        });
      this.navesService.getNaveTripuladaByName(this.busqueda)
        .subscribe((response) => {
          if (response) {
            response.forEach((nave: any) => this.showedNaves.push(nave))
          }
        });

    } else {
      this.showedNaves = [];
      this.changeOption('todas');
    }


  }


}
