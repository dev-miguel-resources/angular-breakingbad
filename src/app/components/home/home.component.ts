import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import swal from 'sweetalert2';

import { CharacterService } from '../../core/services/character.service';

import { Character } from '../../core/model/character';
import { Filter } from '../../core/model/filter';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allCharactersAreShowed: boolean;
  serieName: string;
  characterList: Character[];
  pageSize: number;
  page: number;
  totalRecords: number;
  loading: boolean;

  constructor(private characterService: CharacterService) { 
    this.page = 1;
    this.pageSize = 8;
    this.characterList = [];
    this.serieName = '';
    this.loading = true;
  }

  ngOnInit() {
    this.findAllCharacters();
  }

  onSearch(filter: Filter): void {
    const { characterName, serieName } = filter;
    
    if (characterName !== '' && serieName !== '') {
        this.findInMemoryData(characterName, serieName);
        return;
    }

    this.resetValues();

    if (characterName === '' && serieName === '') {
      this.findAllCharacters();
    } else if (characterName !== '' && serieName === '') {
      this.findCharactersByName(characterName);
    } else if (characterName === '' && serieName !== '') {
      this.findCharacterByCategory(serieName);
    } else {
      this.findAllCharacters();
    }

  }

  onTryLuck(event: boolean): void {
    if (event) {
      this.resetValues();
      this.findCharactersByLucky();
    }
  }

  pageChanged(page: number): void {
    this.page = page;
  }

  private findAllCharacters(): void {
    this.characterService.findAllCharacters().pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findCharacterByCategory(serie: string): void {
    this.characterService.findCharacterByCategory(serie).pipe(take(1)).subscribe(resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findCharactersByName(name: string): void {
    this.characterService.findCharacterByName(name).pipe(take(1)).subscribe(
      resp => {
      if (resp.length > 0) {
        this.characterList = resp;
        this.totalRecords = this.characterList.length;
      } else {
        swal.fire('Ups', 'El personaje que intentas buscar no existe', 'warning');
        this.characterList = [];
      }
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema persiste puede que el servicio no este funcionando.', 'error');
    });
  }

  private findCharactersByLucky(): void {
    this.characterService.findRandomCharacter().pipe(take(1)).subscribe(
      resp => {
      this.characterList = resp;
      this.totalRecords = this.characterList.length;
      this.loading = false;
    },
    error => {
      swal.fire('Ha Ocurrido un error', 'Intente nuevamente, sí el problema puede persiste que el servicio no este funcionando.', 'error');
    });
  }

  private findInMemoryData(characterName: string, serieName: string): void {
    this.loading = true;

    const areNameFound = ( { name }) => name.includes(characterName);
    const charactersArrayByName = this.characterList.filter(areNameFound);

    if (charactersArrayByName && charactersArrayByName.length > 0) {
      this.characterList = [];
      const areMemberOfSerie = ( { category }) => category === serieName;
      const charactersArrayBySerie = charactersArrayByName.filter(areMemberOfSerie);

      if (charactersArrayBySerie && charactersArrayBySerie.length > 0) {
        charactersArrayBySerie.forEach(character => {
          this.characterList.push(character);
        });
        this.loading = false;
      } else {
        swal.fire('Ups!', 'El personaje que intentas buscar no pertenece a la serie seleccionada.', 'error');
        this.loading = false;
      }

    } else {
      this.characterList = [];
      swal.fire('Ups!', 'El personaje que intentas buscar no existe', 'error');
      this.loading = false;
    }

  }

  private resetValues(): void {
    this.loading = true;
    this.characterList = [];
    this.totalRecords = 0;
    this.page = 1;
  }

}
