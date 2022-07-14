import { INaveTripulada } from '../interfaces/nave-tripulada.interface';
import { Astronauta } from './astronauta.class';
import { NaveEspacial } from "./nave-espacial.class";


export class NaveTripulada extends NaveEspacial implements INaveTripulada {
  // Attributes
  private _equipo: Astronauta[] = [];

  // Constructor
  constructor(
    nombre: string,
    categoria: string,
    tipoDeCombustible: string,
    nivelDeCombustible: number,
    mision: string,
    pesoEnKg: number,
  ) {
    super(
      nombre,
      categoria,
      tipoDeCombustible,
      nivelDeCombustible,
      mision,
      pesoEnKg
    );
  }

  // Methods
  // Init launch if all crew menbers are ready
  despegar(): void {
    let astronautasListos: number = 0;

    this._equipo.forEach((astronauta) => {
      if (astronauta.estado === 'Listo para despegar') {
        astronautasListos++;
      }
    });

    if (astronautasListos === this._equipo.length) {
      this._estado = 'Despegando....';
    } else {
      this._estado = 'A la espera';
    }
  }

  // Add a crew menber
  subirAstronauta(astronauta: Astronauta): void {
    astronauta.cambiarEstado('A Bordo');
    this._equipo.push(astronauta);
  }

  // Remove menber from the crew
  bajarAstronauta(astronauta: Astronauta): boolean {
    const find = this._equipo.findIndex((i) => i.nombre === astronauta.nombre);
    if (find) {
      this._equipo.splice(find, 1);
      astronauta.cambiarEstado('Sin abordar');
      return true;
    }
    return false;
  }

  // Land
  aterrizar(): void {
    if (this._mision === 'Aterrizar') {
      this._estado = 'Aterrizando....';
    }
  }

  // Getters
  public get equipo() : Astronauta[] {
    return this._equipo;
  }
  
  // Setters
  public set equipo(equipo: Astronauta[]) {
    this._equipo = equipo;
  }
}