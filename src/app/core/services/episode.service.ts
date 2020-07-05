import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  constructor(private http: HttpClient) { 

  }

  // Servicio N°6
  findAllEpisodes() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/episodes/`);
  }

  // Servicio N°7
  findEpisodeBySerie(serie: string) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/episodes?series=${serie}`);
  }

  // Servicio N°8
  findEpisodeById(id: number) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/episodes/${id}`);
  }

}
