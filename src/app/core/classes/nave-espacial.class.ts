export abstract class NaveEspacial {
  protected abstract nombre: string;
  protected abstract categoria: string;
  protected abstract tipoDeCombustible: string;
  protected abstract nivelDeCombustible: number;
  protected abstract mision: string;
  protected abstract pesoEnKg: number;
  protected estado: string = 'En tierra';
  
  abstract despegar(): void;
  abstract aterrizar(): void;

  propulsar(): void {
    this.estado = 'Propulsando.....';
  }
}