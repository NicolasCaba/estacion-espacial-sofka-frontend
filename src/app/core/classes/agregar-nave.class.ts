// import { NaveEspacial } from './nave-espacial.class';
// import { Astronauta } from './astronauta.class';
// import { NavesService } from '../../shared/services/naves/naves.service';
// import { switchMap } from 'rxjs';

// export class CrearNave {


//   constructor() { }

//   static crearNave(nave: NaveEspacial, image?: any, astronautas?: Astronauta[]) {
//     const tipoDeNave: string = nave.categoria;

//     switch (tipoDeNave) {
//       case 'lanzadera':

//         break;
//       case 'no-tripulada':

//         break;
//       case 'tripulada':

//         console.log(astronautas);

//         const astronautasIds: string[] = [];

        
//           const formAstronauta1 = {
//             nombre: astronautas![0].nombre,
//             edad: astronautas![0].edad,
//             cargo: astronautas![0].cargo,
//             estado: astronautas![0].estado
//           }
//           const formAstronauta2 = {
//             nombre: astronautas![1].nombre,
//             edad: astronautas![1].edad,
//             cargo: astronautas![1].cargo,
//             estado: astronautas![1].estado
//           }
//           const formAstronauta3 = {
//             nombre: astronautas![2].nombre,
//             edad: astronautas![2].edad,
//             cargo: astronautas![2].cargo,
//             estado: astronautas![2].estado
//           }

//           NavesService.instance.createAstronauta(formAstronauta1)
//             .subscribe((response) => {
//               astronautasIds.push(response.response._id);
//             });
//           NavesService.instance.createAstronauta(formAstronauta2)
//             .subscribe((response) => {
//               astronautasIds.push(response.response._id);
//             });
//           NavesService.instance.createAstronauta(formAstronauta3)
//             .subscribe((response) => {
//               astronautasIds.push(response.response._id);
//             });
        

//         const formArchivo = new FormData();
//         formArchivo.append('file', image);

//         const formNave = {
//           nombre: nave.nombre,
//           categoria: nave.categoria,
//           tipoDeCombustible: nave.tipoDeCombustible,
//           nivelDeCombustible: nave.nivelDeCombustible,
//           mision: nave.mision,
//           pesoEnKg: nave.pesoEnKg,
//           estado: nave.estado,
//           equipo: astronautasIds,
//           image_id: ""
//         }

//         NavesService.instance.agregarStorage(formArchivo)
//           .pipe(
//             switchMap((response) => {
//               formNave.image_id = response.response._id;
//               return NavesService.instance.createNaveTripulada(formNave);
//             })
//           )
//           .subscribe((response) => {
//             console.log(response);
//           });


//         break;
//     }
//   }
// }