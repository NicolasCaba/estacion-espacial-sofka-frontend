import { NaveEspacial } from './nave-espacial.class';

export class CrearNave {
  crearNave(nave: NaveEspacial) {
    const tipoDeNave: string = nave.categoria;
    
    switch (tipoDeNave) {
      case 'lanzadera':
        
        break;
      case 'no-tripulada':

        break;
      case 'tripulada':

        break;
    }
  }
}