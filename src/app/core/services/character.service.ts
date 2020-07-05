import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { 

  }

  // Servicio N°1
  findAllCharacters() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/characters/`);
  }

  // Servicio N°2
  findRandomCharacter() {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/character/random`);
  }

  // Servicio N°3
  findCharacterByName(name: string) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/characters?name=${name}`);
  }

  // Servicio N°4
  findCharacterById(characterId: number) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/characters/${characterId}`);
  }

  // Servicio N°5
  findCharacterByCategory(category: string) {
    return this.http.get<any>(`${environment.BREAKING_BAD_API}/characters?category=${category}`);
  }



}
