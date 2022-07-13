export class Astronauta {
  // Attributes
  private _nombre: string;
  private _edad: number;
  private _cargo: string;
  private _estado: string = 'Sin abordar';

// Constructor
  constructor(nombre: string, edad: number, cargo: string) {
    this._nombre = nombre;
    this._edad = edad;
    this._cargo = cargo;
  }

  // Methods
  cambiarEstado(estado: string) {
    this._estado = estado;
  }

  // Getters
  public get nombre() : string {
    return this._nombre;
  }
  public get edad() : number {
    return this._edad;
  }
  public get cargo() : string {
    return this._cargo;
  }

  // Setters
  public set cargo(cargo : string) {
    this._cargo = cargo;
  }
  
  
}