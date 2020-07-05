import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeathService {

  constructor(private http: HttpClient) { 

  }

  // Servicio N°9
  findAllDeaths() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/deaths/`);
  }

  // Servicio N°10
  findRandomDeath() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/random-death`);
  }

  // Servicio N°11
  findDeathCount() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/death-count`);
  }

}
