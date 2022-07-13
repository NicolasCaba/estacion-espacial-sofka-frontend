import { NaveEspacial } from "./nave-espacial.class";

// Interface NaveNoTripulada
interface INaveNoTripulada {

}

// Class NaveNoTripulada
export class NaveNoTripulada extends NaveEspacial implements INaveNoTripulada {
  // Attributes
  protected nombre: string;
  protected categoria: string;
  protected tipoDeCombustible: string;
  protected nivelDeCombustible: number;
  protected mision: string;
  protected pesoEnKg: number;

  // Constructor
  constructor(
    nombre: string,
    categoria: string,
    tipoDeCombustible: string,
    nivelDeCombustible: number,
    mision: string,
    pesoEnKg: number,
  ) {
    super();

    this.nombre = nombre;
    this.categoria = categoria;
    this.tipoDeCombustible = tipoDeCombustible;
    this.nivelDeCombustible = nivelDeCombustible;
    this.mision = mision;
    this.pesoEnKg = pesoEnKg;
  }

  // Methods
  despegar(): void {
    if (this.nivelDeCombustible === 100 && this.estado === 'Listo para despegar') {
      this.estado = 'Despegando....';
    }
  }
  aterrizar(): void {
    throw new Error("Method not implemented.");
  }
  
}