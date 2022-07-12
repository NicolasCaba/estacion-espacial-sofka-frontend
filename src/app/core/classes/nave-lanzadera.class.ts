import { NaveEspacial } from "./nave-espacial.class";
import { NaveNoTripulada } from "./nave-no-tripulada.class";
import { NaveTripulada } from "./nave-tripulada.class";


export interface INaveLanzadera {
  nombre: string;
  categoria: string;
  tipoDeCombustible: string;
  nivelDeCombustible: number;
  mision: string;
  pesoEnKg: number;
  carga: NaveNoTripulada | NaveTripulada;

  despegar(): void;
  propulsar(): void;
  cambiarCarga(): void;
  soltarCarga(): boolean;
}

export class NaveLanzadera extends NaveEspacial implements INaveLanzadera {
  nombre: string;
  categoria: string ;
  tipoDeCombustible: string ;
  nivelDeCombustible: number ;
  mision: string ;
  pesoEnKg: number;
  carga: NaveNoTripulada | NaveTripulada;

  constructor (
    nombre: string,
    categoria: string,
    tipoDeCombustible: string,
    nivelDeCombustible: number,
    mision: string,
    pesoEnKg: number,
    carga: NaveNoTripulada | NaveTripulada
  ) {
    super();

    this.nombre = nombre;
    this.categoria = categoria;
    this.tipoDeCombustible = tipoDeCombustible;
    this.nivelDeCombustible = nivelDeCombustible;
    this.mision = mision;
    this.pesoEnKg = pesoEnKg;
    this.carga = carga;
  }
  

  despegar(): void {
    
  }
  cambiarCarga(): void {
    throw new Error("Method not implemented.");
  }
  soltarCarga(): boolean {
    throw new Error("Method not implemented.");
  }
  aterrizar(): void {
    
  }

}