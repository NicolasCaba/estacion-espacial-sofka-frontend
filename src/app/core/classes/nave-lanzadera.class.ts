import { INaveLanzadera } from "../interfaces/nave-lanzadera.interface";
import { NaveEspacial } from "./nave-espacial.class";
import { NaveNoTripulada } from "./nave-no-tripulada.class";
import { NaveTripulada } from "./nave-tripulada.class";


// Class NaveLanzadera
export class NaveLanzadera extends NaveEspacial implements INaveLanzadera {
  // Attributes
  private _carga: NaveNoTripulada | NaveTripulada;

  // Constructor
  constructor(
    nombre: string,
    categoria: string,
    tipoDeCombustible: string,
    nivelDeCombustible: number,
    mision: string,
    pesoEnKg: number,
    carga: NaveNoTripulada | NaveTripulada
  ) {
    super(
      nombre,
      categoria,
      tipoDeCombustible,
      nivelDeCombustible,
      mision,
      pesoEnKg
    );

    this._carga = carga;
  }

  // Methods
  despegar(): void {
    if (this._carga.estado === 'Listo para despegar') {
      this._estado = 'Despegando....';
    }
  }
  cambiarCarga(): void {
    throw new Error("Method not implemented.");
  }
  soltarCarga(): boolean {
    throw new Error("Method not implemented.");
  }
  aterrizar(): void {

  }

  // Getters
  public get carga() : NaveNoTripulada | NaveTripulada {
    return this._carga;
  }

  // Setters
  public set carga(carga : NaveNoTripulada | NaveTripulada) {
    this._carga = carga;
  }
  
  

}