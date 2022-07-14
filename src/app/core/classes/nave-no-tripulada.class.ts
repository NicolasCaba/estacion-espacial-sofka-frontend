import { NaveEspacial } from "./nave-espacial.class";

// Class NaveNoTripulada
export abstract class NaveNoTripulada extends NaveEspacial {
  // Contructor
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
    if (this._nivelDeCombustible === 100 && this._estado === 'Listo para despegar') {
      this._estado = 'Despegando....';
    }
  }
  aterrizar(): void {
    if (this._mision === 'Regresar a casa') {
      this.propulsar();
      this._estado = 'Aterrizando....';
    }
  }

  recogerInformacion(): void {
    const informacion = {
      temperatura: 23.4,
      distancia: '2345km',
      velocidad: '645km/h'
    }
    this.enviarInformacion(informacion);
  }

  enviarInformacion(informacion: Object): void {
    this._estado = 'Enviando informacion....';
  }
}


export class Explorador extends NaveNoTripulada {
  // Attributes
  private _fotos: Object[] = [];

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
  override recogerInformacion (): void {
    const informacion: Object = {
      temperatura: 23.1,
      estado: this._estado,
      posicion: '12543 2345 453',
      condicion: 'Buena',
      fotos: this._fotos
    }
    this.enviarInformacion(informacion);
  }

  tomarFoto(foto: Object): void {
    this._fotos.push(foto);
  }

  mover() {
    this._estado = 'Moviendo.....';
  }
}

export class SondaEspacial extends NaveNoTripulada {
  // Attributes
  private _fotos: Object[] = [];

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
  override recogerInformacion(): void {
    const informacion: Object = {
      velocidad: '6575km/h',
      fotos: this._fotos,
      condicion: 'Buena'
    }
    this.enviarInformacion(informacion);
  }

  tomarFoto(foto: Object): void {
    this._fotos.push(foto);
  }
}