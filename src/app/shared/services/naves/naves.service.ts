import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NaveLanzadera } from 'src/app/core/classes/nave-lanzadera.class';
import { NaveNoTripulada } from 'src/app/core/classes/nave-no-tripulada.class';
import { NaveTripulada } from 'src/app/core/classes/nave-tripulada.class';
import { environment } from 'src/environments/environment';
import { Astronauta } from '../../../core/classes/astronauta.class';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  apiUrl: string = environment.apiUrl;

  navesLanzaderas: NaveLanzadera[] = [];
  navesNoTripuladas: NaveNoTripulada [] = [];
  navesTripuladas: NaveTripulada[] = [];

  constructor(private http: HttpClient) { 
  }

  // GET naves
  getNavesLanzaderas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/lanzadera`);
  }
  getNavesNoTripuladas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/no-tripulada`);
  }
  getNavesTripuladas(): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/tripulada`);
  }

  // GET naves by id
  getNaveNoTripuladaById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/no-tripulada/${id}`);
  }
  getNaveTripuladaById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/tripulada/${id}`);
  }

  // GET naves by name
  getNaveNoTripuladaByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/no-tripulada/nombre/${name}`);
  }
  getNaveTripuladaByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/tripulada/nombre/${name}`);
  }
  getNaveLanzaderaByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/naves/lanzadera/nombre/${name}`);
  }

  // GET image by id
  getStorageById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/storage/${id}`);
  }

  // GET astronauta by id
  getAstronautaById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/astronautas/${id}`);
  }

  // POST Upload image
  agregarStorage(storage: FormData): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/storage`, storage);
  }

  // POST create new nave lanzadera
  createNaveLanzadera(nave: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/naves/lanzadera`, nave);
  }
  createNaveNoTripulada(nave: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/naves/no-tripulada`, nave);
  }
  createNaveTripulada(nave: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/naves/tripulada`, nave);
  }

  // POST create new astronauta
  createAstronauta(astronauta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/astronautas`, astronauta);
  }
}
