import { Astronauta } from './astronauta.class';
import { NaveEspacial } from "./nave-espacial.class";

interface INaveTripulada {
  // Methods
  subirAstronauta(astronauta: Astronauta): void;
  bajarAstronauta(astronauta: Astronauta): boolean;
}

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
  despegar(): void {
    throw new Error("Method not implemented.");
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
  aterrizar(): void {
    throw new Error("Method not implemented.");
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