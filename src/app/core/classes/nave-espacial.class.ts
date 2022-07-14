// Main NaveEspacial abstract class
export abstract class NaveEspacial {
  // Attributes
  protected _nombre: string;
  protected _categoria: string;
  protected _tipoDeCombustible: string;
  protected _nivelDeCombustible: number;
  protected _mision: string;
  protected _pesoEnKg: number;
  protected _estado: string = 'En tierra';
  protected _image: any;

  // Constructor
  constructor(
    nombre: string,
    categoria: string,
    tipoDeCombustible: string,
    nivelDeCombustible: number,
    mision: string,
    pesoEnKg: number,
    image: any
  ) {
    this._nombre = nombre;
    this._categoria = categoria;
    this._tipoDeCombustible = tipoDeCombustible;
    this._nivelDeCombustible = nivelDeCombustible;
    this._mision = mision;
    this._pesoEnKg = pesoEnKg;
    this._image = image;
  }
  
  // Methods
  abstract despegar(): void;
  abstract aterrizar(): void;

  propulsar(): void {
    this._estado = 'Propulsando.....';
  }

  // Getters
  public get nombre() : string {
    return  this._nombre;
  }
  public get categoria() : string {
    return  this._categoria;
  }
  public get tipoDeCombustible() : string {
    return  this._tipoDeCombustible;
  }
  public get nivelDeCombustible() : number {
    return  this._nivelDeCombustible;
  }
  public get mision() : string {
    return  this._mision;
  }
  public get pesoEnKg() : number {
    return  this._pesoEnKg;
  }
  public get estado() : string {
    return  this._estado;
  }
  public get image(): any{
    return this._image;
  }

  // Setters
  public set nombre(nombre : string) {
    this._nombre = nombre;
  }
  public set categoria(categoria : string) {
    this._categoria = categoria;
  }
  public set tipoDeCombustible(tipoDeCombustible : string) {
    this._tipoDeCombustible = tipoDeCombustible;
  }
  public set nivelDeCombustible(nivelDeCombustible : number) {
    this._nivelDeCombustible = nivelDeCombustible;
  }
  public set mision(mision : string) {
    this._mision = mision;
  }
  public set pesoEnKg(pesoEnKg : number) {
    this._pesoEnKg = pesoEnKg;
  }
  public set image(image: any) {
    this._image = image;
  }
  
}